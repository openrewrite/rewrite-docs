# What's new in Rewrite 7.0

## Core

The 7.x version of Rewrite is a substantial upgrade of the framework and tools that are leveraged to perform automated, semantic search and transformation. This release focuses on formalizing and refining the concepts, introduced in previous versions of the framework, to provide a better developer experience. 

Rewrite works by parsing code into [Abstract Syntax Trees](../v1beta/abstract-syntax-trees.md), making changes to those trees, and reifying the modified trees back into source code.

{% hint style="info" %}
The abbreviation, **AST**, is used throughout this document to represent "Abstract Syntax Tree".  
{% endhint %}

In previous versions of Rewrite, the concepts around both a Visitor/Recipe were ambiguous. Rewrite 7.0 formalizes the roles of both the visitor and the recipe. 

### Visitor

At the simplest level, any modification of an AST is performed by a visitor. A visitor typically follows the "single-responsibility principle" and applies a specific transformation to a single AST.

#### Parameterized Visitors

The first significant change you may notice is that visitors now have a second parameterized type and that each visit method now expects an instance of that type. The parameterized type allows context to be shared across visitors. 

#### Chaining Visitors

There are times when it is desirable to schedule additional visitors to operate immediately after the initial visitor has visited a source file. The visitor class provides a mechanism for doing this via the`doAfterVisit()`method and any such scheduled visitors will operate on the same source file exactly once.

#### Cursor Messaging

### Recipe

A recipe represents a higher-level unit of work that defines how configuration \(both imperative and declarative\) is either :

* Merged with a single visitor to perform an operation across a set of ASTs.
* Chained with additional recipes \(and their configuration\) to perform an aggregated set of operations across a set of ASTs

A recipe that encapsulates a visitor acts as a configurable wrapper, via its serializable state, that delegates to the associated visitor when the recipe is executed across a set of source files. A composite recipe encapsulates a set of nested recipes that are chained together to perform some higher-level operation over the set of source files.

#### Configuration

#### Configuration Validation

OpenRewrite provides a managed environment in which a set of recipes are executed. It will instantiate recipe instances and often inject configuration properties that have been defined through YAML configuration files. Due to the declarative nature of the settings, the Recipe class provides a validate\(\) method that is called by the framework prior to executing the recipes.

{% hint style="success" %}
New In 7.x: Automatic Required/Optional Validation. You may now use common `@Nullable` and `@NonNull`annotations to denote which properties of the recipe are required. **You must remove the`validate()`method in the recipe subclass or call`super()`to leverage this new capability.**
{% endhint %}

Prior to 7.x, each recipe was responsible for implementing the `validate()`method and this was often simple, boilerplate code to ensure all required fields were populated. The framework provides a base implementation for basic required/optional validation checks via commonly used annotations. The default implementation will look for both package level annotations \(NonNullFields\) and field level annotations \(NonNull, Nullable, etc\). In the event that a recipe requires custom validation rules above and beyond the default behavior, a subclass can simply override the validate method.

{% hint style="info" %}
The default logic uses reflection to find the most commonly used annotation names and will work with OpenRewrite’s internal annotations, and most other frameworks that provide null/non-null annotations that have run-time retention.
{% endhint %}

#### Recipe Configuration and Validation Best Practices

An important characteristic of recipes is that they must be serializable such that their configuration properties can be expressed in common serialized formats \(YAML, JSON, etc\). The preferred mechanism for setting configuration properties is via the Recipe’s constructor although it is also acceptable to use mutators \(or a builder pattern\) for those recipes with a large number of optional fields**.**

* A recipe’s member variables must be serializable and in most cases will consist of just the configuration properties.
* Prefer the use of constructor when setting configuration properties of a recipe and where possible, mark the properties as final.
* Use NonNull/Nullable annotations to denote which configuration properties are required/optional.
* Use unambiguous names when defining configuration properties.

####  Recipe Visitor Best Practices

Things to consider when a recipe wraps an underlying visitor:

* If a visitor is only used within the context of the recipe, define the visitor as a private, nested class.
* If a visitor is a nested class of the recipe, making it non-static allows configuration properties to be used from the visitor without having to pass them to the visitor's constructor.
* The associated visitor for a recipe is instantiated via the recipe’s`getVisitor()`method and is called multiple times \(and over multiple threads\) as a recipe executes over an AST. Returning a new instance of the visitor ensures thread-safety and care should be taken if a shared visitor instance is returned by this method.

### Refactoring

#### Refactor -&gt; Recipe.run

#### Polyglot Refactoring

#### Execution Context

#### Execution Pipeline & Concurrency

### Tree Markers

### Search

#### Search Result Markers



## Java

There are several refinements to Rewrite's Java AST model and the associated visitor API with a focus on three key areas:

* Improving the format/autoformat capabilities of the framework
* Simplifying the developer experience when creating/mutating AST elements within the context of refactoring operations.
* Normalizing the names of Java AST elements, visitor method signatures, and enumerations.

### Comments & Whitespace

Prior to 7.x, all whitespace and comments were co-mingled as a single string in prefix/suffix attributes of the AST  elements. This approach made formatting difficult because it required the comments to be extracted from the whitespace and formatting logic had to be applied to the whitespace between comments and before/after the AST elements. This approach limited the ability to apply auto-formatting visitors to the ASTs and, in many cases, required developers to manually place whitespace characters as part of a refactoring operation.

In Rewrite 7.x, comments and whitespace characters are now first-class citizens within the AST and stored in a new`org.openrewrite.java.tree.Space`element. Additionally, there are new wrapper classes`org.openrewrite.java.tree.JRightPadded and org.openrewrite.java.tree.JLeftPadded.` 

These structural changes to the AST model impact those migrating from previous versions of Rewrite, however, their introduction reduces the need to manually manipulate formatting in visitors. 

{% hint style="info" %}
When migrating visitors from previous versions of Rewrite, any code that is manually adding whitespace or adjusting formatting should be refactored/removed in favor of using Rewrite's much improved autoformatting capabilities  
{% endhint %}

### AutoFormatting



### JavaTemplate

In previous versions of Rewrite, developers were often required to manually create and manipulate AST representations. The process was tedious and error-prone for developers used to authoring code as text and resulted in complex and verbose refactoring code. There was an initial attempt to solve this problem with the utility class`TreeBuilder`but it had limited functionality and, while it solved several immediate problems, there were many edge cases it simply did not handle. The TreeBuilder class could generate an AST representation from a snippet of code but it was still the responsibility of the developer to then correctly insert the generated AST fragment within an existing tree.

Rewrite 7.x introduces a new class,`org.openrewrite.java.JavaTemplate,`as the successor to TreeBuilder. This new utility is paired with changes to the Java AST model to provides a natural, idiomatic API for both generating AST representations from snippets of code and inserting the resulting structure into an existing tree. 

#### Deterministic Inline Code Generation

One of the deficiencies of TreeBuilder was that it often lacked context around where a snippet of code was being generated with an existing AST. It provided methods to handle simple, well-known use cases but it was easy to "break" the code generation when attempting more complicated operations. In Rewrite 7.0, the AST model for whitespace also includes an enumeration of every location where that whitespace may exist in the Java language grammar. The JavaTemplate leverages this additional information to deterministically insert a generated snippet of code at exactly the location intended by the developer. The template is also contextually aware of which method and variables are in scope relative to where the snippet is inserted and compiled.

Another very common pattern that emerged with TreeBuilder was that developers were often extracting elements of the existing AST and then inlining those elements within the generated snippet of code. JavaTemplate introduces the ability to define parameter markers into the template and then pass parameter instances when generating a snippet of code. If a parameter is itself a Tree element, the template will render that parameter in-line by printing the tree element as a string.

 A source of confusion with previous iterations of Rewrite's code generation capabilities was that the generation of a snippet of code resulted in a list of generated tree elements and it was then the responsibility of the developer to insert those new elements into the existing AST structure. The JavaTemplate API will now insert the generated snippet at the correct location, compile that snippet within the context of the existing AST and then return a mutated version of the AST. This is best illustrated with an example. 



 

#### Coordinates

#### Examples

## Maven



