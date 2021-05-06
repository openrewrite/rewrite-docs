# Reorder method arguments

**org.openrewrite.java.ReorderMethodArguments**  
_Reorder method arguments into the specified order._

### Options

* methodPattern: String!
  * A method pattern, expressed as a pointcut expression, that is used to find matching method invocations.
* newParameterNames: String[]!
  * An array of parameter names that indicates the new order in which those arguments should be arranged.
* oldParameterNames: String[]
  * If the original method signature is not type-attributed, this is an optional list that indicates the original order in which the arguments were arranged.

