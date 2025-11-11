#!/usr/bin/env python3
"""
Script to categorize recipes from recipes-all.csv into separate category files.
"""

import csv
import os
from pathlib import Path

# Define categories and their matching patterns (keywords in id, name, or description)
CATEGORIES = {
    'java-basic': {
        'keywords': [
            'ChangeType', 'ChangeMethodName', 'ChangePackage', 'AddAnnotation', 'RemoveAnnotation',
            'ChangeMethodAccessLevel', 'AddImport', 'RemoveImport', 'AddMethodParameter',
            'DeleteMethodArgument', 'ReplaceConstant', 'ReplaceStringLiteral',
            'org.openrewrite.java.ChangeType', 'org.openrewrite.java.ChangeMethod',
            'org.openrewrite.java.ChangePackage', 'org.openrewrite.java.AddComment',
            'org.openrewrite.java.ReplaceAnnotation', 'org.openrewrite.java.ShortenFullyQualifiedTypeReferences'
        ],
        'description': 'Basic Java refactoring operations for types, methods, packages, and annotations'
    },
    'spring-boot': {
        'keywords': [
            'spring.boot', 'SpringBoot', 'spring-boot', 'UpgradeSpringBoot'
        ],
        'description': 'Spring Boot migrations, upgrades, and best practices'
    },
    'security': {
        'keywords': [
            'security', 'vulnerability', 'injection', 'XSS', 'XXE', 'SQL injection',
            'command injection', 'path traversal', 'LDAP injection', 'unencrypted',
            'FindSqlInjection', 'FindXss', 'FindCommandInjection', 'OWASP'
        ],
        'description': 'Security vulnerability detection and fixes'
    },
    'testing': {
        'keywords': [
            'junit', 'JUnit', 'test', 'Test', 'mockito', 'Mockito', 'assertj', 'AssertJ',
            '@Test', 'TestNG'
        ],
        'description': 'Testing framework migrations and best practices'
    },
    'dependencies': {
        'keywords': [
            'maven', 'Maven', 'gradle', 'Gradle', 'dependency', 'Dependency',
            'UpgradeDependency', 'ChangeDependency', 'AddDependency', 'RemoveDependency',
            'pom.xml', 'build.gradle'
        ],
        'description': 'Maven and Gradle dependency management'
    },
    'logging': {
        'keywords': [
            'log4j', 'Log4j', 'logback', 'Logback', 'slf4j', 'SLF4J', 'logging',
            'Logging', 'logger', 'Logger'
        ],
        'description': 'Logging framework configuration and migrations'
    },
    'file-operations': {
        'keywords': [
            'CreateFile', 'DeleteFile', 'MoveFile', 'RenameFile', 'FindAndReplace',
            'ChangeText', 'AppendToTextFile', 'CreateTextFile', 'org.openrewrite.text',
            'org.openrewrite.DeleteSourceFiles', 'org.openrewrite.MoveFile'
        ],
        'description': 'File and text manipulation operations'
    },
    'framework-migrations': {
        'keywords': [
            'MigrateTo', 'UpgradeTo', 'Kafka', 'Hibernate', 'Elasticsearch', 'Quarkus',
            'Jakarta', 'javax', 'migration'
        ],
        'description': 'Major framework and library migrations'
    },
    'xml-yaml-json': {
        'keywords': [
            'xml', 'XML', 'yaml', 'YAML', 'json', 'JSON', 'properties', 'Properties',
            'ChangePropertyValue', 'MergeYaml', 'CreateXmlFile'
        ],
        'description': 'Configuration file operations for XML, YAML, JSON, and properties files'
    },
    'static-analysis': {
        'keywords': [
            'Find', 'Search', 'Analysis', 'complexity', 'unused', 'unreachable',
            'dead code', 'null pointer', 'FindNullPointer', 'FindUnused'
        ],
        'description': 'Code analysis and search recipes for finding patterns and issues'
    }
}

def matches_category(recipe_id, recipe_name, recipe_desc, keywords):
    """Check if a recipe matches any of the keywords for a category."""
    text_to_search = f"{recipe_id} {recipe_name} {recipe_desc}".lower()
    return any(keyword.lower() in text_to_search for keyword in keywords)

def main():
    script_dir = Path(__file__).parent
    references_dir = script_dir.parent / 'references'
    input_file = references_dir / 'recipes-all.csv'

    # Dictionary to store recipes for each category
    categorized_recipes = {cat: [] for cat in CATEGORIES.keys()}

    print(f"Reading recipes from {input_file}...")

    # Read and categorize recipes
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            recipe_id = row['id']
            recipe_name = row['name']
            recipe_desc = row['description']

            # Skip C#, DevCenter, COBOL, and AWS SDK migration recipes globally
            if 'csharp' in recipe_id.lower() or '.csharp.' in recipe_id.lower():
                continue
            if 'io.moderne.devcenter' in recipe_id.lower():
                continue
            if 'cobol' in recipe_id.lower():
                continue
            if 'software.amazon.awssdk' in recipe_id.lower():
                continue

            # Check each category
            for category, config in CATEGORIES.items():
                if matches_category(recipe_id, recipe_name, recipe_desc, config['keywords']):
                    categorized_recipes[category].append({
                        'id': recipe_id,
                        'name': recipe_name,
                        'description': recipe_desc
                    })

    # Write categorized CSV files
    for category, recipes in categorized_recipes.items():
        if recipes:
            output_file = references_dir / f'recipes-{category}.csv'
            print(f"Writing {len(recipes)} recipes to {output_file.name}...")

            with open(output_file, 'w', encoding='utf-8', newline='') as f:
                writer = csv.writer(f)
                writer.writerow(['Fully Qualified Recipe Name', 'Recipe Name', 'Description'])

                for recipe in recipes:
                    writer.writerow([recipe['id'], recipe['name'], recipe['description']])

    # Print summary
    print("\n=== Summary ===")
    for category, recipes in sorted(categorized_recipes.items(), key=lambda x: len(x[1]), reverse=True):
        print(f"{category:25} {len(recipes):4} recipes - {CATEGORIES[category]['description']}")

if __name__ == '__main__':
    main()
