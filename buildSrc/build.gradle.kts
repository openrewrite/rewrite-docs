plugins {
    `embedded-kotlin`
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(gradleApi())
    testImplementation("org.junit.jupiter:junit-jupiter:6.1.3")
    testImplementation("org.assertj:assertj-core:3.27.7")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.test {
    useJUnitPlatform()
}
