---
description: Instructions for setting up your local development environment to create OpenRewrite recipes for JavaScript and TypeScript.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JavaScript recipe development environment

This guide covers everything you need to know to set up your development environment for creating and running JavaScript/TypeScript OpenRewrite recipes.

## Prerequisites

Before you begin, please make sure you have the following installed on your system: 

* [Node.js](https://nodejs.org/) (version 18 or later)
  * We use npm for package management
* [TypeScript](https://www.typescriptlang.org/) (version 5.0+)
  * We recommend writing recipes in TypeScript for better type safety
* [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro)
  * This is required for running and testing JavaScript recipes
* A code editor with TypeScript support such as:
  * [Visual Studio Code](https://code.visualstudio.com/)
  * [IntelliJ IDEA](https://www.jetbrains.com/idea/)

## Automatic project setup

The easiest way to get started developing your own JavaScript recipes is to use the [javascript-recipe-starter repository](https://github.com/moderneinc/javascript-recipe-starter) as a template. By default, it comes set up with:

* All of the necessary dependencies and build configurations you need
* Multiple example recipes that demonstrate different recipe patterns
* Comprehensive tests for each recipe
* TypeScript configuration optimized for OpenRewrite development

To use the template:

1. Visit the [javascript-recipe-starter repository](https://github.com/moderneinc/javascript-recipe-starter)
2. Click the "Use this template" button
3. Clone your new repository and install dependencies:

```bash
git clone <your-repository-url>
cd your-recipe-project
npm install
```

4. Run the tests to verify everything works:

```bash
npm test
```

If you've chosen to use the template, you can skip to the [testing recipes locally section](#testing-recipes-locally). If you prefer to set up a project manually, continue with the instructions below.

## Manual project setup

If you prefer not to use our template repository, you can set up a new project from scratch using npm. We'll start by initializing the project and creating the basic directories:

```bash
# Create a new directory for your project
mkdir my-openrewrite-recipes
cd my-openrewrite-recipes

# Initialize a new npm project
npm init -y

# Create source and test directories
mkdir -p src test
```

### Install dependencies

Next, let's install the core OpenRewrite framework and the required dependencies:

```bash
# Core OpenRewrite framework - should be compatible with your Moderne CLI version
npm install @openrewrite/rewrite

# Immer is required for modifying LSTs immutably
npm install immer

# Development dependencies for testing and building
npm install --save-dev typescript jest @jest/globals ts-jest rimraf
```

### Configure TypeScript

With the dependencies installed, we now need to provide some TypeScript configuration.

Create a `tsconfig.json` file in your project root that looks like:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "target": "es2016",
    "module": "Node16",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node16",
    "isolatedModules": true,
    "experimentalDecorators": true
  },
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

#### Key settings explained:

* **`outDir`**: Where compiled JavaScript will be output (typically `dist` or `build`)
* **`experimentalDecorators`**: Required for using the `@Option` decorator in recipes
* **`declaration`**: Generates `.d.ts` type definition files
* **`strict`**: Enables all strict type checking options

### Set up build/publishing configuration

The above configuration isn't enough if you want to publish your recipes so others can use them. In order to publish recipes, please create a separate `tsconfig.build.json` that extends the base configuration:

```json title="tsconfig.build.json"
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noEmitOnError": true,
    "removeComments": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    "src/**/*"
  ]
}
```

:::info **Why two configuration files?**
The base `tsconfig.json` file includes `test/**/*` and sets `rootDir: "./"` - which is needed for IDE intellisense and running tests during development.

The other file, `tsconfig.build.json` is specifically for **building the published package**. It sets `rootDir: "./src"` so the output structure is correct (e.g., `dist/index.js` instead of `dist/src/index.js`). Additionally, it only includes source files to keep test code out of the published package.
:::

### Configure tests (Jest)

Next, we need to configure tests. We typically use Jest - but you are welcome to use whatever testing framework you like. Below is an example of what our `jest.config.js` file looks like:

```javascript title="jest.config.js"
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  collectCoverage: false,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        module: 'Node16',
        moduleResolution: 'node16',
      }
    }]
  }
};
```

### Update your `package.json`

Add the following build and test scripts to your `package.json`:

```json title="package.json"
{
  "name": "my-openrewrite-recipes",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "rimraf ./dist && tsc --build tsconfig.build.json",
    "test": "npm run build && jest",
    "test:watch": "jest --watch"
  }
}
```

### Create an index file to register your recipes

In order for the Moderne CLI to discover your recipes, you need to export them. To do so, create a `src/index.ts` file that looks like:

```typescript title="src/index.ts"
import { RecipeRegistry } from '@openrewrite/rewrite';
import { MyRecipe } from './my-recipe';

export { MyRecipe } from './my-recipe';
// Export additional recipes here

/**
 * Activates and registers all recipes in this module.
 * This function is called by OpenRewrite to discover available recipes.
 *
 * @param registry The recipe registry to register recipes with
 */
export function activate(registry: RecipeRegistry) {
    registry.register(MyRecipe);
    // Register additional recipes here
}
```

:::warning
The `activate()` function is **required** for the Moderne CLI to discover your recipes. Without it, `mod run` will not find your recipes even if they're properly exported and built.
:::

### Project layout

With the setup complete, we recommend organizing your directories/files to look like:

```
my-openrewrite-recipes/
├── src/
│   ├── my-recipe.ts           # Recipe implementations
│   └── index.ts               # Export and register your recipes
├── test/
│   └── my-recipe.test.ts      # Recipe tests
├── package.json
├── tsconfig.json              # TypeScript config for development
├── tsconfig.build.json        # TypeScript config for building
└── jest.config.js
```

With all of that done, your project setup is complete!

## Testing recipes locally

During development, you'll want to test your recipes on real codebases without publishing them. The Moderne CLI makes this easy by allowing you to install and run recipes on your local machine.

### Step 1: Build your recipes

First, compile your TypeScript code:

```bash
npm run build
```

This will output compiled JavaScript to the `dist` directory (or whatever you specified as `outDir` in `tsconfig.json`).

### Step 2: Direct the CLI to your recipes

Point the Moderne CLI to your local build output:

```bash
# Add recipes to the CLI by pointing to your dist dir
mod config recipes npm install /path/to/your-recipe-repo/dist
```

:::tip
The path should point to the directory containing your compiled JavaScript (the `outDir` from your `tsconfig.json`), **not** your project root. This is typically `dist` or `build`.

Also, we **strongly recommend** using an absolute path instead of a relative path when installing recipes. This is because when you run the `mod config recipes list` command in the CLI it will show the path you ran the `install` command with rather than the absolute path.
:::

### Step 3: Configure the CLI to build JavaScript LSTs

In order for the Moderne CLI to build JavaScript/TypeScript LSTs, you'll need to make a few minor changes to the `.moderne.yml` file. Please follow along with our [JavaScript Moderne CLI documentation](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript/#step-1-update-your-moderneyml-file) to make these changes.

### Step 4: Run your recipes

Once installed, run your recipe on one or more repositories:

```bash
# Navigate to the codebase you want to transform
cd /path/to/target-codebase

# Build the LST
mod build .

# Run your recipe
mod run . --recipe com.yourorg.MyRecipe
```

## Publishing recipes

Once your recipes are ready for broader use, you can publish them to npm. The following section will walk you through what you need to do.

### Step 1: Prepare your repo

Ensure your `package.json` is set up for publishing. Below is an example of what this might look like:

```json title="package.json"
{
  "name": "@yourorg/openrewrite-recipes",
  "version": "1.0.0",
  "description": "Custom OpenRewrite recipes for JavaScript/TypeScript",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": [
    "dist/**"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourorg/your-recipes"
  },
  "keywords": [
    "openrewrite",
    "recipe",
    "refactoring"
  ],
  "license": "Apache-2.0"
}
```

### Step 2: Publish to npm

Next, ensure you're logged in to npm:

```bash
npm login
```

Then build and publish your package:

```bash
# Build your recipes
npm run build

# Publish to npm
npm publish
```

:::info
If your package name is scoped (starts with `@`), you'll need to add `--access public` to the publish command to make it publicly available. Without this flag, scoped packages default to private and require a paid npm account.
:::

### Step 3: Use your published recipes

Once published, you can have other people install and use your recipes by having them run the following commands:

```bash
# Install the published recipe package
mod config recipes npm install @yourorg/openrewrite-recipes

# Run a recipe from the package
mod run . --recipe com.yourorg.MyRecipe
```

## Next steps

* [Write a JavaScript refactoring recipe](./writing-a-javascript-refactoring-recipe.md)
* [Learn more about using the Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro)
* [Explore JavaScript LST examples](../concepts-and-explanations/javascript-lst-examples.md)
* [Browse example recipes in the javascript-recipe-starter repo](https://github.com/moderneinc/javascript-recipe-starter)