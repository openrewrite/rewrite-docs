# Rewrite Docs

The docs behind [docs.openrewrite.org](https://docs.openrewrite.org/).

## Auto-Generated Recipe Docs

All of the documentation about specific recipes is auto-generated via the [rewrite-recipe-markdown-generator](https://github.com/openrewrite/rewrite-recipe-markdown-generator). This includes names, descriptions, tags, source links, example usage, and license information.

If you wish to update any of those things, please update the recipes themselves rather than submitting a PR here (as any manual changes will be clobbered with the next release).

You can find the auto-generated recipe docs in the [recipes directory](./docs/recipes/).

## Contributing

We encourage you to contribute to our docs! Please feel free to create an issue or open a PR if you find any issues.

We use [Docusaurus](https://docusaurus.io/) to manage our documentation. When any changes are merged into this directory, a build is kicked off to update the docs. Please see the [contributing guide](https://github.com/openrewrite/.github/blob/main/CONTRIBUTING.md) for detailed instructions on how to get started.

## Standards

* In document titles and headers, use sentence case. That is, capitalize only the first word in the title, the first word in a subheading after a colon, and any proper nouns or other terms that are always capitalized a certain way. Don't put a period at the end of a title or heading.
* When using acronyms, you must always fully define the acronym before it can be used in the document. For instance, you would say something like: "The North Atlantic Treaty Organization (NATO) did..." Then, in the rest of the document, you can freely use NATO instead.

## Local preview

This project uses Docusaurus to manage the documentation. To preview the docs locally, you can run the following command:
```shell
npx docusaurus start;
```