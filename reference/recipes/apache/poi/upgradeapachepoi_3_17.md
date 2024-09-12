# Migrates to Apache POI 3.17

**org.openrewrite.apache.poi.UpgradeApachePoi\_3\_17**

_Migrates to the last Apache POI 3.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions._

### Tags

* apache
* poi

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-poi-3-17.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.6.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `poi`
  * oldArtifactId: `poi`
  * newGroupId: `org.apache.poi`
  * newArtifactId: `poi`
  * newVersion: `3.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.apache.poi`
  * artifactId: `poi*`
  * newVersion: `3.x`
* [Replace `Font.setBoldweight(short)` with `Font.setBold(boolean)`](../../apache/poi/replacesetboldweightwithsetboldrecipes.md)
* [Replace `Cell.setCellType(int)` with `Cell.setCellType(CellType)`](../../apache/poi/replacesetcelltyperecipes.md)
* [Change method invocation return type](../../java/migrate/changemethodinvocationreturntype.md)
  * methodPattern: `org.apache.poi.ss.usermodel.Cell getCellType()`
  * newReturnType: `org.apache.poi.ss.usermodel.CellType`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.NUMERIC`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.STRING`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.FORMULA`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BLANK`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.BLANK`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.BOOLEAN`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellType.ERROR`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.VERTICAL_TOP`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.VerticalAlignment.TOP`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.VERTICAL_CENTER`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.VerticalAlignment.CENTER`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.VERTICAL_BOTTOM`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.VerticalAlignment.BOTTOM`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.VERTICAL_JUSTIFY`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.VerticalAlignment.JUSTIFY`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_LEFT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.LEFT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_RIGHT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.RIGHT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_FILL`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.FILL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_JUSTIFY`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.JUSTIFY`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER_SELECTION`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER_SELECTION`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER_SELECTION`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER_SELECTION`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_NONE`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.NONE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_THIN`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.THIN`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.MEDIUM`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_DASHED`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.DASHED`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_DOTTED`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.DOTTED`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_THICK`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.THICK`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_DOUBLE`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.DOUBLE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_HAIR`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.HAIR`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASHED`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASHED`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_DASH_DOT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.DASH_DOT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASH_DOT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASH_DOT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_DASH_DOT_DOT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.DASH_DOT_DOT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASH_DOT_DOT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASH_DOT_DOT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BORDER_SLANTED_DASH_DOT`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.BorderStyle.SLANTED_DASH_DOT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.NO_FILL`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.NO_FILL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.SOLID_FOREGROUND`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.SOLID_FOREGROUND`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.FINE_DOTS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.FINE_DOTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.ALT_BARS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.ALT_BARS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.SPARSE_DOTS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.SPARSE_DOTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THICK_HORZ_BANDS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THICK_HORZ_BANDS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THICK_VERT_BANDS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THICK_VERT_BANDS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THICK_BACKWARD_DIAG`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THICK_BACKWARD_DIAG`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THICK_FORWARD_DIAG`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THICK_FORWARD_DIAG`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BIG_SPOTS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.BIG_SPOTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.BRICKS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.BRICKS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THIN_HORZ_BANDS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THIN_HORZ_BANDS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THIN_VERT_BANDS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THIN_VERT_BANDS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THIN_BACKWARD_DIAG`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THIN_BACKWARD_DIAG`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.THIN_FORWARD_DIAG`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.THIN_FORWARD_DIAG`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.SQUARES`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.SQUARES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.DIAMONDS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.DIAMONDS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.LESS_DOTS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.LESS_DOTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.ss.usermodel.CellStyle.LEAST_DOTS`
  * fullyQualifiedConstantName: `org.apache.poi.ss.usermodel.FillPatternType.LEAST_DOTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.common.usermodel.Hyperlink.LINK_URL`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.URL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.common.usermodel.Hyperlink.LINK_DOCUMENT`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.DOCUMENT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.common.usermodel.Hyperlink.LINK_EMAIL`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.EMAIL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.common.usermodel.Hyperlink.LINK_FILE`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.FILE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_URL`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.URL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_DOCUMENT`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.DOCUMENT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_EMAIL`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.EMAIL`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_FILE`
  * fullyQualifiedConstantName: `org.apache.poi.common.usermodel.HyperlinkType.FILE`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.poi.UpgradeApachePoi_3_17
displayName: Migrates to Apache POI 3.17
description: Migrates to the last Apache POI 3.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions.
tags:
  - apache
  - poi
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: poi
      oldArtifactId: poi
      newGroupId: org.apache.poi
      newArtifactId: poi
      newVersion: 3.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.apache.poi
      artifactId: poi*
      newVersion: 3.x
  - org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes
  - org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes
  - org.openrewrite.java.migrate.ChangeMethodInvocationReturnType:
      methodPattern: org.apache.poi.ss.usermodel.Cell getCellType()
      newReturnType: org.apache.poi.ss.usermodel.CellType
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_NUMERIC
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.NUMERIC
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_STRING
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.STRING
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_FORMULA
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.FORMULA
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BLANK
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.BLANK
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_BOOLEAN
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.BOOLEAN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.Cell.CELL_TYPE_ERROR
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellType.ERROR
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.VERTICAL_TOP
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.VerticalAlignment.TOP
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.VERTICAL_CENTER
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.VerticalAlignment.CENTER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.VERTICAL_BOTTOM
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.VerticalAlignment.BOTTOM
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.VERTICAL_JUSTIFY
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.VerticalAlignment.JUSTIFY
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_LEFT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.LEFT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_RIGHT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.RIGHT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_FILL
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.FILL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_JUSTIFY
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.JUSTIFY
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER_SELECTION
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER_SELECTION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALIGN_CENTER_SELECTION
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.HorizontalAlignment.CENTER_SELECTION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_NONE
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.NONE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_THIN
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.THIN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.MEDIUM
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_DASHED
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.DASHED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_DOTTED
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.DOTTED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_THICK
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.THICK
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_DOUBLE
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.DOUBLE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_HAIR
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.HAIR
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASHED
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASHED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_DASH_DOT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.DASH_DOT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASH_DOT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASH_DOT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_DASH_DOT_DOT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.DASH_DOT_DOT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_MEDIUM_DASH_DOT_DOT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.MEDIUM_DASH_DOT_DOT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BORDER_SLANTED_DASH_DOT
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.BorderStyle.SLANTED_DASH_DOT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.NO_FILL
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.NO_FILL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.SOLID_FOREGROUND
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.SOLID_FOREGROUND
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.FINE_DOTS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.FINE_DOTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.ALT_BARS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.ALT_BARS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.SPARSE_DOTS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.SPARSE_DOTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THICK_HORZ_BANDS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THICK_HORZ_BANDS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THICK_VERT_BANDS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THICK_VERT_BANDS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THICK_BACKWARD_DIAG
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THICK_BACKWARD_DIAG
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THICK_FORWARD_DIAG
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THICK_FORWARD_DIAG
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BIG_SPOTS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.BIG_SPOTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.BRICKS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.BRICKS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THIN_HORZ_BANDS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THIN_HORZ_BANDS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THIN_VERT_BANDS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THIN_VERT_BANDS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THIN_BACKWARD_DIAG
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THIN_BACKWARD_DIAG
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.THIN_FORWARD_DIAG
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.THIN_FORWARD_DIAG
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.SQUARES
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.SQUARES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.DIAMONDS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.DIAMONDS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.LESS_DOTS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.LESS_DOTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.ss.usermodel.CellStyle.LEAST_DOTS
      fullyQualifiedConstantName: org.apache.poi.ss.usermodel.FillPatternType.LEAST_DOTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.common.usermodel.Hyperlink.LINK_URL
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.URL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.common.usermodel.Hyperlink.LINK_DOCUMENT
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.DOCUMENT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.common.usermodel.Hyperlink.LINK_EMAIL
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.EMAIL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.common.usermodel.Hyperlink.LINK_FILE
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.FILE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_URL
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.URL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_DOCUMENT
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.DOCUMENT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_EMAIL
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.EMAIL
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.poi.xssf.usermodel.XSSFHyperlink.LINK_FILE
      fullyQualifiedConstantName: org.apache.poi.common.usermodel.HyperlinkType.FILE

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.6.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.apache.poi.UpgradeApachePoi_3_17")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.6.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:1.6.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.poi.UpgradeApachePoi_3_17")
        exportDatatables = true
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.apache.poi.UpgradeApachePoi_3_17</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.6.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.poi.UpgradeApachePoi_3_17 -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeApachePoi_3_17
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.poi.UpgradeApachePoi_3_17)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

