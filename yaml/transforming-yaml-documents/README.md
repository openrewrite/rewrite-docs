# Transforming YAML Documents

Rewrite provides a set of basic building blocks to transform YAML documents which can be composed into higher-level transformations. These are detailed in the subsequent pages and include:

* Change property key
* Coalesce properties 

{% hint style="info" %}
Visitors referring to "properties" view nested YAML mappings as properties in the way that Spring Boot interprets properties from YAML files. 
{% endhint %}

Each one of these operations is defined as a `YamlRefactorVisitor`designed for mutating the AST, ultimately leading to a `Change` object at the end of the refactoring operation.

