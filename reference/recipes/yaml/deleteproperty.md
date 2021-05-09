# Delete property

**org.openrewrite.yaml.DeleteProperty**  
_Delete a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e. as Spring Boot interprets application.yml files._

## Options

* propertyKey: String!
* coalesce: Boolean!
  * Simplify nested map hierarchies into their simplest dot separated property form.

