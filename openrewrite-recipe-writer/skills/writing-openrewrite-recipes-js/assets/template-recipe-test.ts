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
import {RecipeSpec} from "@openrewrite/rewrite/test";
import {javascript, typescript} from "@openrewrite/rewrite/javascript";
import {MyRecipe} from "./MyRecipe";  // TODO: Update import path

describe('MyRecipe', () => {
    const spec = new RecipeSpec();

    test('transforms code as expected', () => {
        spec.recipe = new MyRecipe();

        return spec.rewriteRun(
            javascript(
                // Before transformation
                `const x = oldPattern();`,
                // After transformation
                `const x = newPattern();`
            )
        );
    });

    test('does not transform unrelated code', () => {
        spec.recipe = new MyRecipe();

        return spec.rewriteRun(
            // Single argument = no change expected
            javascript(`const x = unrelatedPattern();`)
        );
    });

    test('handles edge cases', () => {
        spec.recipe = new MyRecipe();

        return spec.rewriteRun(
            javascript(
                `const x = edgeCase();`,
                `const x = transformedEdgeCase();`
            )
        );
    });
});
