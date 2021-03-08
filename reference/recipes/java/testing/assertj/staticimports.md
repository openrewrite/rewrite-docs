# Statically import AssertJ's `assertThat`

**org.openrewrite.java.testing.assertj.StaticImports**  
_Consistently use a static import rather than inlining the `Assertions` class name in tests._

### Recipe list

* [Change method target to static](https://docs.openrewrite.org/reference/recipes/java/changemethodtargettostatic.md)
	* methodPattern: org.assertj.core.api.AssertionsForClassTypes assertThat(..)
	* fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
* [Change method target to static](https://docs.openrewrite.org/reference/recipes/java/changemethodtargettostatic.md)
	* methodPattern: org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)
	* fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
* [Use static import](https://docs.openrewrite.org/reference/recipes/java/usestaticimport.md)
	* methodPattern: org.assertj.core.api.Assertions *(..)
