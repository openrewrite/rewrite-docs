#!/usr/bin/env python3
"""
Script to create curated "common" versions of large recipe categories.
Selects the most practical and commonly used recipes (30-75 each).
"""

import csv
from pathlib import Path

def read_recipes(file_path):
    """Read recipes from a CSV file."""
    recipes = []
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            recipes.append(row)
    return recipes

def write_recipes(file_path, recipes):
    """Write recipes to a CSV file."""
    with open(file_path, 'w', encoding='utf-8', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Fully Qualified Recipe Name', 'Recipe Name', 'Description'])
        for recipe in recipes:
            writer.writerow([
                recipe['Fully Qualified Recipe Name'],
                recipe['Recipe Name'],
                recipe['Description']
            ])

def curate_testing(recipes):
    """Select most useful testing recipes - prioritize broad recipes over specific variations."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Skip overly specific sub-recipes (inner classes with $)
        if '$' in recipe_id:
            continue

        # Exclude overly specific assertion patterns for individual numeric types
        if any(pattern in recipe_name for pattern in [
            'Byte Assert', 'Integer Assert', 'Long Assert', 'Float Assert',
            'Double Assert', 'Short Assert', 'BigInteger Assert', 'BigDecimal Assert'
        ]):
            continue

        # Prioritize broad testing migrations and frameworks
        is_useful = (
            # JUnit migrations
            'junit' in recipe_id.lower() and any(keyword in recipe_name.lower() for keyword in [
                'junit 5', 'junit5', 'migration', 'upgrade', 'best practices'
            ]) or
            # Mockito
            'mockito' in recipe_id.lower() or
            # AssertJ (but only high-level)
            ('assertj' in recipe_id.lower() and 'adopt' in recipe_name.lower() and
             not any(num in recipe_name for num in ['Byte', 'Integer', 'Long', 'Float', 'Double'])) or
            # TestNG
            'testng' in recipe_id.lower() or
            # General testing best practices
            any(keyword in recipe_name.lower() for keyword in [
                'test', 'assert', 'mock', 'verify', 'cleanup'
            ]) and 'org.openrewrite.java.testing' in recipe_id
        )

        if is_useful and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 60:
                break

    return curated[:60]

def curate_framework_migrations(recipes):
    """Select most useful framework migration recipes - prioritize framework diversity over multiple versions."""
    from collections import defaultdict

    # Group recipes by framework
    framework_recipes = defaultdict(list)

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Identify the framework
        framework = None
        if 'kafka' in recipe_id.lower() or 'kafka' in recipe_name.lower():
            framework = 'kafka'
        elif 'hibernate' in recipe_id.lower() or 'hibernate' in recipe_name.lower():
            framework = 'hibernate'
        elif 'quarkus' in recipe_id.lower() or 'quarkus' in recipe_name.lower():
            framework = 'quarkus'
        elif 'elasticsearch' in recipe_id.lower() or 'elasticsearch' in recipe_name.lower():
            framework = 'elasticsearch'
        elif 'spring.boot' in recipe_id.lower() or ('spring boot' in recipe_name.lower() and 'upgrade' in recipe_name.lower()):
            framework = 'spring-boot'
        elif 'spring.security' in recipe_id.lower() or 'spring security' in recipe_name.lower():
            framework = 'spring-security'
        elif 'spring.cloud' in recipe_id.lower() or 'spring cloud' in recipe_name.lower():
            framework = 'spring-cloud'
        elif 'spring.data' in recipe_id.lower() or 'spring data' in recipe_name.lower():
            framework = 'spring-data'
        elif 'jakarta' in recipe_id.lower() or 'javax' in recipe_id.lower():
            framework = 'jakarta-ee'
        elif 'micronaut' in recipe_id.lower() or 'micronaut' in recipe_name.lower():
            framework = 'micronaut'
        elif 'camel' in recipe_id.lower():
            framework = 'camel'
        elif 'vertx' in recipe_id.lower() or 'vert.x' in recipe_name.lower():
            framework = 'vertx'
        elif 'dropwizard' in recipe_id.lower():
            framework = 'dropwizard'
        elif 'guava' in recipe_id.lower():
            framework = 'guava'
        elif 'junit' in recipe_id.lower() or 'junit' in recipe_name.lower():
            framework = 'junit'

        # Only include migration/upgrade recipes
        if framework and ('MigrateTo' in recipe_id or 'Upgrade' in recipe_id or
                         'Migrate' in recipe_name or 'Upgrade' in recipe_name):
            framework_recipes[framework].append(recipe)

    # Select top 1-2 versions per framework, prioritizing latest versions
    curated = []
    seen_names = set()

    # Sort frameworks by recipe count to ensure we get diverse coverage
    for framework in sorted(framework_recipes.keys()):
        framework_list = framework_recipes[framework]

        # For each framework, prefer recipes with higher version numbers (assumed to be more recent)
        # and avoid duplicate recipe names
        added_for_framework = 0
        max_per_framework = 2  # Keep at most 2 versions per framework

        for recipe in framework_list:
            recipe_name = recipe['Recipe Name']
            if recipe_name not in seen_names and added_for_framework < max_per_framework:
                curated.append(recipe)
                seen_names.add(recipe_name)
                added_for_framework += 1

    return curated[:50]

def curate_dependencies(recipes):
    """Select most useful dependency management recipes - prefer Maven+Gradle over build-tool-specific."""
    curated = []
    seen = set()

    # First pass: Prioritize org.openrewrite.java.dependencies (works for both Maven and Gradle)
    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Exclude C# and DevCenter recipes
        if 'csharp' in recipe_id.lower() or 'devcenter' in recipe_id.lower():
            continue

        # Prioritize org.openrewrite.java.dependencies (works for both Maven and Gradle)
        if 'org.openrewrite.java.dependencies' in recipe_id and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

    # Second pass: Add common Maven operations
    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        if 'csharp' in recipe_id.lower() or 'devcenter' in recipe_id.lower():
            continue

        # Include Maven recipes for common operations
        if 'org.openrewrite.maven' in recipe_id and recipe_name not in seen:
            is_common_maven = any(keyword in recipe_name for keyword in [
                'Change dependency', 'Add dependency', 'Remove dependency',
                'Upgrade dependency', 'parent', 'BOM', 'managed', 'plugin'
            ])

            if is_common_maven:
                curated.append(recipe)
                seen.add(recipe_name)

                if len(curated) >= 35:
                    break

    # Third pass: Add common Gradle operations (but fewer since Maven is covered)
    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        if 'csharp' in recipe_id.lower() or 'devcenter' in recipe_id.lower():
            continue

        # Include Gradle recipes for operations not covered by Maven
        if 'org.openrewrite.gradle' in recipe_id and recipe_name not in seen:
            is_essential_gradle = any(keyword in recipe_name for keyword in [
                'Change dependency', 'Add dependency', 'Remove dependency',
                'Upgrade version', 'wrapper', 'plugin'
            ])

            if is_essential_gradle:
                curated.append(recipe)
                seen.add(recipe_name)

                if len(curated) >= 50:
                    break

    return curated[:50]

def curate_xml_yaml_json(recipes):
    """Select most useful configuration file recipes."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Include recipes from core packages for YAML, XML, JSON, Properties, TOML
        is_config_operation = (
            'org.openrewrite.yaml' in recipe_id or
            'org.openrewrite.xml' in recipe_id or
            'org.openrewrite.json' in recipe_id or
            'org.openrewrite.properties' in recipe_id or
            'org.openrewrite.toml' in recipe_id
        )

        # Also include common operations by name
        has_config_keywords = any(keyword in recipe_name for keyword in [
            'YAML', 'XML', 'JSON', 'Properties', 'TOML', 'property', 'tag',
            'attribute', 'value', 'file'
        ])

        if (is_config_operation or has_config_keywords) and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 50:
                break

    return curated[:50]

def curate_static_analysis(recipes):
    """Select most useful static analysis recipes."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Include Find* and Search* recipes from core packages
        is_search_recipe = (
            recipe_name.startswith('Find') or
            recipe_name.startswith('Search') or
            'org.openrewrite.search' in recipe_id or
            'org.openrewrite.analysis' in recipe_id
        )

        # Prioritize security-related searches
        is_security = any(keyword in recipe_name.lower() for keyword in [
            'security', 'vulnerability', 'injection', 'xss', 'xxe'
        ])

        if (is_search_recipe or is_security) and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 50:
                break

    return curated[:50]

def curate_spring_boot(recipes):
    """Select most useful Spring Boot recipes."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Prioritize major upgrade recipes and common operations
        is_major_upgrade = any(version in recipe_name for version in [
            '3.5', '3.4', '3.3', '3.2', '3.1', '3.0', '2.7'
        ])

        is_common_operation = any(keyword in recipe_name for keyword in [
            'Upgrade', 'Migrate', 'Best Practices', 'Properties',
            'Actuator', 'Configuration', 'Deprecat'
        ])

        # Avoid overly specific internal changes
        is_specific = any(keyword in recipe_name.lower() for keyword in [
            'replace', 'remove', 'use', 'comment', 'add @valid'
        ])

        if (is_major_upgrade or is_common_operation) and not is_specific and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 60:
                break

    return curated[:60]

def curate_security(recipes):
    """Select most useful security recipes."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Prioritize high-impact security issues
        is_high_impact = any(keyword in recipe_name.lower() for keyword in [
            'sql injection', 'xss', 'xxe', 'command injection',
            'path traversal', 'ldap injection', 'vulnerability',
            'unencrypted', 'insecure', 'csrf', 'authentication'
        ])

        # Include general security finding recipes
        is_finding_recipe = recipe_name.startswith('Find') and any(keyword in recipe_name.lower() for keyword in [
            'security', 'vulnerability', 'injection', 'exposure'
        ])

        # Include OWASP related
        is_owasp = 'owasp' in recipe_id.lower() or 'owasp' in recipe_name.lower()

        if (is_high_impact or is_finding_recipe or is_owasp) and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 60:
                break

    return curated[:60]

def curate_logging(recipes):
    """Select most useful logging recipes."""
    curated = []
    seen = set()

    for recipe in recipes:
        recipe_id = recipe['Fully Qualified Recipe Name']
        recipe_name = recipe['Recipe Name']

        # Prioritize common logging operations
        is_common_logging = any(keyword in recipe_name for keyword in [
            'Parameterize', 'SLF4J', 'Log4j', 'Logback', 'System.out',
            'System.err', 'printStackTrace', 'Containerize', 'Migration',
            'logger', 'Logger'
        ])

        # Exclude overly specific internal operations
        is_specific = 'internal' in recipe_name.lower()

        if is_common_logging and not is_specific and recipe_name not in seen:
            curated.append(recipe)
            seen.add(recipe_name)

            if len(curated) >= 50:
                break

    return curated[:50]

def main():
    script_dir = Path(__file__).parent
    references_dir = script_dir.parent / 'references'

    # Categories to curate (those with >150 recipes or too large to be useful)
    categories = {
        'testing': curate_testing,
        'framework-migrations': curate_framework_migrations,
        'dependencies': curate_dependencies,
        'xml-yaml-json': curate_xml_yaml_json,
        'static-analysis': curate_static_analysis,
        'spring-boot': curate_spring_boot,
        'security': curate_security,
        'logging': curate_logging,
    }

    print("Creating curated 'common' versions of large categories...\n")

    for category, curate_func in categories.items():
        input_file = references_dir / f'recipes-{category}.csv'
        output_file = references_dir / f'recipes-{category}-common.csv'

        if not input_file.exists():
            print(f"Warning: {input_file.name} not found, skipping...")
            continue

        # Read all recipes
        all_recipes = read_recipes(input_file)

        # Curate selection
        curated_recipes = curate_func(all_recipes)

        # Write curated file
        write_recipes(output_file, curated_recipes)

        print(f"{category:25} {len(curated_recipes):3} curated from {len(all_recipes):4} total -> {output_file.name}")

    print("\nCurated files created successfully!")

if __name__ == '__main__':
    main()
