# Change property key

**org.openrewrite.yaml.ChangePropertyKey**  
_Change a YAML property key leaving the value intact. Nested YAML mappings are interpreted as dot separated property names, i.e. as Spring Boot interprets application.yml files._

### Options

* oldPropertyKey: String!
* newPropertyKey: String!

