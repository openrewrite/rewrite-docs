import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import latestVersions from '@site/src/plugins/latest-versions';

interface RunRecipeProps {
  recipeName: string;
  displayName: string;
  groupId?: string;
  artifactId?: string;
  versionKey?: string;
  requiresConfiguration?: boolean;
  cliOptions?: string;
  showGradle?: boolean;
  showMaven?: boolean;
  hasDataTables?: boolean;
  useFullyQualifiedCliName?: boolean;
  npmPackage?: string;
  pipPackage?: string;
}

export default function RunRecipe({
  recipeName,
  displayName,
  groupId,
  artifactId,
  versionKey,
  requiresConfiguration = false,
  cliOptions = '',
  showGradle = true,
  showMaven = true,
  hasDataTables = false,
  useFullyQualifiedCliName = false,
  npmPackage,
  pipPackage,
}: RunRecipeProps) {
  const { siteConfig } = useDocusaurusContext();
  const isModerneDocs = siteConfig.customFields?.isModerneDocs === true;

  // Replace {{VERSION_...}} placeholders with actual version numbers
  const resolveVersions = (text: string): string => {
    return text.replace(/\{\{(\w+)\}\}/g, (match) => {
      return (latestVersions as Record<string, string>)[match] || match;
    });
  };

  // On Moderne docs, only show CLI tab
  const effectiveShowGradle = isModerneDocs ? false : showGradle;
  const effectiveShowMaven = isModerneDocs ? false : showMaven;

  const hasDependency = !!(groupId && artifactId);
  const activeRecipeName = requiresConfiguration ? wrapperRecipeName(recipeName) : recipeName;
  const cliRecipeName = useFullyQualifiedCliName
    ? recipeName
    : recipeName.substring(recipeName.lastIndexOf('.') + 1);

  const dataTableMavenConfig = hasDataTables ? '<exportDatatables>true</exportDatatables>\n          ' : '';
  const dataTableGradleConfig = hasDataTables ? '\n    setExportDatatables(true)' : '';
  const dataTableCliFlag = hasDataTables ? ' -Drewrite.exportDatatables=true' : '';

  // JavaScript recipes
  if (npmPackage) {
    return (
      <>
        <p>
          In order to run JavaScript recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
          For JavaScript specific configuration instructions, please see our{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript">configuring JavaScript guide</a>.
        </p>
        <p>Once the CLI is installed, you can install this JavaScript recipe package by running the following command:</p>
        <CodeBlock language="shell" title="Install the recipe package">
          {`mod config recipes npm install ${npmPackage}`}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}`}
        </CodeBlock>
      </>
    );
  }

  // Python recipes
  if (pipPackage) {
    return (
      <>
        <p>
          In order to run Python recipes, you will need to use the{' '}
          <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>.
        </p>
        <p>Once the CLI is installed, you can install this Python recipe package by running the following command:</p>
        <CodeBlock language="shell" title="Install the recipe package">
          {`mod config recipes pip install ${pipPackage}`}
        </CodeBlock>
        <p>Then, you can run the recipe via:</p>
        <CodeBlock language="shell" title="Run the recipe">
          {`mod run . --recipe ${recipeName}`}
        </CodeBlock>
      </>
    );
  }

  // Intro text
  const introText = isModerneDocs
    ? 'This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI.'
    : !hasDependency
      ? 'This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.'
      : requiresConfiguration
        ? undefined // Intro text for requiresConfiguration is rendered inline in the markdown before this component
        : `This recipe has no required configuration options. It can be activated by adding a dependency on \`${groupId}:${artifactId}\` in your build file or by running a shell command (in which case no build changes are needed):`;

  // Version string helper
  const version = versionKey ? resolveVersions(`{{${versionKey}}}`) : '';
  const gradlePluginVersion = resolveVersions('{{VERSION_REWRITE_GRADLE_PLUGIN}}');
  const mavenPluginVersion = resolveVersions('{{VERSION_REWRITE_MAVEN_PLUGIN}}');

  // Gradle build.gradle snippet
  const gradleBuild = `plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("${activeRecipeName}")${dataTableGradleConfig}
}

repositories {
    mavenCentral()
}
${hasDependency ? `\ndependencies {\n    rewrite("${groupId}:${artifactId}:${version}")\n}\n` : ''}`;

  // Gradle init script snippet
  const gradleInit = `initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:${gradlePluginVersion}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("${hasDependency ? `${groupId}:${artifactId}:${version}` : 'org.openrewrite:rewrite-java'}")
    }
    rewrite {
        activeRecipe("${activeRecipeName}")${dataTableGradleConfig}
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}`;

  // Maven POM snippet
  const mavenPom = `<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>${mavenPluginVersion}</version>
        <configuration>
          ${dataTableMavenConfig}<activeRecipes>
            <recipe>${activeRecipeName}</recipe>
          </activeRecipes>
        </configuration>${hasDependency ? `
        <dependencies>
          <dependency>
            <groupId>${groupId}</groupId>
            <artifactId>${artifactId}</artifactId>
            <version>${version}</version>
          </dependency>
        </dependencies>` : ''}
      </plugin>
    </plugins>
  </build>
</project>`;

  // Maven CLI snippet
  const mavenCli = `mvn -U org.openrewrite.maven:rewrite-maven-plugin:run${hasDependency ? ` -Drewrite.recipeArtifactCoordinates=${groupId}:${artifactId}:RELEASE` : ''} -Drewrite.activeRecipes=${activeRecipeName}${dataTableCliFlag}`;

  return (
    <>
      {introText && <p>{introText}</p>}
      {requiresConfiguration && !isModerneDocs && hasDependency && (
        <p>
          Now that <code>{wrapperRecipeName(recipeName)}</code> has been defined, activate it and take a dependency on{' '}
          <code>{groupId}:{artifactId}:{version}</code> in your build file:
        </p>
      )}
      {requiresConfiguration && !isModerneDocs && !hasDependency && (
        <p>
          Now that <code>{wrapperRecipeName(recipeName)}</code> has been defined, activate it in your build file:
        </p>
      )}
      <Tabs groupId="projectType">
        {effectiveShowGradle && (
          <TabItem value="gradle" label="Gradle">
            <ol>
              <li>
                Add the following to your <code>build.gradle</code> file:
                <CodeBlock language="groovy" title="build.gradle">
                  {gradleBuild}
                </CodeBlock>
              </li>
              <li>Run <code>gradle rewriteRun</code> to run the recipe.</li>
            </ol>
          </TabItem>
        )}
        {effectiveShowGradle && !requiresConfiguration && (
          <TabItem value="gradle-init-script" label="Gradle init script">
            <ol>
              <li>
                Create a file named <code>init.gradle</code> in the root of your project.
                <CodeBlock language="groovy" title="init.gradle">
                  {gradleInit}
                </CodeBlock>
              </li>
              <li>
                Run the recipe.
                <CodeBlock language="shell" title="shell">
                  gradle --init-script init.gradle rewriteRun
                </CodeBlock>
              </li>
            </ol>
          </TabItem>
        )}
        {effectiveShowMaven && (
          <TabItem value="maven" label="Maven POM">
            <ol>
              <li>
                Add the following to your <code>pom.xml</code> file:
                <CodeBlock language="xml" title="pom.xml">
                  {mavenPom}
                </CodeBlock>
              </li>
              <li>Run <code>mvn rewrite:run</code> to run the recipe.</li>
            </ol>
          </TabItem>
        )}
        {effectiveShowMaven && !requiresConfiguration && (
          <TabItem value="maven-command-line" label="Maven Command Line">
            <p>
              You will need to have <a href="https://maven.apache.org/download.cgi">Maven</a> installed on your machine
              before you can run the following command.
            </p>
            <CodeBlock language="shell" title="shell">
              {mavenCli}
            </CodeBlock>
          </TabItem>
        )}
        <TabItem value="moderne-cli" label="Moderne CLI">
          <p>
            You will need to have configured the{' '}
            <a href="https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro">Moderne CLI</a>{' '}
            on your machine before you can run the following command.
          </p>
          <CodeBlock language="shell" title="shell">
            {`mod run . --recipe ${cliRecipeName}${cliOptions}`}
          </CodeBlock>
          {hasDependency && (
            <>
              <p>If the recipe is not available locally, then you can install it using:</p>
              <CodeBlock language="shell">
                {`mod config recipes jar install ${groupId}:${artifactId}:${version}`}
              </CodeBlock>
            </>
          )}
        </TabItem>
      </Tabs>
    </>
  );
}

function wrapperRecipeName(recipeName: string): string {
  const shortName = recipeName.substring(recipeName.lastIndexOf('.') + 1);
  return `com.yourorg.${shortName}Example`;
}
