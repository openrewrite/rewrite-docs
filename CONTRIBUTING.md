# Contributing to Rewrite Docs

We encourage you to contribute to our docs! Please feel free to create an issue or open a PR if you find any issues.

We use [Docusaurus](https://docusaurus.io/) to manage our documentation. When any changes are merged into this directory, a build is kicked off to update the docs. Please see the [OpenRewrite contributing guide](https://github.com/openrewrite/.github/blob/main/CONTRIBUTING.md) for detailed instructions on how to get started.

Recipe docs under `docs/recipes` are auto-generated and any manual edits will be overwritten. See the [README](./README.md#auto-generated-recipe-docs) for details.

## Writing standards

* In document titles and headers, use sentence case. That is, capitalize only the first word in the title, the first word in a subheading after a colon, and any proper nouns or other terms that are always capitalized a certain way. Don't put a period at the end of a title or heading.
* When using acronyms, you must always fully define the acronym before it can be used in the document. For instance, you would say something like: "The North Atlantic Treaty Organization (NATO) did..." Then, in the rest of the document, you can freely use NATO instead.

## Pull request descriptions

Write for a reviewer who will read the diff. Tell them why the change exists and anything they can't see from the diff, then stop.

* Lead with the problem, then what the change does, in a few sentences of plain prose.
* Stay under 150 words unless the change genuinely needs more. Most docs PRs need one or two paragraphs.
* No headers or sections for a PR that touches a handful of pages.
* Don't list the files you changed. The diff shows that.
* Don't describe what the PR does not change, what you assumed, or how you verified it, unless a reviewer would otherwise have to ask.
* Don't argue for the approach against alternatives you didn't take unless the reason is non-obvious.
* Link related issues or PRs.

If an AI tool drafts your description, give it these rules. Left alone it will produce a sectioned report several times longer than the change deserves.

A good description for a six-page change:

> Six documentation pages had instructions that used the Moderne Source Available License. That doesn't make sense for an open-source project, so this moves them to Apache-licensed recipes.
>
> One page has its examples baked into screenshots, so it gets an info box instead.
