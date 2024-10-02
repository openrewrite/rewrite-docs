# 8.8.4 release (2023-11-07)

## New Recipes

* [org.openrewrite.IsInRepository](../../recipes/isinrepository): A search recipe which marks files that are in a repository with one of the supplied names. Intended for use as a precondition for other recipes being run over many different repositories 
* [org.openrewrite.java.migrate.AddMissingMethodImplementation](../../recipes/java/migrate/addmissingmethodimplementation): Check for missing methods required by interfaces and adds them. 
* [org.openrewrite.java.migrate.JREJdbcInterfaceNewMethods](../../recipes/java/migrate/jrejdbcinterfacenewmethods): Add method implementations stubs to classes that implement JDBC interfaces. 
* [org.openrewrite.java.migrate.JREWrapperInterface](../../recipes/java/migrate/jrewrapperinterface): Add method implementations stubs to classes that implement `java.sql.Wrapper`. 
* [org.openrewrite.java.migrate.MXBeanNonPublic](../../recipes/java/migrate/mxbeannonpublic): Sets visibility of MBean and MXBean interfaces to public. 
* [org.openrewrite.java.migrate.UpgradeToJava6](../../recipes/java/migrate/upgradetojava6): This recipe will apply changes commonly needed when upgrading to Java 6. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. 
* [org.openrewrite.java.migrate.UpgradeToJava7](../../recipes/java/migrate/upgradetojava7): This recipe will apply changes commonly needed when upgrading to Java 7. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. 
* [org.openrewrite.java.migrate.UpgradeToJava8](../../recipes/java/migrate/upgradetojava8): This recipe will apply changes commonly needed when upgrading to Java 8. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. 
* [org.openrewrite.java.migrate.jakarta.FacesJNDINamesChanged](../../recipes/java/migrate/jakarta/facesjndinameschanged): The `jsf/ClientSideSecretKey` JNDI name has been renamed to `faces/ClientSideSecretKey`,  and the `jsf/FlashSecretKey` JNDI name has been renamed to `faces/FlashSecretKey`.  The JNDI keys that have been renamed are updated to allow use of the keys. 
* [org.openrewrite.java.migrate.jakarta.RemoveMethods](../../recipes/java/migrate/jakarta/removemethods): Checks for a method patterns and removes the method call from the class 
* [org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver](../../recipes/java/migrate/jakarta/removedjakartafacesresourceresolver): The `ResourceResolver` class was removed in Jakarta Faces 4.0.  The functionality provided by that class can be replaced by using the `jakarta.faces.application.ResourceHandler` class. 
* [org.openrewrite.java.migrate.jakarta.RemovedUIComponentConstant](../../recipes/java/migrate/jakarta/removeduicomponentconstant): Replace `jakarta.faces.component.UIComponent.CURRENT_COMPONENT` and `CURRENT_COMPOSITE_COMPONENT` constants with `jakarta.faces.component.UIComponent.getCurrentComponent()` and `getCurrentCompositeComponent()` that were added in JSF 2.0 
* [org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265](../../recipes/java/migrate/jakarta/servletcookiebehaviorchangerfc6265): Jakarta Servlet methods have been deprecated for removal in Jakarta Servlet 6.0 to align with RFC 6265.  In addition, the behavior of these methods has been changed so the setters no longer have any effect, the getComment methods return null, and the getVersion method returns 0. The deprecated methods are removed. 
* [org.openrewrite.java.migrate.util.IteratorNext](../../recipes/java/migrate/util/iteratornext): Replace `SequencedCollection.iterator().next()` with `getFirst()`. 
* [org.openrewrite.java.migrate.util.ListFirstAndLast](../../recipes/java/migrate/util/listfirstandlast): Replace `list.get(0)` with `list.getFirst()`, `list.get(list.size() - 1)` with `list.getLast()`, and similar for `add(int, E)` and `remove(int)`. 
* [org.openrewrite.java.migrate.util.OptionalStreamRecipe](../../recipes/java/migrate/util/optionalstreamrecipe): Migrate Java 8 `Optional<Stream>.filter(Optional::isPresent).map(Optional::get)` to Java 11 `.flatMap(Optional::stream)`. 
* [org.openrewrite.search.FindCommitters](../../recipes/search/findcommitters): List the committers on a repository. 

