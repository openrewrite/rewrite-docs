# OpenRewrite licensing

The core OpenRewrite framework is fully open and Apache licensed, and it will continue to be going forward. If open source software (OSS) authors want to provide software migrations to their users as pure OSS, they can.

OpenRewrite recipes that have significant contributions from Moderne and third-party contributors will be available with the [Moderne Source Available License](https://docs.moderne.io/administrator-documentation/licensing/moderne-source-available-license/). This license precludes others from deriving significant commercial value from OpenRewrite without contributing to the community. Individual organizations can consume and apply these recipes to their source code, but the recipes cannot be put into commercial products or be re-sold.

Moderne and others through partnerships with Moderne can offer commercial recipes.

## Licensing types

The OpenRewrite ecosystem is a marketplace of both free and proprietary recipes. The types of licensing can include:

### Apache License Version 2.0

Core OpenRewrite technology and language libraries in general are fully open sourced under the Apache license. This includes the entirety of [openrewrite/rewrite](https://github.com/openrewrite/rewrite), including rewrite-core and many of the original language bindings (Java, Groovy, Kotlin, XML, Properties, YAML, Terraform, etc.). It also includes the building-block core recipes like `ChangeMethodName`, `ChangeType`, etc. and recipe repositories that are primarily committed to by third parties. This means that framework/library authors can supply OSS migrations to their consumers.

### Moderne Source Available License

Beyond the fully open license, additional OpenRewrite software and recipes are available broadly for users under a [source available license](https://docs.moderne.io/administrator-documentation/licensing/moderne-source-available-license/). The Maven and Gradle plugins are also source available. Because this license allows the right to “use, copy, distribute, make available, and prepare derivative works of the software,” it is possible for individual companies to customize recipes for their needs, such as tailoring recipes to internal APIs or removing optional idiomatic changes. 

**There are two primary limitations under this license:**

* The software may not be commercialized or provided to others as a managed service.
* No user may remove or obscure any licensing, copyright, or other notices.

### Moderne Proprietary License

There is a group of OpenRewrite recipes that are created by Moderne specifically for multi-repo code analysis and transformation on our platform, including those designed for large-scale impact analysis and security remediation, as well as those that leverage AI tool calling. These recipes are under the [Moderne Proprietary License](https://docs.moderne.io/administrator-documentation/licensing/overview).

## FAQ

### Is OpenRewrite open source software (OSS)?

**Yes!** OpenRewrite is OSS. Core OpenRewrite technology and language libraries in general are fully open sourced under the Apache license. This includes the entirety of openrewrite/rewrite, including rewrite-core and many of the original language bindings (Java, Groovy, Kotlin, XML, Properties, YAML, Terraform, etc.). In addition, building-block recipes, and those created by third parties are fully open sourced.

### Can end users and individual companies use source available recipes on private code?

Yes. Recipes are available to individual users and companies to consume and apply on their own code both under the Apache License Version 2.0 License and the [Moderne Source Available License](https://docs.moderne.io/administrator-documentation/licensing/moderne-source-available-license/).

The foundational purpose of OpenRewrite is to enable developers to more easily update, upgrade, and improve their code with the help of recipes developed by OSS maintainers and the community. 

### How does this impact those companies that are selling OpenRewrite recipes as part of their solutions?

Source available recipes cannot be packaged for commercial sale. However, this opens the door to partnership negotiation, balancing the interests of both third parties and Moderne as the primary sponsor and contributor to the OpenRewrite project.

## References

* [OpenRewrite licensing by repository](./repository-licensing.md)
* [Moderne Proprietary License](https://docs.moderne.io/administrator-documentation/licensing/overview)
* [Moderne Source Available License](https://docs.moderne.io/administrator-documentation/licensing/moderne-source-available-license/)
