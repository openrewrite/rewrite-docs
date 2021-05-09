# Equals avoids null

**org.openrewrite.java.cleanup.EqualsAvoidsNull**  
_Checks that any combination of String literals is on the left side of an `equals()` comparison. Also checks for String literals assigned to some field \(such as `someString.equals(anotherString = "text"))`._

