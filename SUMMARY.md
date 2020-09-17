# Table of contents

* [Overview](README.md)
* [Getting Started](quickstart.md)

## Concepts <a id="v1beta"></a>

* [Abstract Syntax Trees](v1beta/abstract-syntax-trees.md)
* [Visitors](v1beta/visitor.md)
* [Recipes](v1beta/recipes.md)
* [Refactor](v1beta/refactor.md)
* [Styles](v1beta/styles.md)
* [Environment](v1beta/environment.md)

## Configuring

* [Rewrite Maven Plugin](configuring/rewrite-maven-plugin/README.md)
  * [Publishing ASTs](configuring/rewrite-maven-plugin/publishing-asts.md)
* [Rewrite Gradle Plugin](configuring/rewrite-gradle-plugin.md)

## Tutorials

* [Running as a Google Cloud Function](tutorials/running-as-a-google-cloud-function.md)
* [Writing a Custom Declarative Visitor](tutorials/writing-a-custom-declarative-visitor.md)

## Java

* [Parsing Java Code](java/parsing-java-code.md)
* [Semantic Search for Java](java/semantic-search-for-java/README.md)
  * [FindAnnotations](java/semantic-search-for-java/findannotations.md)
  * [FindFields](java/semantic-search-for-java/findfields.md)
  * [FindInheritedFields](java/semantic-search-for-java/findinheritedfields.md)
  * [FindMethods](java/semantic-search-for-java/findmethods.md)
  * [FindReferencedTypes](java/semantic-search-for-java/findreferencedtypes.md)
  * [FindReferencesToVariable](java/semantic-search-for-java/findreferencestovariable.md)
  * [FindType](java/semantic-search-for-java/findtype.md)
  * [HasType](java/semantic-search-for-java/hastype.md)
* [Transforming Java Code](java/refactoring-java-source-code/README.md)
  * [AddAnnotation](java/refactoring-java-source-code/addannotation.md)
  * [AddField](java/refactoring-java-source-code/addfield.md)
  * [AddImport](java/refactoring-java-source-code/addimport.md)
  * [AutoFormat](java/refactoring-java-source-code/autoformat.md)
  * [ChangeFieldName](java/refactoring-java-source-code/changefieldname.md)
  * [ChangeFieldType](java/refactoring-java-source-code/changefieldtype.md)
  * [ChangeLiteral](java/refactoring-java-source-code/changeliteral.md)
  * [ChangeMethodName](java/refactoring-java-source-code/changemethodname.md)
  * [ChangeType](java/refactoring-java-source-code/changetype.md)
  * [DeleteMethodArgument](java/refactoring-java-source-code/deletemethodargument.md)
  * [DeleteStatement](java/refactoring-java-source-code/deletestatement.md)
  * [GenerateConstructorUsingFields](java/refactoring-java-source-code/generateconstructorusingfields.md)
  * [ImplementInterface](java/refactoring-java-source-code/implementinterface.md)
  * [InsertMethodArgument](java/refactoring-java-source-code/insertmethodargument.md)
  * [OrderDeclarations](java/refactoring-java-source-code/orderdeclarations.md)
  * [OrderImports](java/refactoring-java-source-code/orderimports.md)
  * [RemoveImport](java/refactoring-java-source-code/removeimport.md)
  * [ReorderMethodArguments](java/refactoring-java-source-code/reordermethodarguments.md)
  * [UnwrapParentheses](java/refactoring-java-source-code/unwrapparentheses.md)
  * [UseStaticImport](java/refactoring-java-source-code/usestaticimport.md)
* [Spring](java/spring/README.md)
  * [Spring Boot 2 Migration](java/spring/spring-boot-2-migration/README.md)
    * [ConditionalOnBeanAnyNestedCondition](java/spring/spring-boot-2-migration/conditionalonbeananynestedcondition.md)
    * [RestTemplateBuilderRequestFactory](java/spring/spring-boot-2-migration/resttemplatebuilderrequestfactory.md)
    * [SpringBootConfiguration\*](java/spring/spring-boot-2-migration/springbootconfiguration.md)
    * [SpringBootServletInitializerPackage](java/spring/spring-boot-2-migration/springbootservletinitializerpackage.md)
  * [Best Practices](java/spring/best-practices/README.md)
    * [BeanMethodsNotPublic](java/spring/best-practices/beanmethodsnotpublic.md)
    * [ConstructorInjection](java/spring/best-practices/constructorinjection.md)
    * [ImplicitWebAnnotationNames](java/spring/best-practices/implicitwebannotationnames.md)
    * [NoAutowired](java/spring/best-practices/noautowired.md)
    * [NoRequestMappingAnnotation](java/spring/best-practices/norequestmappingannotation.md)
* [Checkstyle](java/checkstyle/README.md)
  * [CovariantEquals](java/checkstyle/covariantequals.md)
  * [DefaultComesLast](java/checkstyle/defaultcomeslast.md)
  * [EmptyBlock](java/checkstyle/emptyblock.md)
  * [EmptyForInitializerPad](java/checkstyle/emptyforinitializerpad.md)
  * [EmptyForIteratorPad](java/checkstyle/emptyforiteratorpad.md)
  * [EmptyStatement](java/checkstyle/emptystatement.md)
  * [EqualsAvoidsNull](java/checkstyle/equalsavoidsnull.md)
  * [ExplicitInitialization](java/checkstyle/explicitinitialization.md)
  * [FallThrough](java/checkstyle/fallthrough.md)
  * [FinalClass](java/checkstyle/finalclass.md)
  * [FinalLocalVariable](java/checkstyle/finallocalvariable.md)
  * [GenericWhitespace](java/checkstyle/genericwhitespace.md)
  * [HiddenField](java/checkstyle/hiddenfield.md)
  * [HideUtilityClassConstructor](java/checkstyle/hideutilityclassconstructor.md)
  * [LeftCurly](java/checkstyle/leftcurly.md)
  * [MethodParamPad](java/checkstyle/methodparampad.md)
  * [MultipleVariableDeclarations](java/checkstyle/multiplevariabledeclarations.md)
  * [NeedBraces](java/checkstyle/needbraces.md)
  * [NoFinalizer](java/checkstyle/nofinalizer.md)
  * [NoWhitespaceAfter](java/checkstyle/nowhitespaceafter.md)
  * [NoWhitespaceBefore](java/checkstyle/nowhitespacebefore.md)
  * [OperatorWrap](java/checkstyle/operatorwrap.md)
  * [RightCurly](java/checkstyle/rightcurly.md)
  * [SimplifyBooleanExpression](java/checkstyle/simplifybooleanexpression.md)
  * [SimplifyBooleanReturn](java/checkstyle/simplifybooleanreturn.md)
  * [SpansMultipleLines](java/checkstyle/spansmultiplelines.md)
  * [StaticVariableName](java/checkstyle/staticvariablename.md)
  * [StringLiteralEquality](java/checkstyle/stringliteralequality.md)
  * [TypecastParenPad](java/checkstyle/typecastparenpad.md)
  * [UnnecessaryParentheses](java/checkstyle/unnecessaryparentheses.md)
* [Mockito](java/mockito/README.md)
  * [ArgumentMatchersAny](java/mockito/argumentmatchersany.md)
  * [InvocationOnMockGetArgument](java/mockito/invocationonmockgetargument.md)
  * [MockAsOuterClass](java/mockito/mockasouterclass.md)
  * [MockUtilsToStatic](java/mockito/mockutilstostatic.md)

## Maven

* [Parsing Maven POMs](maven/parsing-maven-poms.md)
* [Semantic Search for Maven](maven/semantic-search-for-maven.md)
* [Transforming Maven POMs](maven/transforming-maven-poms/README.md)
  * [ChangeDependencyVersion](maven/transforming-maven-poms/changedependencyversion.md)
  * [ChangeParentVersion](maven/transforming-maven-poms/changeparentversion.md)
  * [ChangePropertyValue](maven/transforming-maven-poms/changepropertyvalue.md)
  * [UpgradeDependencyVersion](maven/transforming-maven-poms/upgradedependencyversion.md)
  * [UpgradeParentVersion](maven/transforming-maven-poms/upgradeparentversion.md)

## YAML

* [Parsing YAML Documents](yaml/parsing-yaml-documents.md)
* [Semantic Search for YAML](yaml/semantic-search-for-yaml.md)
* [Transforming YAML Documents](yaml/transforming-yaml-documents/README.md)
  * [CoalesceProperties](yaml/transforming-yaml-documents/coalesceproperties.md)

## XML

* [Parsing XML](xml/parsing-xml.md)
* [Semantic Search for XML](xml/semantic-search-for-xml/README.md)
  * [FindTag](xml/semantic-search-for-xml/findtag.md)
  * [FindTags](xml/semantic-search-for-xml/findtags.md)
* [Transforming XML](xml/transforming-xml/README.md)
  * [AddToTag](xml/transforming-xml/addtotag.md)
  * [ChangeTagValue](xml/transforming-xml/changetagvalue.md)

## Properties

* [Parsing Properties](properties/parsing-properties.md)
* [Semantic Search for Properties](properties/semantic-search-for-properties/README.md)
  * [FindProperty](properties/semantic-search-for-properties/findproperty.md)
* [Transforming Properties](properties/transforming-properties/README.md)
  * [ChangePropertyKey](properties/transforming-properties/changepropertykey.md)
  * [ChangePropertyValue](properties/transforming-properties/changepropertyvalue.md)

## Design Partners

* [Design Partner 1](design-partners/design-partner-1.md)

