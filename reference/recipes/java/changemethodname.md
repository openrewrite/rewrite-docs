# Change method name

**org.openrewrite.java.ChangeMethodName**  
_Rename a method._

### Options

* methodPattern: String!
	* A method pattern, expressed as a pointcut expression, that is used to find matching method declarations/invocations.
* newMethodName: String!
	* The method name that will replace the existing name.

