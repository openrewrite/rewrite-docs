# Update70

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Hibernate 7 JFR APIs](./migratetohibernate7jfr.md)

## Recipes

* [Migrate @JdbcType to @JdbcTypeCode](./migratejdbctypetojdbctypecode.md)
* [Migrate `Configurable.configure()` to use `GeneratorCreationContext`](./migrateconfigurabletogeneratorcreationcontext.md)
* [Migrate Hibernate `Integrator#integrate` method](./migrateintegratormethod.md)
* [Migrate LockOptions to direct parameters](./migratelockoptionstodirectparameters.md)
* [Migrate `MetamodelImplementor` to Hibernate 7.0](./migratemetamodelimplementor.md)
* [Migrate NaturalIdLoadAccess method calls](./migratenaturalidloadaccess.md)
* [Migrate NaturalIdMultiLoadAccess method calls](./migratenaturalidmultiloadaccess.md)
* [Migrate Session interface method calls](./migratesessioninterface.md)
* [Migrate Session save/update/delete method calls](./migratesessiontodefertojpa.md)
* [Migrate implicit cascade=PERSIST for @Id and @MapsId associations](./addcascadepersisttoidmappedassociations.md)
* [Migrate `setFlushMode()` to `setQueryFlushMode()`](./migratesetflushmodetosetqueryflushmode.md)
* [Migrate to @TargetEmbeddable](./migratetotargetembeddable.md)
* [Null safe Transaction#getTimeout()](./unboxingtransactiontimeout.md)
* [Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations](./compositeusertypesessionfactoryimplementor.md)
* [Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations](./usertypesharedsessioncontractimplementor.md)
* [Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations](./usertypenullsafegetsharedsessioncontractimplementorrecipe.md)
* [Remove unnecessary cast to `Session` for `SessionFactory.createEntityManager()`](./removeunnecessarycasttosession.md)
* [Replace Session.buildLockRequest with LockOptions](./replacesessionlockrequest.md)
* [Replace hibernate annotations with Jakarta variants](./replacehibernatewithjakartaannotations.md)


