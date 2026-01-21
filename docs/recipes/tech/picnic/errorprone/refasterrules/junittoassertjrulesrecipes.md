---
sidebar_label: "Refaster rules to replace JUnit assertions with AssertJ equivalents"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refaster rules to replace JUnit assertions with AssertJ equivalents

**tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes**

_Note that, while both libraries throw an `AssertionError` in case of an assertion  failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules)._

## Recipe source

[GitHub: rewrite-third-party-0.34.0.jar](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `JUnitToAssertJRules.AssertThatBooleanArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbooleanarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatBooleanArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbooleanarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatBooleanArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbooleanarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatByteArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbytearraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatByteArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbytearraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatByteArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatbytearraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCharArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatchararraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCharArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatchararraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCharArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatchararraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatShortArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatshortarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatShortArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatshortarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatShortArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatshortarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIntArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatintarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIntArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatintarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIntArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatintarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatLongArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatlongarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatLongArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatlongarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatLongArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatlongarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraycontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayWithFailMessageContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraywithfailmessagecontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatfloatarraywithfailmessagesuppliercontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraycontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraywithfailmessagecontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffset`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatdoublearraywithfailmessagesuppliercontainsexactlywithoffsetrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatObjectArrayContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatobjectarraycontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatObjectArrayWithFailMessageContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatobjectarraywithfailmessagecontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatObjectArrayWithFailMessageSupplierContainsExactly`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatobjectarraywithfailmessagesuppliercontainsexactlyrecipe)
* [Refaster template `JUnitToAssertJRules.Fail`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failrecipe)
* [Refaster template `JUnitToAssertJRules.FailWithMessage`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithmessagerecipe)
* [Refaster template `JUnitToAssertJRules.FailWithMessageAndThrowable`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithmessageandthrowablerecipe)
* [Refaster template `JUnitToAssertJRules.FailWithThrowable`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwiththrowablerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatistruerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringistruerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplieristruerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisfalserecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisfalserecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisfalserecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnotnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnotnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatissameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringissameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierissameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotsameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnotsameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnotsameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByIsExactlyInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbyisexactlyinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByWithFailMessageStringIsExactlyInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbywithfailmessagestringisexactlyinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbywithfailmessagesupplierisexactlyinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbyisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByWithFailMessageStringIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbywithfailmessagestringisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatThrownByWithFailMessageSupplierIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatthrownbywithfailmessagesupplierisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodedoesnotthrowanyexceptionrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeWithFailMessageStringDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodewithfailmessagestringdoesnotthrowanyexceptionrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodewithfailmessagesupplierdoesnotthrowanyexceptionrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsInstanceOf`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisinstanceofrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes
displayName: Refaster rules to replace JUnit assertions with AssertJ equivalents
description: |
  Note that, while both libraries throw an `AssertionError` in case of an assertion  failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageSupplierContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageAndThrowableRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithThrowableRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsExactlyInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsExactlyInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeDoesNotThrowAnyExceptionRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageStringDoesNotThrowAnyExceptionRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyExceptionRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsInstanceOfRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JUnit asserts to AssertJ](/recipes/java/testing/assertj/junittoassertj.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JUnitToAssertJRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
