# Remove JUnit4 @RunWith annotations that do not require an @ExtendsWith replacement.

**org.openrewrite.java.testing.junit5.RemoveObsoleteRunners**  
_Some JUnit4 @RunWith\(\) annotations do not require replacement with an equivalent JUnit 5 @ExtendsWith\(\) annotation. This can be used to remove those runners that either do not have a JUnit5 equivalent or do not require a replacement as part of JUnit 4 to 5 migration._

## Options

* obsoleteRunners: List!
  * The fully qualified class names of the JUnit4 runners to be removed

