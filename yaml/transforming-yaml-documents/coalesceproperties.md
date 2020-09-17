# CoalesceProperties

### Java Definition

`CoalesceProperties` simplifies nested map hierarchies into their simplest form.

```java
Iterable<Yaml.Documents> yamls;

CoalesceProperties cp = new CoalesceProperties();

Collection<Change> changes = new Refactor().visit(cp).fix(yamls);
```

### Example

Before:

```text
management:
  metrics:
    enable.process.files: true
   endpoint:
     health:
       show-components: always
       show-details: always
```

After:

```text
management:
  metrics.enable.process.files: true
  endpoint.health:
    show-components: always
    show-details: always
```

