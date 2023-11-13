# Modernize

_Modernize your code to best use the project's current JDK version. Take advantage of newly available APIs and reduce the dependency of your code on third party dependencies where there is equivalent functionality in the Java standard library._

## Categories

* [Apache](/reference/recipes/java/migrate/apache)
* [Cobertura](/reference/recipes/java/migrate/cobertura)
* [Guava](/reference/recipes/java/migrate/guava)
* [JaCoCo](/reference/recipes/java/migrate/jacoco)
* [Jakarta](/reference/recipes/java/migrate/jakarta)
* [Lombok](/reference/recipes/java/migrate/lombok)
* [Maven](/reference/recipes/java/migrate/maven)
* [Metrics](/reference/recipes/java/migrate/metrics)
* [Plexus](/reference/recipes/java/migrate/plexus)
* [Search](/reference/recipes/java/migrate/search)
* [Wro4j](/reference/recipes/java/migrate/wro4j)
* [java.io APIs](/reference/recipes/java/migrate/io)
* [java.lang APIs](/reference/recipes/java/migrate/lang)
* [java.net APIs](/reference/recipes/java/migrate/net)
* [java.sql APIs](/reference/recipes/java/migrate/sql)
* [java.util APIs](/reference/recipes/java/migrate/util)
* [java.util.concurrent APIs](/reference/recipes/java/migrate/concurrent)
* [java.util.logging APIs](/reference/recipes/java/migrate/logging)
* [javax APIs](/reference/recipes/java/migrate/javax)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add missing `isWrapperFor` and `unwrap` methods.](./jrewrapperinterface.md)
* [Adds missing JDBC interface methods.](./jrejdbcinterfacenewmethods.md)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](./deprecatedlogrecordthreadid.md)
* [Change Maven Java version property values to 11](./javaversion11.md)
* [Change Maven Java version property values to 17](./javaversion17.md)
* [Change Maven Java version property values to 21](./javaversion21.md)
* [Migrate to IBM Semeru Runtimes](./ibmsemeru.md)
* [Migrate to Java 11](./java8tojava11.md)
* [Migrate to Java 17](./upgradetojava17.md)
* [Migrate to Java 21](./upgradetojava21.md)
* [Migrate to Java 7](./upgradetojava7.md)
* [Set visibility of `premain` and `agentmain` methods to `public`](./jre17agentmainpremainpublic.md)
* [Use `com.ibm.jsse2` instead of `com.sun.net.ssl.internal.ssl`](./jredonotusesunnetsslinternalsslprovider.md)

## Recipes

* [Add `JDeprScan` Maven Plug-in](./addjdeprscanplugin.md)
* [Add Maven Jar Plugin to suppress Illegal Reflection Warnings](./addsuppressionforillegalreflectionwarningsplugin.md)
* [Adds missing method implementations.](./addmissingmethodimplementation.md)
* [Change method invocation return type](./changemethodinvocationreturntype.md)
* [Force indentation to either tabs or spaces](./usetabsorspaces.md)
* [MBean and MXBean interfaces must be public](./mxbeannonpublic.md)
* [Migrate to Java 6](./upgradetojava6.md)
* [Migrate to Java 8](./upgradetojava8.md)
* [Prefer `java.util.Base64` instead of `sun.misc`](./usejavautilbase64.md)
* [Replace DTO method parameters with data elements](./dontoverfetchdto.md)
* [Replace `String` literal](./replacestringliteralvalue.md)
* [Upgrade Java version](./upgradejavaversion.md)
* [Use `SunJSSE` instead of `com.sun.net.ssl.internal.ssl.Provider`](./removedlegacysunjsseprovidername.md)
* [Use `com.ibm.net.ssl.www2.protocol` instead of `com.sun.net.ssl.internal.www.protocol`](./jredonotusesunnetsslinternalwwwprotocol.md)
* [Use `com.ibm.net.ssl.www2.protocol.https.Handler` instead of `com.sun.net.ssl.internal.www.protocol.https.Handler`](./jredonotusesunnetsslinternalwwwprotocolhttpshandler.md)
* [Use `com.sun.xml.bind.v2.ContextFactory` instead of `com.sun.xml.internal.bind.v2.ContextFactory`](./internalbindcontextfactory.md)
* [Use `java.security.cert` instead of `javax.security.cert`](./deprecatedjavaxsecuritycert.md)


