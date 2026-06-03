---
description: Migration OpenRewrite recipes.
---

# Migration

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Apply Axon Framework 5 common module renames](./axon4toaxon5common.md)
* [Apply Axon Framework 5 event-sourcing module renames](./axon4toaxon5eventsourcing.md)
* [Apply Axon Framework 5 messaging module renames](./axon4toaxon5messaging.md)
* [Apply Axon Framework 5 modelling module renames](./axon4toaxon5modelling.md)
* [Apply Axon Framework 5 test module renames](./axon4toaxon5test.md)
* [Migrate the Axon Framework BOM coordinates](./axon4toaxon5bom.md)
* [Migrate the Dropwizard Metrics extension to Axon Framework 5](./axon4toaxon5metricsdropwizardextension.md)
* [Migrate the Micrometer Metrics extension to Axon Framework 5](./axon4toaxon5metricsmicrometerextension.md)
* [Migrate the Reactor extension to Axon Framework 5](./axon4toaxon5reactorextension.md)
* [Migrate the Spring Boot extension to Axon Framework 5](./axon4toaxon5springbootextension.md)
* [Migrate the Spring extension to Axon Framework 5](./axon4toaxon5springextension.md)
* [Upgrade Kotlin to 2.x for Axon Framework 5](./upgradekotlin.md)
* [Upgrade to free Axon Framework 5](./upgradeaxon4toaxon5.md)

## Recipes

* [Add @AfterEach tearDown() that stops the AxonTestFixture](./addaxontestfixtureteardown.md)
* [Add @Command to command payload classes](./addcommandannotation.md)
* [Add @EntityCreator to no-arg constructors of event-sourced entities](./addentitycreatorannotation.md)
* [Add @Event to event payload classes](./addeventannotation.md)
* [Add @EventTag to the aggregate-identifier field of event payload classes](./addeventtagannotation.md)
* [Add explicit tagKey and idType to @EventSourced](./configureeventsourcedannotation.md)
* [Annotate obsolete `axon.eventhandling.processors.&lt;group&gt;.sequencing-policy` properties](./annotateobsoletesequencingpolicyproperty.md)
* [Apply Axon Framework 5 serialization → conversion rename](./axon4toaxon5conversion.md)
* [Convert @CommandHandler constructors to static handle methods](./convertcommandhandlerconstructortostaticmethod.md)
* [Convert Kotlin @CommandHandler constructors to a companion-object handle method](./convertcommandhandlerconstructortocompanionobject.md)
* [Migrate AggregateTestFixture calls to the AxonTestFixture fluent API](./migrateaxontestfixturefluentapi.md)
* [Migrate AggregateTestFixture setup to AxonTestFixture.with(EventSourcingConfigurer...)](./migrateaggregatetestfixturesetup.md)
* [Migrate Kotlin DSL `mavenBom(...)` import (with property indirection)](./migratekotlindslbomimport.md)
* [Migrate MessageHandlerInterceptor / MessageDispatchInterceptor signatures to AF5](./migratemessageinterceptorsignatures.md)
* [Migrate SequencingPolicy lambdas to the AF5 two-arg, Optional-returning shape](./migratesequencingpolicylambda.md)
* [Migrate SnapshotTriggerDefinition @Bean to @Snapshotting](./migratesnapshottriggerdefinitiontoannotation.md)
* [Migrate the AMQP extension to Axon Framework 5 (placeholder)](./axon4toaxon5amqpextension.md)
* [Migrate the CDI extension to Axon Framework 5 (placeholder)](./axon4toaxon5cdiextension.md)
* [Migrate the JGroups extension to Axon Framework 5 (placeholder)](./axon4toaxon5jgroupsextension.md)
* [Migrate the Kafka extension to Axon Framework 5 (placeholder)](./axon4toaxon5kafkaextension.md)
* [Migrate the Mongo extension to Axon Framework 5 (placeholder)](./axon4toaxon5mongoextension.md)
* [Migrate the Multitenancy extension to Axon Framework 5 (placeholder)](./axon4toaxon5multitenancyextension.md)
* [Migrate the OpenTelemetry tracing extension to Axon Framework 5 (placeholder)](./axon4toaxon5tracingopentelemetryextension.md)
* [Migrate the OpenTracing tracing extension to Axon Framework 5 (placeholder)](./axon4toaxon5tracingopentracingextension.md)
* [Migrate the Spring Boot Actuator extension to Axon Framework 5](./axon4toaxon5springbootactuatorextension.md)
* [Migrate the Spring Cloud extension to Axon Framework 5 (placeholder)](./axon4toaxon5springcloudextension.md)
* [Remove the unported axon-spring-aot extension](./axon4toaxon5springaotextension.md)
* [Remove type arguments from a specific type](./removetypearguments.md)
* [Replace AggregateLifecycle.apply(...) with EventAppender.append(...)](./replaceaggregatelifecycleapply.md)
* [Replace class-level CommandGateway with method-parameter CommandDispatcher in @EventHandler methods](./migratecommandgatewayineventhandler.md)
* [Unwrap ResponseTypes wrappers on AF5-shape QueryGateway.query(...) calls](./axon4toaxon5queryresponsetypes.md)
* [Upgrade Java compiler target for Axon Framework 5](./upgradejava.md)


