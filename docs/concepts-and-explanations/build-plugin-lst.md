# How LSTs are handled locally

When you run a recipe locally, the first thing that happens is that the [Lossless Semantic Tree](/concepts-and-explanations/lossless-semantic-trees.md) (LST) is produced. The LST is stored in memory and used throughout the recipe execution. At the end of the recipe run, this LST is discarded. Even though the LST is destroyed, your code may have been updated locally depending on whether or not the recipe found stuff to change.

:::warning
In order for OpenRewrite to run locally, the LST **must** fit into memory. For very large projects, this may not be possible. If you run into this issue, consider using [Moderne](https://docs.moderne.io/) instead. With Moderne, LSTs are [serialized and written to disk](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro#differences-between-the-moderne-cli-and-the-openrewrite-build-plugins). They can then be read and used in pieces as well as shared across recipe runs.
:::

If you attempt to run another recipe following the first one, a new LST will be generated at that time. If the previous recipe made changes and those changes still exist locally, then the newly generated LST will have all of those changes. If the previous recipe made no changes, then the LST will effectively be the same one as before (but regenerated since the previous one was deleted).