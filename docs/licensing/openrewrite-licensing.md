# Licensing

The core OpenRewrite framework is fully open and Apache licensed, and it will continue to be going forward. If open source software (OSS) authors want to provide software migrations to their users as pure OSS, they can.

Recipes modules with significant community involvement are fully Apache Licensed as well. OpenRewrite recipes that have significant contributions from Moderne and third-party contributors will be available with the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). This license precludes others from deriving significant commercial value from OpenRewrite without contributing to the community. Individual organizations can consume and apply these recipes to their source code, but the recipes cannot be put into commercial products or be re-sold.

Moderne and others through partnerships with Moderne can offer commercial recipes.

## Licensing types

The OpenRewrite ecosystem is a marketplace of both free and proprietary recipes. The types of licensing can include:

### Apache License Version 2.0

Core OpenRewrite technology and language libraries in general are fully open sourced under the [Apache license](https://www.apache.org/licenses/LICENSE-2.0). This includes most of [openrewrite/rewrite](https://github.com/openrewrite/rewrite), including rewrite-core and the original language bindings (Java, Groovy, Kotlin, XML, Properties, YAML, HCL, etc.). The newer language modules in that repository, such as those for JavaScript and TypeScript, C#, Python, Go, Ruby, Scala, and Android, are under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license) instead. It also includes the building-block core recipes like `ChangeMethodName`, `ChangeType`, etc. and recipe repositories that are primarily committed to by third parties. Lastly, this includes the Maven and Gradle plugins themselves. This means that framework/library authors can supply OSS migrations to their consumers.

### Moderne Source Available License

Beyond the fully open license, additional OpenRewrite software and recipes are available broadly for users under a [source available license](https://docs.moderne.io/licensing/moderne-source-available-license). Because this license allows the right to “use, copy, distribute, make available, and prepare derivative works of the software,” it is possible for individual companies to customize recipes for their needs, such as tailoring recipes to internal APIs or removing optional idiomatic changes. 

**There are two primary limitations under this license:**

* The software may not be commercialized or provided to others as a managed service.
* No user may remove or obscure any licensing, copyright, or other notices.

In other words, you can't take these recipes and sell them to others and you can't provide consulting/professional services where you charge people and run these recipes.

That being said, if you work at a company and you want to run these recipes on your own code you are free to do so.

### Moderne Proprietary License

Moderne's proprietary recipes pick up where the open-source and source-available recipes leave off - addressing the latest and most pressing needs of enterprise codebases. These recipes fall into five groups:

* **More languages:** Migrate and modernize JavaScript and TypeScript, C# and .NET, Python, Go, Kotlin, Scala, and COBOL, along with infrastructure code such as Terraform and Kubernetes.
* **The newest Java frameworks:** Upgrade to the latest Spring Boot, Spring Framework, and Hibernate releases, or migrate away from older frameworks and application servers.
* **Security remediation:** Fix [OWASP Top Ten](https://owasp.org/www-project-top-ten/) vulnerabilities, remove hardcoded secrets, upgrade vulnerable dependencies, and prepare your cryptography for the post-quantum era.
* **Context for AI coding agents:** Generate verified context about your architecture, dependencies, tests, and code quality with [Moderne Prethink](https://docs.moderne.io/user-documentation/agent-tools/prethink), so agents read facts instead of guessing.
* **Analysis at scale:** Trace data flow and measure impact across every repository in an organization, with verification that changed code still compiles.

These proprietary recipes are available to Moderne customers under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview). The [Moderne recipes](../reference/moderne-recipes) page lists every recipe in the set.

## FAQ

### Is OpenRewrite open source software (OSS)?

**Yes!** OpenRewrite is OSS. Core OpenRewrite technology and language libraries in general are fully open sourced under the Apache license. This includes most of openrewrite/rewrite, including rewrite-core and the original language bindings (Java, Groovy, Kotlin, XML, Properties, YAML, HCL, etc.). The newer language modules in that repository are source available. In addition, building-block recipes, and those created by third parties are fully open sourced.

### Can end users and individual companies use source available recipes on private code?

Yes. Recipes are available to individual users and companies to consume and apply on their own code both under the Apache License Version 2.0 License and the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

The foundational purpose of OpenRewrite is to enable developers to more easily update, upgrade, and improve their code with the help of recipes developed by OSS maintainers and the community. 

### Which recipes can open-source projects run?

Open-source projects can run the Apache-licensed recipes and the Moderne Source Available recipes on their own code. They can do so with the OpenRewrite Maven and Gradle plugins or with the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro), which does not require a license for open-source repositories.

### How does this impact those companies that are selling OpenRewrite recipes as part of their solutions?

Source available recipes cannot be packaged for commercial sale. These recipes also can't be used by consultancies who want to take the recipes and sell the results to customers.

Think of it like a concert ticket. You can buy tickets and attend the concert, but you can't resell them for profit.

That being said, it's possible for places to reach out and negotiate this – where we can balance the interests of third parties and Moderne as the primary sponsor and contributor to the OpenRewrite project.

## References

* [OpenRewrite licensing by repository](../reference/latest-versions-of-every-openrewrite-module.md)
* [Moderne Proprietary License](https://docs.moderne.io/licensing/overview)
* [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license)
