---
description: Update70 OpenRewrite recipes.
---

# Update70

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Hibernate 7 JFR APIs (Moderne Edition)](./migratetohibernate7jfr.md)

## Recipes

* [Migrate @JdbcType to @JdbcTypeCode (Moderne Edition)](./migratejdbctypetojdbctypecode.md)
* [Migrate `Configurable.configure()` to use `GeneratorCreationContext` (Moderne Edition)](./migrateconfigurabletogeneratorcreationcontext.md)
* [Migrate Hibernate `Integrator#integrate` method (Moderne Edition)](./migrateintegratormethod.md)
* [Migrate LockOptions to direct parameters (Moderne Edition)](./migratelockoptionstodirectparameters.md)
* [Migrate `MetamodelImplementor` to Hibernate 7.0 (Moderne Edition)](./migratemetamodelimplementor.md)
* [Migrate NaturalIdLoadAccess method calls (Moderne Edition)](./migratenaturalidloadaccess.md)
* [Migrate NaturalIdMultiLoadAccess method calls (Moderne Edition)](./migratenaturalidmultiloadaccess.md)
* [Migrate Session interface method calls (Moderne Edition)](./migratesessioninterface.md)
* [Migrate Session save/update/delete method calls (Moderne Edition)](./migratesessiontodefertojpa.md)
* [Migrate implicit cascade=PERSIST for @Id and @MapsId associations (Moderne Edition)](./addcascadepersisttoidmappedassociations.md)
* [Migrate `setFlushMode()` to `setQueryFlushMode()` (Moderne Edition)](./migratesetflushmodetosetqueryflushmode.md)
* [Migrate to @TargetEmbeddable (Moderne Edition)](./migratetotargetembeddable.md)
* [Null safe Transaction#getTimeout() (Moderne Edition)](./unboxingtransactiontimeout.md)
* [Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations (Moderne Edition)](./compositeusertypesessionfactoryimplementor.md)
* [Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations (Moderne Edition)](./usertypesharedsessioncontractimplementor.md)
* [Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations (Moderne Edition)](./usertypenullsafegetsharedsessioncontractimplementorrecipe.md)
* [Remove unnecessary cast to `Session` for `SessionFactory.createEntityManager()` (Moderne Edition)](./removeunnecessarycasttosession.md)
* [Replace Session.buildLockRequest with LockOptions (Moderne Edition)](./replacesessionlockrequest.md)
* [Replace hibernate annotations with Jakarta variants (Moderne Edition)](./replacehibernatewithjakartaannotations.md)


