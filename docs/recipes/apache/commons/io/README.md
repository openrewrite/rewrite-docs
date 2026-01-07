---
description: Commons IO OpenRewrite recipes.
---

# Commons IO

_Recipes for [Apache Commons IO](https://commons.apache.org/proper/commons-io/) migrations._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [`ApacheCommonsFileUtils` Refaster recipes](./apachecommonsfileutilsrecipes.md)
* [Prefer `java.nio.charset.StandardCharsets`](./usestandardcharsets.md)

## Recipes

* [Prefer `System.lineSeparator()`](./usesystemlineseparator.md)
* [Prefer `java.nio.file.Files`](./apachefileutilstojavafiles.md)
* [Relocate `org.apache.commons:commons-io` to `commons-io:commons-io`](./relocateapachecommonsio.md)
* [Replace `FileUtils.getFile(String...)` with JDK provided API](./apachecommonsfileutilsrecipes$getfilerecipe.md)
* [Replace `FileUtils.writeStringToFile(File, String)` with JDK provided API](./apachecommonsfileutilsrecipes$writestringtofilerecipe.md)
* [Use IOUtils method that include  their charset encoding](./apacheioutilsuseexplicitcharset.md)


