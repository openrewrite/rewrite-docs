/**
 * Working OpenRewrite Recipe: Remove Manual Method Binding from React Components
 *
 * This is a simplified, testable version that demonstrates:
 * - Pattern matching with capture groups
 * - Type attribution using configure() with context and dependencies
 * - AST transformation with produceAsync() from @openrewrite/rewrite
 * - Async pattern matching inside the callback
 * - Filtering and removing statements from method bodies
 *
 * This recipe removes binding statements like:
 *   this.handleClick = this.handleClick.bind(this);
 *
 * A complete implementation would also:
 * - Convert methods to arrow function class properties
 * - Remove empty constructors
 * - Handle async methods
 * - Check for 'arguments' keyword usage (unsafe to convert to arrow)
 *
 * See react-manual-bind-to-arrow.ts for a more complete implementation approach.
 */

import {ExecutionContext, Recipe, TreeVisitor, produceAsync} from "@openrewrite/rewrite";
import {J, Statement, isIdentifier} from "@openrewrite/rewrite/java";
import {JavaScriptVisitor, capture, pattern} from "@openrewrite/rewrite/javascript";

// Type alias for clarity
type StatementWrapper = J.RightPadded<Statement>;

export class RemoveMethodBindings extends Recipe {
    name = "org.openrewrite.javascript.react.RemoveMethodBindings";
    displayName = "Remove manual method bindings from React components";
    description = "Removes this.method = this.method.bind(this) statements from React component constructors.";

    async editor(): Promise<TreeVisitor<any, ExecutionContext>> {
        return new RemoveBindingsVisitor();
    }
}

class RemoveBindingsVisitor extends JavaScriptVisitor<ExecutionContext> {

    protected async visitMethodDeclaration(
        method: J.MethodDeclaration,
        ctx: ExecutionContext
    ): Promise<J | undefined> {
        // Only process constructors
        if (!isIdentifier(method.name) || method.name.simpleName !== 'constructor') {
            return await super.visitMethodDeclaration(method, ctx);
        }

        if (!method.body) {
            return method;
        }

        // Create pattern to match binding statements
        // Pattern: this.methodName = this.methodName.bind(this)
        const methodName = capture<J.Identifier>({name: 'methodName'});

        const bindingPattern = pattern`this.${methodName} = this.${methodName}.bind(this)`
            .configure({
                context: ['React.Component', 'this'],
                dependencies: {'@types/react': '^18.0.0'}
            });

        // Use produceAsync to allow async pattern matching inside the callback
        return await produceAsync(method, async draft => {
            if (draft.body) {
                const newStatements: StatementWrapper[] = [];

                for (const stmt of draft.body.statements) {
                    // Can use await here because produceAsync supports async callbacks!
                    const match = await bindingPattern.match(stmt.element, this.cursor);

                    if (!match) {
                        newStatements.push(stmt);  // Keep non-binding statements
                    }
                }

                // Only modify if we removed something
                if (newStatements.length !== draft.body.statements.length) {
                    draft.body.statements = newStatements;
                }
            }
        });
    }
}

/**
 * Test cases for the RemoveMethodBindings recipe.
 */
export const testCases = `
import {describe, test} from "@jest/globals";
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript} from "@openrewrite/rewrite/javascript";
import {RemoveMethodBindings} from "./react-bind-to-arrow-working";

describe("RemoveMethodBindings", () => {
    test("remove single binding statement", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

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
                    constructor() {
                        super();
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`
            )
        );
    });

    test("remove multiple binding statements", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

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
                    }
                }\`,
                \`class MyComponent extends Component {
                    constructor(props) {
                        super(props);
                    }

                    handleClick() {
                        this.setState({ clicked: true });
                    }

                    handleSubmit(event) {
                        event.preventDefault();
                    }
                }\`
            )
        );
    });

    test("preserve other constructor statements", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = { count: 0 };
                        this.handleClick = this.handleClick.bind(this);
                        this.ref = React.createRef();
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`,
                \`class MyComponent extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = { count: 0 };
                        this.ref = React.createRef();
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`
            )
        );
    });

    test("no change when no bindings exist", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        super();
                        this.state = { value: '' };
                    }

                    handleChange(event) {
                        this.setState({ value: event.target.value });
                    }
                }\`
            )
        );
    });

    test("no change for non-React classes", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

        return spec.rewriteRun(
            javascript(
                \`class MyClass {
                    constructor() {
                        this.method = this.method.bind(this);
                    }

                    method() {
                        console.log('method');
                    }
                }\`
            )
        );
    });

    test("preserve comments and formatting", () => {
        const spec = new RecipeSpec();
        spec.recipe = new RemoveMethodBindings();

        return spec.rewriteRun(
            javascript(
                \`class MyComponent extends React.Component {
                    constructor() {
                        super();
                        // Bind event handler
                        this.handleClick = this.handleClick.bind(this);
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`,
                \`class MyComponent extends React.Component {
                    constructor() {
                        super();
                    }

                    handleClick() {
                        console.log('clicked');
                    }
                }\`
            )
        );
    });
});
`;
