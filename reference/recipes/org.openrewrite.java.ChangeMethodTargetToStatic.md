# Change method target to static

---
**org.openrewrite.java.ChangeMethodTargetToStatic**  
*Change method invocations to static method calls.*
## Options
- methodPattern: String!
	- A method pattern, expressed as a pointcut expression, that is used to find matching method invocations.*
- fullyQualifiedTargetTypeName: String!
	- A fully-qualified class name of the type upon which the static method is defined.*
