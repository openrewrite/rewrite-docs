# Insert YAML snippet

**org.openrewrite.yaml.InsertYaml**  
_Insert a YAML snippet at a given key_

### Options

* key: String!
  * XPath expression used to find matching keys.
* yaml: String!
  * The YAML snippet to insert. The snippet will be indented to match the style of its surroundings.

