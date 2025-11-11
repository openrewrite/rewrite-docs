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
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";
import {produce} from "immer";

/**
 * TODO: Add recipe description
 */
export class MyRecipe extends Recipe {
    name = "org.openrewrite.javascript.MyRecipe";
    displayName = "My Recipe Display Name";
    description = "Brief description of what this recipe does.";

    async editor(): Promise<JavaScriptVisitor<ExecutionContext>> {
        return new class extends JavaScriptVisitor<ExecutionContext> {
            // Override visit methods to implement transformation logic
            // Example:
            override async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                // Call super first to visit children (default pattern)
                const visited = await super.visitMethodInvocation(method, ctx) as J.MethodInvocation;

                // TODO: Add transformation logic here
                // Example: Modify the method invocation using produce
                // return produce(visited, draft => {
                //     // Make changes to draft
                // });

                return visited;
            }
        };
    }
}
