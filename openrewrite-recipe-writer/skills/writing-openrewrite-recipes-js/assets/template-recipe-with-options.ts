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
import {ExecutionContext, Option, Recipe} from "@openrewrite/rewrite";
import {JavaScriptVisitor} from "@openrewrite/rewrite/javascript";
import {J} from "@openrewrite/rewrite/java";
import {create} from "mutative";

/**
 * TODO: Add recipe description
 */
export class MyConfigurableRecipe extends Recipe {
    name = "org.openrewrite.javascript.MyConfigurableRecipe";
    displayName = "My Configurable Recipe";
    description = "Recipe with configurable options.";

    @Option({
        displayName: "Option Name",
        description: "Description of what this option does.",
        example: "exampleValue"
    })
    optionName!: string;

    constructor(options: { optionName: string }) {
        super(options);
    }

    async editor(): Promise<JavaScriptVisitor<ExecutionContext>> {
        // Capture option values for use in closure
        const optionValue = this.optionName;

        return new class extends JavaScriptVisitor<ExecutionContext> {
            override async visitMethodInvocation(
                method: J.MethodInvocation,
                ctx: ExecutionContext
            ): Promise<J | undefined> {
                const visited = await super.visitMethodInvocation(method, ctx) as J.MethodInvocation;

                // Use captured option value
                // TODO: Add transformation logic using optionValue
                // Example:
                // if (someCondition) {
                //     return create(visited, draft => {
                //         // Use optionValue to make changes
                //     });
                // }

                return visited;
            }
        };
    }
}
