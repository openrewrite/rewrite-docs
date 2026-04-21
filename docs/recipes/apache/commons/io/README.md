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
* [Replace `FileUtils.readFileToString(File)` with `FileUtils.readFileToString(File, StandardCharsets.UTF_8)`](./apachecommonsfileutilsrecipes$readfiletostringwithcharsetrecipe.md)
* [Replace `FileUtils.readLines(File)` with `FileUtils.readLines(File, StandardCharsets.UTF_8)`](./apachecommonsfileutilsrecipes$readlineswithcharsetrecipe.md)
* [Replace `FileUtils.write(File, CharSequence)` with `FileUtils.write(File, CharSequence, StandardCharsets.UTF_8, false)`](./apachecommonsfileutilsrecipes$writewithcharsetrecipe.md)
* [Replace `FileUtils.write(File, CharSequence, boolean)` with `FileUtils.write(File, CharSequence, StandardCharsets.UTF_8, boolean)`](./apachecommonsfileutilsrecipes$writeappendwithcharsetrecipe.md)
* [Replace `FileUtils.writeStringToFile(File, String)` with JDK provided API](./apachecommonsfileutilsrecipes$writestringtofilerecipe.md)
* [Replace `FileUtils.writeStringToFile(File, String, boolean)` with `FileUtils.writeStringToFile(File, String, StandardCharsets.UTF_8, boolean)`](./apachecommonsfileutilsrecipes$writestringtofileappendwithcharsetrecipe.md)
* [Use IOUtils method that include  their charset encoding](./apacheioutilsuseexplicitcharset.md)


