# Transforming XML

Rewrite provides a set of basic building blocks to transform XML documents which can be composed into higher-level transformations. These are detailed in the subsequent pages and include:

* Add to tag
* Change tag content
* Change tag value

{% hint style="info" %}
For transforming Maven POMs \(a particular type of XML document\), see [Transforming Maven POMs](../../maven/transforming-maven-poms/).
{% endhint %}

Each one of these operations is defined as a `XmlRefactorVisitor`designed for mutating the AST, ultimately leading to a `Change` object at the end of the refactoring operation.

