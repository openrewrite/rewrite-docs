# Rewrite Docs

The docs behind [docs.openrewrite.org](https://docs.openrewrite.org/).

## Recipe docs

Recipe docs now live in the [Code Genome Project](https://codegenomeproject.org/recipes), and the old recipe URLs here redirect to them. If you wish to change a recipe's name, description, tags, or examples, please update the recipe itself.

## Generated pages

The [changelog](./docs/changelog.md) and the versions behind the `{{VERSION_*}}` placeholders in [latest-versions.js](./src/plugins/latest-versions.js) are updated nightly by the [Update docs](./.github/workflows/update-docs.yml) workflow. To update them locally, add your [Code Genome Project](https://artifacts.codegenomeproject.org/maven) credentials to `~/.gradle/gradle.properties` as `codegenomeUsername` and `codegenomePassword`, sign in with the [GitHub CLI](https://cli.github.com/) or set `GITHUB_TOKEN`, then run:

```shell
./gradlew updateDocs
```

## Contributing

We encourage you to contribute to our docs! Please feel free to create an issue or open a PR if you find any issues. See the [contributing guide](./CONTRIBUTING.md) for writing standards and how to describe your pull request.

## Local preview

This project uses Docusaurus to manage the documentation. To preview the docs locally, you can run the following command:
```shell
npx docusaurus start;
```