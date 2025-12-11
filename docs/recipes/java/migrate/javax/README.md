---
description: javax APIs OpenRewrite recipes.
---

# javax APIs

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add explicit Common Annotations dependencies](./addcommonannotationsdependencies.md)
* [Add explicit Inject dependencies](./addinjectdependencies.md)
* [Add explicit JAX-WS dependencies](./addjaxwsdependencies.md)
* [Add explicit JAXB API dependencies](./addjaxbapidependencies.md)
* [Add explicit JAXB API dependencies and remove runtimes](./addjaxbdependencieswithoutruntime.md)
* [Add explicit JAXB API dependencies and runtime](./addjaxbdependencieswithruntime.md)
* [Migrate JAXB-WS Plugin](./migratejaxbwsplugin.md)
* [Migrate from OpenJPA to EclipseLink JPA](./openjpatoeclipselink.md)
* [Use modernized `javax.lang.model.util` APIs](./javaxlangmodelutil.md)
* [Use modernized `javax.xml.stream` APIs](./javaxxmlstreamapis.md)
* [Use the latest JAX-WS API and runtime for Jakarta EE 8](./addjaxwsruntime.md)

## Recipes

* [`@ElementCollection` annotations must be accompanied by a defined `@Column` annotation](./addcolumnannotation.md)
* [`@Embeddable` classes cannot have an `@Id` annotation when referenced by an `@EmbeddedId` annotation](./removeembeddableid.md)
* [`@Entity` objects with constructors must also have a default constructor](./adddefaultconstructortoentityclass.md)
* [`@JoinColumn` annotations must be used with relationship mappings](./usejoincolumnformapping.md)
* [Add scope annotation to injected classes](./addscopetoinjectedclass.md)
* [Attributes with automatically generated values require configuration](./addtablegenerator.md)
* [Private accessor methods must have a `@Transient` annotation](./addtransientannotationtoprivateaccessor.md)
* [Remove the `@Temporal` annotation for some `java.sql` attributes](./removetemporalannotation.md)
* [Unannotated collection attributes require a Transient annotation](./addtransientannotationtocollections.md)
* [Unannotated entity attributes require a Transient annotation](./addtransientannotationtoentity.md)
* [Use HttpServletRequest `logout` method for programmatic security logout in Servlet 3.0](./httpsessioninvalidate.md)
* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](./migrateabstractannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](./migrateabstractelementvisitor6to9.md)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](./migrateabstracttypevisitor6to9.md)
* [Use `javax.lang.model.util.ElementKindVisitor9`](./migrateelementkindvisitor6to9.md)
* [Use `javax.lang.model.util.ElementScanner9`](./migrateelementscanner6to9.md)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](./migratesimpleannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](./migratesimpleelementvisitor6to9.md)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](./migratesimpletypevisitor6to9.md)
* [Use `javax.lang.model.util.TypeKindVisitor9`](./migratetypekindvisitor6to9.md)
* [Use `javax.management.monitor.CounterMonitor#setInitThreshold`](./migratecountermonitorsetthresholdtosetinitthreshold.md)
* [Use `javax.xml.stream.XMLEventFactory#newFactory(String, ClassLoader)`](./migratexmleventfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`](./migratexmlinputfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLOutputFactory#newFactory(String, ClassLoader)`](./migratexmloutputfactorynewinstancetonewfactory.md)
* [Use latest JAXB API and runtime for Jakarta EE 8](./addjaxbruntime.md)
* [Use modernized `javax.management.monitor` APIs](./javaxmanagementmonitorapis.md)
* [Use the latest JAX-WS API and runtime for Jakarta EE 8](./addjaxwsruntime$addjaxwsruntimegradle.md)
* [Use the latest JAX-WS API and runtime for Jakarta EE 8](./addjaxwsruntime$addjaxwsruntimemaven.md)


