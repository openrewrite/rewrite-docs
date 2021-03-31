# Use MatcherAssert\#assertThat\(..\)

**org.openrewrite.java.testing.junit5.UseHamcrestAssertThat**  
_JUnit 4's `Assert#assertThat(..)` This method was deprecated in JUnit 4 and removed in JUnit Jupiter._

### Tags

* junit
* testing
* hamcrest

## Recipe list

* [Change method target to static](../../changemethodtargettostatic.md)
  * methodPattern: org.junit.Assert assertThat\(..\)
  * fullyQualifiedTargetTypeName: org.hamcrest.MatcherAssert
* [Use static import](../../usestaticimport.md)
  * methodPattern: org.hamcrest.MatcherAssert assertThat\(..\)

