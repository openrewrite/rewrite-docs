---
description: V2migration OpenRewrite recipes.
---

# V2migration

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Change S3 method constructors to fluent builder calls](./s3methodsconstructortofluent.md)
* [Change S3 methods to v2.](./s3methodstov2.md)
* [Change S3 types to v2.](./s3typestov2.md)
* [Change S3EventNotification methods to v2.](./s3eventnotificationmethodstov2.md)
* [Change SDK Exception types from v1 to v2](./changeexceptiontypes.md)
* [Change SDK S3EventNotification types from v1 to v2](./changes3eventnotificationtypes.md)
* [Change SDK TransferManager types from v1 to v2](./changetransfermanagertypes.md)
* [Change SDK core types from v1 to v2](./changesdkcoretypes.md)
* [Change TransferManager simple methods to v2.](./changetransfermanagersimplemethods.md)
* [Change auth related classes from v1 to v2](./changeauthtypes.md)
* [Change config related classes from v1 to v2](./changeconfigtypes.md)
* [Change new objects creation to Builder pattern](./newclasstobuilderpattern.md)
* [Change region related classes](./changeregiontypes.md)
* [Change v1 Maven/Gradle dependencies to v2](./upgradesdkdependencies.md)
* [Change v1 enum getters to v2](./enumgetterstov2.md)
* [Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2](./awssdkjavav1tov2.md)

## Recipes

* [Add AWS SDK for Java v2 S3 Event Notification dependency if needed](./adds3eventnotificationdependency.md)
* [Add AWS SDK for Java v2 S3 Transfer Manager dependency if needed](./addtransfermanagerdependency.md)
* [Add a comment to a method](./addcommenttomethod.md)
* [Add imports and comments to unsupported S3 transfer manager transforms.](./s3tmaddcomments.md)
* [Add imports and comments to unsupported S3 transforms.](./s3addimportsandcomments.md)
* [Change AWS SDK for Java v1 types to v2 equivalents](./changesdktype.md)
* [Convert ByteBuffer to SdkBytes](./bytebuffertosdkbytes.md)
* [Convert Date to Instant](./datetoinstant.md)
* [Convert SdkBytes to ByteBuffer](./sdkbytestobytebuffer.md)
* [Convert V1 setters to V2 toBuilder setters](./setterstobuilderv2.md)
* [Convert the method parameter from numeric type to duration](./numbertoduration.md)
* [Convert v1 AmazonS3URI to v2 S3Uri](./s3uritov2.md)
* [Move HTTP settings from the ClientOverrideConfiguration to ApacheHttpClient for sync and NettyNioAsyncHttpClient for async](./httpsettingstohttpclient.md)
* [S3 Event Notification method to v2](./s3eventnotificationmethodtov2.md)
* [S3 POJOs to V2](./s3pojotov2.md)
* [SDK Exceptions Methods to V2](./sdkexceptiontov2.md)
* [Transfer Manager Methods to V2](./transfermanagermethodstov2.md)
* [Transform 'new' expressions to builders](./newclasstobuilder.md)
* [Transform 'new' expressions to static factory methods](./newclasstostaticfactory.md)
* [V1 Enum Casing to V2](./enumcasingtov2.md)
* [V1 Getter to V2](./v1gettertov2.md)
* [V1 S3 PutObjectRequest, AmazonS3.putObject(PutObjectRequest), and TransferManager.upload(PutObjectRequest) to V2](./s3putobjectrequesttov2.md)
* [V1 S3 non-streaming requests to V2](./s3nonstreamingrequesttov2.md)
* [V1 S3 non-streaming requests to V2](./s3nonstreamingrequesttov2complex.md)
* [V1 S3 streaming requests to V2](./s3streamingrequesttov2.md)
* [V1 S3Object to V2](./s3streamingresponsetov2.md)
* [V1 Setter to V2](./v1settertov2.md)
* [V1 client builder variations to builder()](./v1buildervariationstov2builder.md)
* [Wrap the region string provided on the SDK client builder with Region.of](./wrapsdkclientbuilderregionstr.md)


