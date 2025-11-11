/*
 * Copyright 2025 the original author or authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * https://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {ExecutionContext, Recipe} from "@openrewrite/rewrite";
import {JavaScriptVisitor, capture, pattern, rewrite, template} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";

/**
 * Example recipe using pattern/template for transformation
 */
export class PatternRewriteExample extends Recipe {
    name = "org.openrewrite.javascript.PatternRewriteExample";
    displayName = "Pattern Rewrite Example";
    description = "Example of using pattern matching and templates for transformations.";

    async editor(): Promise<JavaScriptVisitor<ExecutionContext>> {
        // Define transformation rule
        const rule = rewrite(() => {
            const args = capture({ variadic: true });
            return {
                before: pattern`oldApi.method(${args})`,
                after: template`newApi.methodAsync(${args})`
            };
        });

        return new class extends JavaScriptVisitor<ExecutionContext> {
            override async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Try to apply the rule - returns transformed node or undefined
                return await rule.tryOn(this.cursor, method) || method;
            }
        };
    }
}
