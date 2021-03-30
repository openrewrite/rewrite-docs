# Add `org.hamcrest:hamcrest` if it is used.

**org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed**  
_JUnit Jupiter does not include hamcrest as a transitive dependency. If needed, add a direct dependency._

### Tags

* junit
* testing
* hamcrest

## Recipe list

* [Find methods](../../../java/search/findmethods.md)
  * methodPattern: org.hamcrest.Matchers *(..)
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: org.hamcrest
  * artifactId: hamcrest
  * version: 2.x
  * releasesOnly: false
  * onlyIfUsing: [org.hamcrest.Matchers]
