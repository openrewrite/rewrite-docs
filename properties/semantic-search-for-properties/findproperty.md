---
description: Find the first matching property key in a Properties file by name
---

# FindProperty

## Java Definition

```java
String propertyFileContents = "distributionDir=USER_HOME\n" + 
    "distributionUrl=https\\\\://example.org/files/example-bin.zip";
Properties.File props = new PropertiesParser().parse(propertyFileContents).get(0);

FindProperty fp = new FindProperty("distributionDir");
Properties.Entry entry = fp.visit(props);
```

`FindProperties` takes a single parameter, `key`, with the key to search for. Applied to the following example, it locates the `distributionDir=USER_HOME` entry.

```text
distributionDir=USER_HOME
distributionUrl=https\://services.example.org/distributions/example-bin.zip
```

