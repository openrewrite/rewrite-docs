# Building OpenRewrite from source

OpenRewrite is built with [Gradle](https://gradle.org/). It is not typically necessary to manually install Gradle, as invoking the `./gradlew` (Linux and Mac) or `gradlew.bat` (Windows) shell scripts will download the appropriate version of Gradle to your user directory.

OpenRewrite requires several JDK versions to be installed on your system. If you are able to access [Adoptium](https://adoptium.net/), then Gradle will automatically download and install any needed JDKs which you may be missing. If your network configuration or security policies do not permit this, then you must manually install JDK versions 8, 11, and 17.

> **Note** If you are developing on a Mac M1 or M2 you must install the Java 1.8 JDK manually (for example using [SDKMAN!](https://sdkman.io/)), as there is no matching JDK available on Adoptium.

To compile and run tests invoke `./gradlew build`. To publish a snapshot build to your maven local repository, run `./gradlew publishToMavenLocal`.

> **Note** If some of your tests fail with a message like `java.lang.IllegalArgumentException: Invalid value: gpg.format=ssh`, try running `git config commit.gpgsign false` in the `rewrite` directory to disable GPG signing for your commits then re-run the build. This is because there are some tests that use the [JGit](https://projects.eclipse.org/projects/technology.jgit) library to run git commands, which at the time of writing does not support SSH-based signed commits. See [this bug](https://bugs.eclipse.org/bugs/show_bug.cgi?id=581483) for more information.

### Building within Secure/Isolated environments

OpenRewrite typically accesses the Maven Central artifact repository to download necessary dependencies. If organizational security policy or network configuration forbids this, then you can use a Gradle [init script](https://docs.gradle.org/current/userguide/init\_scripts.html) to forcibly reconfigure the OpenRewrite build to use a different repository.

Copy this script to a file named `init.gradle.kts` into the `/.gradle` directory. Modify the `enterpriseRepository` value as appropriate for your situation.

```kotlin
import org.gradle.api.artifacts.repositories.MavenArtifactRepository
import org.gradle.api.internal.artifacts.repositories.DefaultMavenLocalArtifactRepository

// Replace with your organization's artifact repository which mirrors the contents of Maven Central
val mavenCentralMirror = "https://repo.maven.apache.org/maven2/"
// Replace with your organization's artifact repository which mirrors the contents of the Gradle Plugin portal
val gradlePluginPortalMirror = "https://plugins.gradle.org/m2"
// Replace with your organization's artifact repository which mirrors the contents of Gradle's 
// This one is required only for building the rewrite-gradle project
val gradleLibsRelease = "https://repo.gradle.org/gradle/libs-releases-local/"

val allowedRepos = listOf(mavenCentralMirror, gradlePluginPortalMirror, gradleLibsRelease)

// Fill out as appropriate if your repository requires authentication
// Consider using system properties to fill these in for better security
val user: String? = null; 
val pass: String? = null;

fun repoIsAcceptable(repo: ArtifactRepository): Boolean = 
    repo is DefaultMavenLocalArtifactRepository || 
    (repo is MavenArtifactRepository && allowedRepos.find { it == (repo as MavenArtifactRepository).getUrl().toString() } != null)

beforeSettings {
    pluginManagement.repositories {
        all { 
            if (!repoIsAcceptable(this)) {
                remove(this)
            }
        }
        mavenLocal()
        allowedRepos.forEach { enterpriseRepository ->
            maven { 
                url = uri(enterpriseRepository)
                if(user != null && pass != null)  {
                    authentication {
                        create<BasicAuthentication>("basic")
                    }
                    
                    credentials {
                        username = user
                        password = pass
                    }
                }
            }
        }
    }
}
allprojects {
    repositories {
        all { 
            if (!repoIsAcceptable(this)) {
                remove(this)
            }
        }
        mavenLocal()
        allowedRepos.forEach { enterpriseRepository ->
            maven { 
                url = uri(enterpriseRepository)
                if(user != null && pass != null)  {
                    authentication {
                        create<BasicAuthentication>("basic")
                    }
                    
                    credentials {
                        username = user
                        password = pass
                    }
                }
            }
        }
    }
}

```

With this file placed, all of your Gradle builds will prefer to use your corporate repository instead of whatever repositories they would normally be configured with.

