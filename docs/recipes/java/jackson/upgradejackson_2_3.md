---
sidebar_label: "Migrates from Jackson 2.x to Jackson 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates from Jackson 2.x to Jackson 3.x

**org.openrewrite.java.jackson.UpgradeJackson\_2\_3**

```
Migrate applications to the latest Jackson 3.x release. This recipe handles package changes (`com.fasterxml.jackson` -> `tools.jackson`), dependency updates, core class renames, exception renames, and method renames (e.g., `JsonGenerator.writeObject()` -> `writePOJO()`, `JsonParser.getCurrentValue()` -> `currentValue()`).
```


### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: jackson-2-3.yml](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-2-3.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `IOException` with `JacksonException` in catch clauses](../../java/jackson/ioexceptiontojacksonexception)
* [Remove elements from a method declaration `throws` clause](../../java/removemethodthrows)
  * methodPattern: `com.fasterxml.jackson.databind.JsonSerializer serialize(..)`
  * exceptionTypePattern: `java.io.IOException`
* [Remove elements from a method declaration `throws` clause](../../java/removemethodthrows)
  * methodPattern: `com.fasterxml.jackson.databind.JsonDeserializer deserialize(..)`
  * exceptionTypePattern: `java.io.IOException`
* [Replace `null` type in `StdDeserializer` constructor with actual type](../../java/jackson/stddeserializernullconstructor)
* [Update `lombok.config` for Jackson 3 compatibility](../../java/jackson/lombokjacksonizedconfig)
* [Update configuration of serialization inclusion in `ObjectMapper` for Jackson 3](../../java/jackson/updateserializationinclusionconfiguration)
* [Use format alignment `ObjectMappers`](../../java/jackson/useformatalignedobjectmappers)
* [Migrate `JsonMapper` setter calls to builder pattern](../../java/jackson/migratemappersetterstobuilder)
* [Upgrade Jackson 2.x dependencies to 3.x](../../java/jackson/upgradejackson_2_3_dependencies)
* [Update Jackson 2.x types to 3.x](../../java/jackson/upgradejackson_2_3_typechanges)
* [Rename Jackson 2.x methods to 3.x equivalents](../../java/jackson/upgradejackson_2_3_methodrenames)
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/upgradejackson_2_3_removeredundantfeatureflags)
* [Migrate relocated feature constants to DateTimeFeature and EnumFeature](../../java/jackson/upgradejackson_2_3_relocatedfeatureconstants)
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonToken.FIELD_NAME`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonToken.PROPERTY_NAME`
* [Replace `ObjectMapper.copy()` with `rebuild().build()`](../../java/jackson/replaceobjectmappercopy)
* [Remove registrations of modules built-in to Jackson 3](../../java/jackson/removebuiltinmoduleregistrations)
* [Use modern date/time serialization defaults](../../java/jackson/usemoderndatetimeserialization)
* [Replace removed `JsonGenerator` capability methods with `StreamWriteCapability`](../../java/jackson/replacestreamwritecapability)
* [Replace `@JsonIgnore` with `@JsonSetter` on empty collection fields](../../java/jackson/replacejsonignorewithjsonsetter)
* [Add `@JsonCreator` to non-public constructors](../../java/jackson/addjsoncreatortoprivateconstructors)
* [Add comment to method invocations](../../java/addcommenttomethodinvocations)
  * comment: `TODO canSerialize was removed in Jackson 3 with no replacement (see https://github.com/FasterXML/jackson-databind/issues/1917). Attempt serialization/deserialization and catch exceptions instead.`
  * methodPattern: `com.fasterxml.jackson.databind.ObjectMapper canSerialize(..)`
* [Add comment to method invocations](../../java/addcommenttomethodinvocations)
  * comment: `TODO canDeserialize was removed in Jackson 3 with no replacement (see https://github.com/FasterXML/jackson-databind/issues/1917). Attempt serialization/deserialization and catch exceptions instead.`
  * methodPattern: `com.fasterxml.jackson.databind.ObjectMapper canDeserialize(..)`
* [Update Jackson package names from 2.x to 3.x](../../java/jackson/upgradejackson_2_3_packagechanges)
* [Simplify catch clauses for Jackson exceptions](../../java/jackson/simplifyjacksonexceptioncatch)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.UpgradeJackson_2_3
displayName: Migrates from Jackson 2.x to Jackson 3.x
description: |
  Migrate applications to the latest Jackson 3.x release. This recipe handles package changes (`com.fasterxml.jackson` -&gt; `tools.jackson`), dependency updates, core class renames, exception renames, and method renames (e.g., `JsonGenerator.writeObject()` -&gt; `writePOJO()`, `JsonParser.getCurrentValue()` -&gt; `currentValue()`).
tags:
  - jackson-3
recipeList:
  - org.openrewrite.java.jackson.IOExceptionToJacksonException
  - org.openrewrite.java.RemoveMethodThrows:
      methodPattern: com.fasterxml.jackson.databind.JsonSerializer serialize(..)
      exceptionTypePattern: java.io.IOException
  - org.openrewrite.java.RemoveMethodThrows:
      methodPattern: com.fasterxml.jackson.databind.JsonDeserializer deserialize(..)
      exceptionTypePattern: java.io.IOException
  - org.openrewrite.java.jackson.StdDeserializerNullConstructor
  - org.openrewrite.java.jackson.LombokJacksonizedConfig
  - org.openrewrite.java.jackson.UpdateSerializationInclusionConfiguration
  - org.openrewrite.java.jackson.UseFormatAlignedObjectMappers
  - org.openrewrite.java.jackson.MigrateMapperSettersToBuilder
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_Dependencies
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_TypeChanges
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_MethodRenames
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_RelocatedFeatureConstants
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonToken.FIELD_NAME
      fullyQualifiedConstantName: com.fasterxml.jackson.core.JsonToken.PROPERTY_NAME
  - org.openrewrite.java.jackson.ReplaceObjectMapperCopy
  - org.openrewrite.java.jackson.RemoveBuiltInModuleRegistrations
  - org.openrewrite.java.jackson.UseModernDateTimeSerialization
  - org.openrewrite.java.jackson.ReplaceStreamWriteCapability
  - org.openrewrite.java.jackson.ReplaceJsonIgnoreWithJsonSetter
  - org.openrewrite.java.jackson.AddJsonCreatorToPrivateConstructors
  - org.openrewrite.java.AddCommentToMethodInvocations:
      comment: TODO canSerialize was removed in Jackson 3 with no replacement (see https://github.com/FasterXML/jackson-databind/issues/1917). Attempt serialization/deserialization and catch exceptions instead.
      methodPattern: com.fasterxml.jackson.databind.ObjectMapper canSerialize(..)
  - org.openrewrite.java.AddCommentToMethodInvocations:
      comment: TODO canDeserialize was removed in Jackson 3 with no replacement (see https://github.com/FasterXML/jackson-databind/issues/1917). Attempt serialization/deserialization and catch exceptions instead.
      methodPattern: com.fasterxml.jackson.databind.ObjectMapper canDeserialize(..)
  - org.openrewrite.java.jackson.UpgradeJackson_2_3_PackageChanges
  - org.openrewrite.java.jackson.SimplifyJacksonExceptionCatch

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Framework 7.0](/recipes/java/spring/framework/upgradespringframework_7_0.md)

## Examples
##### Example 1
`Jackson3DependenciesTest#jacksonAnnotations`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.21</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
-           <version>2.19.0</version>
+           <version>2.21</version>
        </dependency>
```
</TabItem>
</Tabs>

---

##### Example 2
`Jackson3MethodRenamesTest#jsonGeneratorWriteObject`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonGenerator;

class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
        gen.writeObject(value);
    }
}
```

###### After
```java
import tools.jackson.core.JsonGenerator;

class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
        gen.writePOJO(value);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.fasterxml.jackson.core.JsonGenerator;
+import tools.jackson.core.JsonGenerator;

@@ -5,1 +5,1 @@
class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
-       gen.writeObject(value);
+       gen.writePOJO(value);
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`Jackson3TypeChangesTest#jsonFactory`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonFactory;

class Test {
    JsonFactory factory = new JsonFactory();
}
```

###### After
```java
import tools.jackson.core.TokenStreamFactory;

class Test {
    TokenStreamFactory factory = new TokenStreamFactory();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.fasterxml.jackson.core.JsonFactory;
+import tools.jackson.core.TokenStreamFactory;

@@ -4,1 +4,1 @@

class Test {
-   JsonFactory factory = new JsonFactory();
+   TokenStreamFactory factory = new TokenStreamFactory();
}
```
</TabItem>
</Tabs>

---

##### Example 4
`LombokJacksonizedConfigTest#addJacksonVersionToLombokConfig`


###### Unchanged
```java
import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
class MyDto {
    String name;
    int age;
}
```

---

##### Example 5
`RemoveThrowsIOExceptionFromJacksonOverridesTest#removeThrowsIOExceptionFromSerializer`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

class MySerializer extends JsonSerializer<String> {
    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.toUpperCase());
    }
}
```

###### After
```java
import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

class MySerializer extends ValueSerializer<String> {
    @Override
    public void serialize(String value, JsonGenerator gen, SerializationContext provider) {
        gen.writeString(value.toUpperCase());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,3 @@
-import com.fasterxml.jackson.core.JsonGenerator;
-import com.fasterxml.jackson.databind.JsonSerializer;
-import com.fasterxml.jackson.databind.SerializerProvider;
-import java.io.IOException;
+import tools.jackson.core.JsonGenerator;
+import tools.jackson.databind.SerializationContext;
+import tools.jackson.databind.ValueSerializer;

@@ -6,1 +5,1 @@
import java.io.IOException;

-class MySerializer extends JsonSerializer<String> {
+class MySerializer extends ValueSerializer<String> {
    @Override
@@ -8,1 +7,1 @@
class MySerializer extends JsonSerializer<String> {
    @Override
-   public void serialize(String value, JsonGenerator gen, SerializerProvider provider) throws IOException {
+   public void serialize(String value, JsonGenerator gen, SerializationContext provider) {
        gen.writeString(value.toUpperCase());
```
</TabItem>
</Tabs>

---

##### Example 6
`StdDeserializerNullConstructorTest#stdDeserializerThisNullPattern`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;

class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
        this(null);
    }

    public MyDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public String deserialize(JsonParser p, DeserializationContext ctxt)
            throws IOException {
        return p.getValueAsString();
    }
}
```

###### After
```java
import tools.jackson.core.JsonParser;
import tools.jackson.databind.DeserializationContext;
import tools.jackson.databind.deser.std.StdDeserializer;

class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
        this(String.class);
    }

    public MyDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public String deserialize(JsonParser p, DeserializationContext ctxt) {
        return p.getValueAsString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,3 @@
-import com.fasterxml.jackson.core.JsonParser;
-import com.fasterxml.jackson.databind.DeserializationContext;
-import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
-import java.io.IOException;
+import tools.jackson.core.JsonParser;
+import tools.jackson.databind.DeserializationContext;
+import tools.jackson.databind.deser.std.StdDeserializer;

@@ -8,1 +7,1 @@
class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
-       this(null);
+       this(String.class);
    }
@@ -16,2 +15,1 @@

    @Override
-   public String deserialize(JsonParser p, DeserializationContext ctxt)
-           throws IOException {
+   public String deserialize(JsonParser p, DeserializationContext ctxt) {
        return p.getValueAsString();
```
</TabItem>
</Tabs>

---

##### Example 7
`TypeFactoryDefaultInstanceTest#typeFactoryDefaultInstanceRenamed`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;

class Test {
    JavaType getType() {
        return TypeFactory.defaultInstance().constructType(String.class);
    }
}
```

###### After
```java
import tools.jackson.databind.JavaType;
import tools.jackson.databind.type.TypeFactory;

class Test {
    JavaType getType() {
        return TypeFactory.createDefaultInstance().constructType(String.class);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import com.fasterxml.jackson.databind.JavaType;
-import com.fasterxml.jackson.databind.type.TypeFactory;
+import tools.jackson.databind.JavaType;
+import tools.jackson.databind.type.TypeFactory;

@@ -6,1 +6,1 @@
class Test {
    JavaType getType() {
-       return TypeFactory.defaultInstance().constructType(String.class);
+       return TypeFactory.createDefaultInstance().constructType(String.class);
    }
```
</TabItem>
</Tabs>

---

##### Example 8
`UpgradeJackson_2_3Test#jacksonUpgradeToVersion3`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.core.JsonFactoryBuilder;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.core.TokenStreamFactory;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        TokenStreamFactory factory = new JsonFactoryBuilder().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,3 +2,3 @@
import com.fasterxml.jackson.annotation.JsonProperty;
-import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonFactoryBuilder;
-import com.fasterxml.jackson.databind.ObjectMapper;
+import tools.jackson.core.JsonFactoryBuilder;
+import tools.jackson.databind.ObjectMapper;
+import tools.jackson.core.TokenStreamFactory;

@@ -13,1 +13,1 @@
    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
-       JsonFactory factory = new JsonFactoryBuilder().build();
+       TokenStreamFactory factory = new JsonFactoryBuilder().build();
    }
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-parameter-names</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jdk8</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr310</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 9
`Jackson3DependenciesTest#jacksonAnnotations`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.21</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
-           <version>2.19.0</version>
+           <version>2.21</version>
        </dependency>
```
</TabItem>
</Tabs>

---

##### Example 10
`Jackson3MethodRenamesTest#jsonGeneratorWriteObject`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonGenerator;

class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
        gen.writeObject(value);
    }
}
```

###### After
```java
import tools.jackson.core.JsonGenerator;

class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
        gen.writePOJO(value);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.fasterxml.jackson.core.JsonGenerator;
+import tools.jackson.core.JsonGenerator;

@@ -5,1 +5,1 @@
class Test {
    void test(JsonGenerator gen, Object value) throws Exception {
-       gen.writeObject(value);
+       gen.writePOJO(value);
    }
```
</TabItem>
</Tabs>

---

##### Example 11
`Jackson3TypeChangesTest#jsonFactory`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonFactory;

class Test {
    JsonFactory factory = new JsonFactory();
}
```

###### After
```java
import tools.jackson.core.TokenStreamFactory;

class Test {
    TokenStreamFactory factory = new TokenStreamFactory();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.fasterxml.jackson.core.JsonFactory;
+import tools.jackson.core.TokenStreamFactory;

@@ -4,1 +4,1 @@

class Test {
-   JsonFactory factory = new JsonFactory();
+   TokenStreamFactory factory = new TokenStreamFactory();
}
```
</TabItem>
</Tabs>

---

##### Example 12
`LombokJacksonizedConfigTest#addJacksonVersionToLombokConfig`


###### Unchanged
```java
import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
class MyDto {
    String name;
    int age;
}
```

---

##### Example 13
`RemoveThrowsIOExceptionFromJacksonOverridesTest#removeThrowsIOExceptionFromSerializer`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import java.io.IOException;

class MySerializer extends JsonSerializer<String> {
    @Override
    public void serialize(String value, JsonGenerator gen, SerializerProvider provider) throws IOException {
        gen.writeString(value.toUpperCase());
    }
}
```

###### After
```java
import tools.jackson.core.JsonGenerator;
import tools.jackson.databind.SerializationContext;
import tools.jackson.databind.ValueSerializer;

class MySerializer extends ValueSerializer<String> {
    @Override
    public void serialize(String value, JsonGenerator gen, SerializationContext provider) {
        gen.writeString(value.toUpperCase());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,3 @@
-import com.fasterxml.jackson.core.JsonGenerator;
-import com.fasterxml.jackson.databind.JsonSerializer;
-import com.fasterxml.jackson.databind.SerializerProvider;
-import java.io.IOException;
+import tools.jackson.core.JsonGenerator;
+import tools.jackson.databind.SerializationContext;
+import tools.jackson.databind.ValueSerializer;

@@ -6,1 +5,1 @@
import java.io.IOException;

-class MySerializer extends JsonSerializer<String> {
+class MySerializer extends ValueSerializer<String> {
    @Override
@@ -8,1 +7,1 @@
class MySerializer extends JsonSerializer<String> {
    @Override
-   public void serialize(String value, JsonGenerator gen, SerializerProvider provider) throws IOException {
+   public void serialize(String value, JsonGenerator gen, SerializationContext provider) {
        gen.writeString(value.toUpperCase());
```
</TabItem>
</Tabs>

---

##### Example 14
`StdDeserializerNullConstructorTest#stdDeserializerThisNullPattern`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import java.io.IOException;

class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
        this(null);
    }

    public MyDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public String deserialize(JsonParser p, DeserializationContext ctxt)
            throws IOException {
        return p.getValueAsString();
    }
}
```

###### After
```java
import tools.jackson.core.JsonParser;
import tools.jackson.databind.DeserializationContext;
import tools.jackson.databind.deser.std.StdDeserializer;

class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
        this(String.class);
    }

    public MyDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public String deserialize(JsonParser p, DeserializationContext ctxt) {
        return p.getValueAsString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,3 @@
-import com.fasterxml.jackson.core.JsonParser;
-import com.fasterxml.jackson.databind.DeserializationContext;
-import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
-import java.io.IOException;
+import tools.jackson.core.JsonParser;
+import tools.jackson.databind.DeserializationContext;
+import tools.jackson.databind.deser.std.StdDeserializer;

@@ -8,1 +7,1 @@
class MyDeserializer extends StdDeserializer<String> {
    public MyDeserializer() {
-       this(null);
+       this(String.class);
    }
@@ -16,2 +15,1 @@

    @Override
-   public String deserialize(JsonParser p, DeserializationContext ctxt)
-           throws IOException {
+   public String deserialize(JsonParser p, DeserializationContext ctxt) {
        return p.getValueAsString();
```
</TabItem>
</Tabs>

---

##### Example 15
`TypeFactoryDefaultInstanceTest#typeFactoryDefaultInstanceRenamed`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;

class Test {
    JavaType getType() {
        return TypeFactory.defaultInstance().constructType(String.class);
    }
}
```

###### After
```java
import tools.jackson.databind.JavaType;
import tools.jackson.databind.type.TypeFactory;

class Test {
    JavaType getType() {
        return TypeFactory.createDefaultInstance().constructType(String.class);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import com.fasterxml.jackson.databind.JavaType;
-import com.fasterxml.jackson.databind.type.TypeFactory;
+import tools.jackson.databind.JavaType;
+import tools.jackson.databind.type.TypeFactory;

@@ -6,1 +6,1 @@
class Test {
    JavaType getType() {
-       return TypeFactory.defaultInstance().constructType(String.class);
+       return TypeFactory.createDefaultInstance().constructType(String.class);
    }
```
</TabItem>
</Tabs>

---

##### Example 16
`UpgradeJackson_2_3Test#jacksonUpgradeToVersion3`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.core.JsonFactoryBuilder;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.core.TokenStreamFactory;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        TokenStreamFactory factory = new JsonFactoryBuilder().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,3 +2,3 @@
import com.fasterxml.jackson.annotation.JsonProperty;
-import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonFactoryBuilder;
-import com.fasterxml.jackson.databind.ObjectMapper;
+import tools.jackson.core.JsonFactoryBuilder;
+import tools.jackson.databind.ObjectMapper;
+import tools.jackson.core.TokenStreamFactory;

@@ -13,1 +13,1 @@
    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
-       JsonFactory factory = new JsonFactoryBuilder().build();
+       TokenStreamFactory factory = new JsonFactoryBuilder().build();
    }
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-parameter-names</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jdk8</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr310</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.UpgradeJackson_2_3"
  displayName="Migrates from Jackson 2.x to Jackson 3.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.UpgradeJackson_2_3" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
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

</Tabs>
