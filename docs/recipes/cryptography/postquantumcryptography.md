---
sidebar_label: "Post quantum cryptography"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Post quantum cryptography

**io.moderne.cryptography.PostQuantumCryptography**

_This recipe searches for instances in code that may be impacted by post quantum cryptography. Applications may need to support larger key sizes, different algorithms, or use crypto agility to handle the migration. The recipe includes detection of hardcoded values that affect behavior in a post-quantum world, programmatic configuration that may prevent algorithm changes, and general cryptographic usage patterns that should be reviewed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1
`PostQuantumCryptographyTest#multipleCryptoIssues`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
        keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

###### After
```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = /*~~(ALGORITHM use)~~>*/KeyGenerator.getInstance(ALGORITHM);
        /*~~(KEY_SIZE use)~~>*/keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = /*~~(ALGORITHM use)~~>*/KeyPairGenerator.getInstance("RSA");
        /*~~(KEY_SIZE use)~~>*/kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = /*~~(PROTOCOL use)~~>*/SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = /*~~(ALGORITHM use)~~>*//*~~(CRYPTO_PROVIDER use)~~>*/Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        /*~~(PROVIDER_NAME use)~~>*/Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        /*~~(PROTOCOL use)~~>*/socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -18,2 +18,2 @@
    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
-       KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
-       keyGen.init(128);
+       KeyGenerator keyGen = /*~~(ALGORITHM use)~~>*/KeyGenerator.getInstance(ALGORITHM);
+       /*~~(KEY_SIZE use)~~>*/keyGen.init(128);

@@ -22,2 +22,2 @@

        // Hardcoded key length
-       KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
-       kpg.initialize(KEY_SIZE);
+       KeyPairGenerator kpg = /*~~(ALGORITHM use)~~>*/KeyPairGenerator.getInstance("RSA");
+       /*~~(KEY_SIZE use)~~>*/kpg.initialize(KEY_SIZE);

@@ -26,1 +26,1 @@

        // Hardcoded protocol
-       SSLContext ctx = SSLContext.getInstance(PROTOCOL);
+       SSLContext ctx = /*~~(PROTOCOL use)~~>*/SSLContext.getInstance(PROTOCOL);

@@ -29,1 +29,1 @@

        // Hardcoded provider
-       Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");
+       Cipher cipher = /*~~(ALGORITHM use)~~>*//*~~(CRYPTO_PROVIDER use)~~>*/Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

@@ -33,1 +33,1 @@
        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
-       Security.removeProvider("SunJCE");
+       /*~~(PROVIDER_NAME use)~~>*/Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);
@@ -38,1 +38,1 @@
        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
-       socket.setEnabledProtocols(new String[]{PROTOCOL});
+       /*~~(PROTOCOL use)~~>*/socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`PostQuantumCryptographyTest#multipleCryptoIssues`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
        keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
        kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

###### After
```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLParameters;
import javax.net.ssl.SSLSocket;
import java.security.KeyPairGenerator;
import java.security.Security;
import java.security.Provider;

public class CryptoExample {
    private static final String ALGORITHM = "AES";
    private static final String PROTOCOL = "TLSv1.2";
    private static final int KEY_SIZE = 2048;

    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
        KeyGenerator keyGen = /*~~(ALGORITHM use)~~>*/KeyGenerator.getInstance(ALGORITHM);
        /*~~(KEY_SIZE use)~~>*/keyGen.init(128);

        // Hardcoded key length
        KeyPairGenerator kpg = /*~~(ALGORITHM use)~~>*/KeyPairGenerator.getInstance("RSA");
        /*~~(KEY_SIZE use)~~>*/kpg.initialize(KEY_SIZE);

        // Hardcoded protocol
        SSLContext ctx = /*~~(PROTOCOL use)~~>*/SSLContext.getInstance(PROTOCOL);

        // Hardcoded provider
        Cipher cipher = /*~~(ALGORITHM use)~~>*//*~~(CRYPTO_PROVIDER use)~~>*/Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
        /*~~(PROVIDER_NAME use)~~>*/Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);

        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
        /*~~(PROTOCOL use)~~>*/socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -18,2 +18,2 @@
    public void configureCrypto() throws Exception {
        // Hardcoded algorithm
-       KeyGenerator keyGen = KeyGenerator.getInstance(ALGORITHM);
-       keyGen.init(128);
+       KeyGenerator keyGen = /*~~(ALGORITHM use)~~>*/KeyGenerator.getInstance(ALGORITHM);
+       /*~~(KEY_SIZE use)~~>*/keyGen.init(128);

@@ -22,2 +22,2 @@

        // Hardcoded key length
-       KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
-       kpg.initialize(KEY_SIZE);
+       KeyPairGenerator kpg = /*~~(ALGORITHM use)~~>*/KeyPairGenerator.getInstance("RSA");
+       /*~~(KEY_SIZE use)~~>*/kpg.initialize(KEY_SIZE);

@@ -26,1 +26,1 @@

        // Hardcoded protocol
-       SSLContext ctx = SSLContext.getInstance(PROTOCOL);
+       SSLContext ctx = /*~~(PROTOCOL use)~~>*/SSLContext.getInstance(PROTOCOL);

@@ -29,1 +29,1 @@

        // Hardcoded provider
-       Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");
+       Cipher cipher = /*~~(ALGORITHM use)~~>*//*~~(CRYPTO_PROVIDER use)~~>*/Cipher.getInstance("AES/GCM/NoPadding", "SunJCE");

@@ -33,1 +33,1 @@
        // Programmatic provider editing
        Provider provider = Security.getProvider("SunJCE");
-       Security.removeProvider("SunJCE");
+       /*~~(PROVIDER_NAME use)~~>*/Security.removeProvider("SunJCE");
        Security.insertProviderAt(provider, 1);
@@ -38,1 +38,1 @@
        // SSL configuration
        SSLSocket socket = (SSLSocket) ctx.getSocketFactory().createSocket();
-       socket.setEnabledProtocols(new String[]{PROTOCOL});
+       /*~~(PROTOCOL use)~~>*/socket.setEnabledProtocols(new String[]{PROTOCOL});
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PostQuantumCryptography
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-cryptography:{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.cryptography.PostQuantumCryptography" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.analysis.java.taint.table.TaintFlowTable" label="TaintFlowTable">

### Taint flow
**org.openrewrite.analysis.java.taint.table.TaintFlowTable**

_Records taint flows from sources to sinks with their taint types._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Source line | The line number where the taint source is located. |
| Source | The source code where taint originates. |
| Sink line | The line number where the taint sink is located. |
| Sink | The sink code where taint flows to. |
| Taint type | The taint type that matched at the sink. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

<TabItem value="io.moderne.cryptography.table.InsecureSetProperties" label="InsecureSetProperties">

### Insecure `Security.setProperty(..)` uses.
**io.moderne.cryptography.table.InsecureSetProperties**

_An itemization of the properties used in such calls_

| Column Name | Description |
| ----------- | ----------- |
| Source file | Path to the file where the result was found |
| Source code | The source code where the insecure property is defined, which may not contain a `Security.setProperty(..)` call directly if the property was defined somewhere and through data flow analysis we've concluded that it is later used in a `Security.setProperty(..)` call. |
| Property | The property that is set insecurely, e.g. `crypto.policy`. |

</TabItem>

<TabItem value="io.moderne.devcenter.table.SecurityIssues" label="SecurityIssues">

### Security issues
**io.moderne.devcenter.table.SecurityIssues**

_Security issues in the repository._

| Column Name | Description |
| ----------- | ----------- |
| Ordinal | The ordinal position of this issue relative to other issues. |
| Issue name | The name of the security issue. |

</TabItem>

</Tabs>
