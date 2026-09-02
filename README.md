# Rewrite Docs

The docs behind [docs.openrewrite.org](https://docs.openrewrite.org/).

## Auto-Generated Recipe Docs

All of the documentation about specific recipes is auto-generated via the [rewrite-recipe-markdown-generator](https://github.com/openrewrite/rewrite-recipe-markdown-generator). This includes names, descriptions, tags, source links, example usage, and license information.

If you wish to update any of those things, please update the recipes themselves rather than submitting a PR here (as any manual changes will be clobbered with the next release).

You can find the auto-generated recipe docs in the [recipes directory](./docs/recipes/).

## Contributing

We encourage you to contribute to our docs! Please feel free to create an issue or open a PR if you find any issues. See the [contributing guide](./CONTRIBUTING.md) for writing standards and how to describe your pull request.

## Local preview

This project uses Docusaurus to manage the documentation. To preview the docs locally, you can run the following command:
```shell
npx docusaurus start;
```