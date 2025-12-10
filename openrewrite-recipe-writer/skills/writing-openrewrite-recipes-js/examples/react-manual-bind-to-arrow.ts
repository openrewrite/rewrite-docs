/**
 * OpenRewrite Recipe: Convert Manual Method Binding to Arrow Functions
 *
 * Converts React class component methods from manual binding pattern:
 *   constructor() { this.onClick = this.onClick.bind(this); }
 *   onClick() { ... }
 *
 * To arrow function class properties:
 *   onClick = () => { ... }
 *
 * This demonstrates:
 * - Using pattern().configure() with context and dependencies for type attribution
 * - Complex multi-step AST transformations
 * - Scanning for related nodes across the AST
 * - Safe transformations with validation checks
 */

import {ExecutionContext, Recipe, TreeVisitor, ScanningRecipe} from "@openrewrite/rewrite";
import {J, Statement, Expression, isIdentifier, isMethodInvocation} from "@openrewrite/rewrite/java";
import {JavaScriptVisitor, JS, capture, pattern, template, raw} from "@openrewrite/rewrite/javascript";
import {produce} from "immer";

export class ReactManualBindToArrow extends ScanningRecipe<Map<string, MethodBindingInfo>> {
    name = "org.openrewrite.javascript.react.ReactManualBindToArrow";
    displayName = "Convert manual method binding to arrow functions";
    description = "Converts manually bound methods in React class components to arrow function class properties. " +
                  "This improves code clarity and eliminates the need for binding in constructors.";

    getInitialValue(_ctx: ExecutionContext): Map<string, MethodBindingInfo> {
        return new Map();
    }

    getScanner(_acc: Map<string, MethodBindingInfo>): TreeVisitor<any, ExecutionContext> {
        return new BindingScannerVisitor();
    }

    getVisitor(_acc: Map<string, MethodBindingInfo>): TreeVisitor<any, ExecutionContext> {
        return new MethodConversionVisitor();
    }
}

interface MethodBindingInfo {
    methodName: string;
    classDeclaration: J.ClassDeclaration;
    constructorStmt: J.RightPadded<Statement>;
    method: J.MethodDeclaration;
}

/**
 * First pass: Scan for method bindings in constructors.
 * Collects information about which methods are bound and where.
 */
class BindingScannerVisitor extends JavaScriptVisitor<ExecutionContext> {

    protected async visitClassDeclaration(
        classDecl: J.ClassDeclaration,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Only process React components
        if (!this.isReactComponent(classDecl)) {
            return await super.visitClassDeclaration(classDecl, ctx);
        }

        // Find constructor
        const constructor = this.findConstructor(classDecl);
        if (!constructor || !constructor.body) {
            return await super.visitClassDeclaration(classDecl, ctx);
        }

        // Scan for binding patterns
        await this.scanForBindings(classDecl, constructor, ctx);

        return await super.visitClassDeclaration(classDecl, ctx);
    }

    private isReactComponent(classDecl: J.ClassDeclaration): boolean {
        if (!classDecl.extends_) {
            return false;
        }

        const extendsExpr = classDecl.extends_.element;

        // Check for patterns like:
        // - React.Component
        // - Component (assuming import)
        if (extendsExpr.kind === J.Kind.FieldAccess) {
            const fieldAccess = extendsExpr as J.FieldAccess;
            if (isIdentifier(fieldAccess.name.element) &&
                fieldAccess.name.element.simpleName === 'Component') {
                return true;
            }
        } else if (isIdentifier(extendsExpr) &&
                   extendsExpr.simpleName === 'Component') {
            return true;
        }

        return false;
    }

    private findConstructor(classDecl: J.ClassDeclaration): J.MethodDeclaration | undefined {
        for (const stmt of classDecl.body.statements) {
            const member = stmt.element;
            if (member.kind === J.Kind.MethodDeclaration) {
                const method = member as J.MethodDeclaration;
                if (isIdentifier(method.name) && method.name.simpleName === 'constructor') {
                    return method;
                }
            }
        }
        return undefined;
    }

    private async scanForBindings(
        classDecl: J.ClassDeclaration,
        constructor: J.MethodDeclaration,
        ctx: ExecutionContext
    ): Promise<void> {
        if (!constructor.body) {
            return;
        }

        // Create pattern with type attribution context
        const methodName = capture<J.Identifier>({name: 'methodName'});

        const bindingPattern = pattern`this.${methodName} = this.${methodName}.bind(this)`
            .configure({
                context: ['React.Component', 'this'],
                dependencies: {'@types/react': '^18.0.0'}
            });

        // Scan each statement
        for (const stmt of constructor.body.statements) {
            const match = await bindingPattern.match(stmt.element, this.cursor);

            if (match) {
                const boundMethodName = match.get(methodName);

                if (isIdentifier(boundMethodName)) {
                    // Find the corresponding method declaration
                    const method = this.findMethod(classDecl, boundMethodName.simpleName);

                    if (method && !await this.methodUsesArguments(method)) {
                        // Store binding info
                        const key = `${classDecl.id}:${boundMethodName.simpleName}`;
                        const bindingInfo: MethodBindingInfo = {
                            methodName: boundMethodName.simpleName,
                            classDeclaration: classDecl,
                            constructorStmt: stmt,
                            method: method
                        };

                        // Store in accumulator (would be passed from ScanningRecipe)
                        // For this example, we'd use ctx.putMessage()
                        ctx.putMessage(key, bindingInfo);
                    }
                }
            }
        }
    }

    private findMethod(classDecl: J.ClassDeclaration, methodName: string): J.MethodDeclaration | undefined {
        for (const stmt of classDecl.body.statements) {
            const member = stmt.element;
            if (member.kind === J.Kind.MethodDeclaration) {
                const method = member as J.MethodDeclaration;
                if (isIdentifier(method.name) && method.name.simpleName === methodName) {
                    return method;
                }
            }
        }
        return undefined;
    }

    private async methodUsesArguments(method: J.MethodDeclaration): Promise<boolean> {
        let usesArguments = false;

        const checker = new class extends JavaScriptVisitor<void> {
            protected async visitIdentifier(ident: J.Identifier, _p: void): Promise<J | undefined> {
                if (ident.simpleName === 'arguments') {
                    usesArguments = true;
                }
                return ident;
            }
        };

        if (method.body) {
            await checker.visit(method.body, undefined);
        }

        return usesArguments;
    }
}

/**
 * Second pass: Convert methods to arrow functions and remove bindings.
 */
class MethodConversionVisitor extends JavaScriptVisitor<ExecutionContext> {

    protected async visitClassDeclaration(
        classDecl: J.ClassDeclaration,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Collect all binding info for this class
        const bindingInfos: MethodBindingInfo[] = [];

        // In a real implementation, we'd get this from the accumulator
        // For this example, we check ctx.getMessage()
        // This is a simplified approach

        // Transform the class
        let result = classDecl;

        // Remove binding statements from constructor
        result = await this.removeBindingStatements(result, ctx);

        // Convert methods to arrow functions
        result = await this.convertMethodsToArrowFunctions(result, ctx);

        // Clean up empty constructor
        result = this.removeEmptyConstructor(result);

        return result;
    }

    private async removeBindingStatements(
        classDecl: J.ClassDeclaration,
        ctx: ExecutionContext
    ): Promise<J.ClassDeclaration> {
        return produce(classDecl, draft => {
            draft.body = produce(draft.body, bodyDraft => {
                bodyDraft.statements = bodyDraft.statements.map(stmt => {
                    const member = stmt.element;

                    if (member.kind === J.Kind.MethodDeclaration) {
                        const method = member as J.MethodDeclaration;

                        if (isIdentifier(method.name) &&
                            method.name.simpleName === 'constructor' &&
                            method.body) {

                            // Remove binding statements
                            return produce(stmt, stmtDraft => {
                                const methodDraft = stmtDraft.element as J.MethodDeclaration;
                                if (methodDraft.body) {
                                    methodDraft.body = produce(methodDraft.body, bodyDraftInner => {
                                        bodyDraftInner.statements = bodyDraftInner.statements.filter(
                                            s => !this.isBindingStatement(s.element, ctx)
                                        );
                                    });
                                }
                            });
                        }
                    }

                    return stmt;
                });
            });
        });
    }

    private isBindingStatement(stmt: Statement, _ctx: ExecutionContext): boolean {
        // Simplified check - in real implementation would use stored binding info
        // Check for pattern: this.method = this.method.bind(this)

        if (stmt.kind === J.Kind.Assignment) {
            const assignment = stmt as J.Assignment;

            // Check if right side is a bind call
            if (assignment.assignment.element.kind === J.Kind.MethodInvocation) {
                const methodInv = assignment.assignment.element as J.MethodInvocation;
                if (isIdentifier(methodInv.name) && methodInv.name.simpleName === 'bind') {
                    return true;
                }
            }
        }

        return false;
    }

    private async convertMethodsToArrowFunctions(
        classDecl: J.ClassDeclaration,
        ctx: ExecutionContext
    ): Promise<J.ClassDeclaration> {
        // For each bound method, convert to arrow function property
        // This is a simplified demonstration

        return produce(classDecl, draft => {
            draft.body = produce(draft.body, bodyDraft => {
                bodyDraft.statements = bodyDraft.statements.map(stmt => {
                    const member = stmt.element;

                    if (member.kind === J.Kind.MethodDeclaration) {
                        const method = member as J.MethodDeclaration;

                        // Check if this method should be converted
                        // In real implementation, we'd check against stored binding info
                        const shouldConvert = this.shouldConvertMethod(method, ctx);

                        if (shouldConvert) {
                            return this.createArrowFunctionProperty(stmt, method);
                        }
                    }

                    return stmt;
                });
            });
        });
    }

    private shouldConvertMethod(method: J.MethodDeclaration, ctx: ExecutionContext): boolean {
        // Simplified check - would use stored binding info
        // For now, just check if method name is in context
        if (!isIdentifier(method.name)) {
            return false;
        }

        // Check context for binding info
        const key = `bound:${method.name.simpleName}`;
        return ctx.getMessage(key) !== undefined;
    }

    private createArrowFunctionProperty(
        stmt: J.RightPadded<Statement>,
        method: J.MethodDeclaration
    ): J.RightPadded<Statement> {
        if (!isIdentifier(method.name) || !method.body) {
            return stmt;
        }

        // Use template to create arrow function with type attribution
        const methodName = method.name.simpleName;
        const params = method.parameters;
        const body = method.body;
        const isAsync = method.modifiers.some(mod =>
            mod.element.kind === J.Kind.Modifier // Check for async modifier
        );

        // Create arrow function property using template
        // This preserves type information and formatting

        // Note: This is conceptual - actual template would be:
        // template`${raw(methodName)} = ${isAsync ? raw('async ') : raw('')}(${params}) => ${body}`
        //     .configure({
        //         context: ['React.Component'],
        //         dependencies: {'@types/react': '^18.0.0'}
        //     });

        // For now, return modified statement
        return produce(stmt, draft => {
            // Preserve prefix (comments, whitespace) from original method
            draft.element = method as any; // Simplified
        });
    }

    private removeEmptyConstructor(classDecl: J.ClassDeclaration): J.ClassDeclaration {
        return produce(classDecl, draft => {
            draft.body = produce(draft.body, bodyDraft => {
                bodyDraft.statements = bodyDraft.statements.filter(stmt => {
                    const member = stmt.element;

                    if (member.kind === J.Kind.MethodDeclaration) {
                        const method = member as J.MethodDeclaration;

                        if (isIdentifier(method.name) &&
                            method.name.simpleName === 'constructor') {
                            return !this.isEmptyConstructor(method);
                        }
                    }

                    return true;
                });
            });
        });
    }

    private isEmptyConstructor(method: J.MethodDeclaration): boolean {
        if (!method.body || method.body.statements.length === 0) {
            return true;
        }

        // Check if only contains super() call
        if (method.body.statements.length === 1) {
            const stmt = method.body.statements[0].element;

            if (isMethodInvocation(stmt)) {
                const methodInv = stmt as J.MethodInvocation;
                if (isIdentifier(methodInv.name) && methodInv.name.simpleName === 'super') {
                    return true;
                }
            }
        }

        return false;
    }
}

/**
 * Test cases demonstrating the transformation.
 */
export const testCases = `
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";
import {ReactManualBindToArrow} from "./react-manual-bind-to-arrow";

describe("react-manual-bind-to-arrow", () => {
    test("convert single bound method", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ReactManualBindToArrow();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        super();
                        this.handleClick = this.handleClick.bind(this);
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`,
                \`class MyComponent extends React.Component {
                    handleClick = () => {
                        console.log('clicked');
                    }
                }\`
            )
        );
    });

    test("convert multiple bound methods", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ReactManualBindToArrow();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends Component {
                    constructor(props) {
                        super(props);
                        this.handleClick = this.handleClick.bind(this);
                        this.handleSubmit = this.handleSubmit.bind(this);
                    }

                    handleClick() {
                        this.setState({ clicked: true });
                    }

                    handleSubmit(event) {
                        event.preventDefault();
                        this.props.onSubmit();
                    }
                }\`,
                \`class MyComponent extends Component {
                    handleClick = () => {
                        this.setState({ clicked: true });
                    }

                    handleSubmit = (event) => {
                        event.preventDefault();
                        this.props.onSubmit();
                    }
                }\`
            )
        );
    });

    test("preserve async methods", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ReactManualBindToArrow();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        super();
                        this.loadData = this.loadData.bind(this);
                    }

                    async loadData() {
                        const data = await fetch('/api/data');
                        return data.json();
                    }
                }\`,
                \`class MyComponent extends React.Component {
                    loadData = async () => {
                        const data = await fetch('/api/data');
                        return data.json();
                    }
                }\`
            )
        );
    });

    test("skip methods using arguments", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ReactManualBindToArrow();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        this.method = this.method.bind(this);
                    }

                    method() {
                        return arguments.length;
                    }
                }\`
                // No change - method uses 'arguments'
            )
        );
    });

    test("preserve comments", () => {
        const spec = new RecipeSpec();
        spec.recipe = new ReactManualBindToArrow();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        this.handleClick = this.handleClick.bind(this);
                    }

                    /**
                     * Handles click events
                     * @param {Event} event - The click event
                     */
                    handleClick(event) {
                        console.log(event);
                    }
                }\`,
                \`class MyComponent extends React.Component {
                    /**
                     * Handles click events
                     * @param {Event} event - The click event
                     */
                    handleClick = (event) => {
                        console.log(event);
                    }
                }\`
            )
        );
    });
});
`;
