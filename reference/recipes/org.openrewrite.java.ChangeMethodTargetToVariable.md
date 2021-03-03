# Change method target to variable

---
**org.openrewrite.java.ChangeMethodTargetToVariable**  
*Change method invocations to method calls on a variable.*
## Options
- methodPattern: String!
	- A method pattern, expressed as a pointcut expression, that is used to find matching method invocations.*
- variableName: String!
	- Name of variable to use as target for the modified method invocation.*
- variableType: String!
	- Type attribution to use for the return type of the modified method invocation.*
