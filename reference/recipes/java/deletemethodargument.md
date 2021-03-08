# Delete method argument

**org.openrewrite.java.DeleteMethodArgument**  
_Delete an argument from method invocations._

### Options

* methodPattern: String!
	* A method pattern, expressed as a pointcut expression, that is used to find matching method invocations.
* argumentIndex: int!
	* A zero-based index that indicates which argument will be removed from the method invocation.

