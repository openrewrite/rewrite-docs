---
description: Spring Data OpenRewrite recipes.
---

# Spring Data

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Spring Data 2.3](./upgradespringdata_2_3.md)
* [Migrate to Spring Data 3.0](./upgradespringdata_3_0.md)
* [Migrate to Spring Data JPA 2.5](./upgradespringdata_2_5.md)
* [Migrate to Spring Data JPA 2.7](./upgradespringdata_2_7.md)
* [Migrate to Spring Data JPA 3.4](./upgradespringdata_3_4.md)

## Recipes

* [Add `CrudRepository` to interfaces extending `PagingAndSortingRepository`](./migratepagingandsortingrepository.md)
* [Convert `JdbcTemplate.queryForLong(..)` to `queryForObject(..)`](./jdbctemplatequeryforlongmigration.md)
* [Make AuditorAware.getCurrentAuditor return `Optional`](./migrateauditorawaretooptional.md)
* [Replace `@Query` annotation by `@NativeQuery` when possible](./migratequerytonativequery.md)
* [Replace `RepositoryRestConfigurerAdapter` with `RepositoryRestConfigurer`](./migraterepositoryrestconfigureradapter.md)
* [Use `JpaSort.of(..)`](./migratejpasort.md)
* [Use `QuerydslPredicateExecutor&lt;T&gt;`](./migratequerydsljparepository.md)
* [Use TLS for JDBC connection strings](./usetlsjdbcconnectionstring.md)
* [Use `new SimpleMongoClientDbFactory(String)`](./refactorsimplemongodbfactory.md)


