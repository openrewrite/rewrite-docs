# Checkstyle

### Configuration Options

Every Checkstyle visitor has the same set of configuration options. Either `config` or `configFile` must be provided.

* `config` - A string representation of checkstyle XML configuration \(the full document, including the check's configuration\).
* `configFile` - A checkstyle XML configuration file on disk.
* `properties` - A map of string keys and object values that can be evaluated in the Checkstyle configuration file with syntax like `${my.prop}`.
* `suppressions` - A `com.puppycrawl.tools.checkstyle.api.FilterSet` instance that can be used to suppress one or more checks \(including this one\).

### Example Checkstyle Configuration File

Below is a complete example of a Checkstyle configuration file that configures only this recipe.

```markup
<?xml version="1.0"?>
<!DOCTYPE module PUBLIC
  "-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"
  "https://checkstyle.org/dtds/configuration_1_3.dtd">
<module name="Checker">
  <module name="TreeWalker">
    <module name="EmptyBlock">
      <property name="option" value="text"/>
      <property name="tokens" value="LITERAL_TRY"/>
    </module>
  </module>
</module> 
```

