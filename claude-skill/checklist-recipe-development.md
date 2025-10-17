# OpenRewrite Recipe Development Checklist

Use this checklist to ensure you've covered all important aspects of recipe development.

## Planning Phase

### Recipe Type Selection
- [ ] Determined if recipe can be declarative (preferred)
- [ ] Evaluated if Refaster template would work for simple replacements
- [ ] Confirmed imperative recipe is necessary for complex logic
- [ ] Identified which LST elements need to be visited
- [ ] Reviewed existing recipes to avoid duplication

### Requirements Gathering
- [ ] Clearly defined what the recipe should change
- [ ] Identified what should NOT be changed
- [ ] Documented expected input and output
- [ ] Listed any dependencies or external types needed
- [ ] Determined if multi-file analysis is required (ScanningRecipe)

## Implementation Phase

### Recipe Class Structure
- [ ] Used `@Value` and `@EqualsAndHashCode(callSuper = false)` for immutability
- [ ] All fields are final (via Lombok or manual implementation)
- [ ] Added `@JsonCreator` constructor with `@JsonProperty` annotations
- [ ] Defined `@Option` fields with clear descriptions and examples
- [ ] Implemented `getDisplayName()` with sentence-case name
- [ ] Implemented `getDescription()` with clear, period-ending description
- [ ] `getVisitor()` returns NEW instance (never cached)

### Visitor Implementation
- [ ] Chose correct visitor type (JavaIsoVisitor vs JavaVisitor)
- [ ] Called `super.visitX()` in overridden visit methods
- [ ] Checked for null before accessing type information
- [ ] Implemented "do no harm" - return unchanged LST when unsure
- [ ] Used `.withX()` methods instead of mutating LSTs
- [ ] Used `ListUtils` instead of stream operations on LST collections
- [ ] Avoided creating new lists unnecessarily

### JavaTemplate Usage (if applicable)
- [ ] Used typed substitution `#{any(Type)}` for LST elements
- [ ] Used untyped substitution `#{}` for strings
- [ ] Declared all imports with `.imports()`
- [ ] Declared static imports with `.staticImports()`
- [ ] Configured parser with `.javaParser()` if referencing external types
- [ ] Added classpath dependencies or stubs as needed
- [ ] Used context-free templates (default) when possible
- [ ] Only used `.contextSensitive()` when necessary

### Advanced Features (if applicable)
- [ ] Added preconditions with `Preconditions.check()`
- [ ] Used `UsesType` or `UsesMethod` to filter applicable files
- [ ] Implemented cursor messaging for intra-visitor communication
- [ ] For ScanningRecipe: defined accumulator with `Map<JavaProject, T>`
- [ ] For ScanningRecipe: implemented `getInitialValue()`
- [ ] For ScanningRecipe: implemented `getScanner()` (no changes, only collect)
- [ ] For ScanningRecipe: implemented `getVisitor()` (uses accumulator data)
- [ ] For ScanningRecipe: implemented `generate()` if creating new files

### Imports and Dependencies
- [ ] Used `maybeAddImport()` for new types
- [ ] Used `maybeRemoveImport()` for removed types
- [ ] Chained visitors with `doAfterVisit()` when needed

## Testing Phase

### Test Structure
- [ ] Created test class implementing `RewriteTest`
- [ ] Implemented `defaults(RecipeSpec)` with recipe configuration
- [ ] Added `@DocumentExample` to primary test

### Test Coverage
- [ ] Test for expected changes (before → after)
- [ ] Test for no changes when not applicable (before only)
- [ ] Test for edge cases and boundary conditions
- [ ] Test with multiple files
- [ ] Test that recipe doesn't change already-correct code
- [ ] Test with different parameter values (if applicable)
- [ ] Test with different Java versions (if version-specific)
- [ ] Added classpath dependencies with `spec.parser()`

### Test Quality
- [ ] Test names clearly describe what is being tested
- [ ] Used meaningful package and class names in test code
- [ ] Included comments explaining complex test scenarios
- [ ] Verified tests pass (including multi-cycle verification)
- [ ] Checked that recipe is idempotent (runs produce same result)

## Code Quality Phase

### Best Practices
- [ ] Recipe follows "do no harm" principle
- [ ] Recipe makes minimal, least invasive changes
- [ ] Recipe is immutable (no mutable state)
- [ ] Recipe is idempotent (same input → same output)
- [ ] Recipe never mutates LSTs
- [ ] Recipe respects existing formatting
- [ ] Used referential equality checks (same object = no change)

### Naming Conventions
- [ ] Display name uses sentence case
- [ ] Display name uses backticks around code elements
- [ ] Display name ends with period (if complete sentence)
- [ ] Description is clear and concise
- [ ] Recipe class name follows `VerbNoun` pattern
- [ ] Package name follows `com.yourorg.category` pattern

### Performance
- [ ] Added preconditions to skip irrelevant files
- [ ] Used context-free JavaTemplates when possible
- [ ] Avoided unnecessary LST allocations
- [ ] Recipe completes work in single cycle (no `causesAnotherCycle`)
- [ ] For ScanningRecipe: minimized accumulator size

### Multi-Module Support
- [ ] For ScanningRecipe: tracked data per `JavaProject`
- [ ] Did not assume single project per repository
- [ ] Retrieved JavaProject from markers correctly

## Documentation Phase

### Code Documentation
- [ ] Added class-level JavaDoc describing the recipe
- [ ] Documented all `@Option` fields clearly
- [ ] Added inline comments for complex logic
- [ ] Included usage example in JavaDoc

### External Documentation
- [ ] Created YAML file in `src/main/resources/META-INF/rewrite/` (if distributing)
- [ ] Added recipe to catalog/index (if applicable)
- [ ] Documented any known limitations
- [ ] Added tags for categorization

## Distribution Phase

### Build Configuration
- [ ] Recipe compiles with Java 8 target (or appropriate version)
- [ ] Added `-parameters` compiler flag for Jackson
- [ ] Included rewrite-recipe-bom for dependency management
- [ ] Tests run successfully with build tool

### Publishing
- [ ] Published to local Maven repository for testing (`publishToMavenLocal`)
- [ ] Tested recipe in separate project
- [ ] Configured publishing to artifact repository (if applicable)
- [ ] Tagged release in version control

## Final Verification

### Smoke Testing
- [ ] Ran recipe on sample project
- [ ] Verified changes are correct
- [ ] Verified no unwanted changes were made
- [ ] Checked that formatting is preserved
- [ ] Ran recipe multiple times (idempotence check)

### Common Pitfalls Avoided
- [ ] Did not mutate LSTs directly
- [ ] Did not cache visitor instances
- [ ] Did not use ExecutionContext for visitor state
- [ ] Did not forget to call `super.visitX()`
- [ ] Did not create unnecessary list allocations
- [ ] Did not forget imports in JavaTemplate
- [ ] Did not skip null checks on type information
- [ ] Did not assume single project per repository

## Recipe-Specific Checklists

### For Declarative Recipes
- [ ] Saved in `src/main/resources/META-INF/rewrite/`
- [ ] Used `type: specs.openrewrite.org/v1beta/recipe`
- [ ] All recipe names are fully qualified
- [ ] All parameters are correctly indented
- [ ] String values with special characters are quoted
- [ ] Recipe list is in logical order
- [ ] Tested with `spec.recipeFromResources()`

### For Refaster Template Recipes
- [ ] Created template class with `@RecipeDescriptor`
- [ ] Implemented `@BeforeTemplate` methods
- [ ] Implemented single `@AfterTemplate` method
- [ ] Verified generated recipe works correctly
- [ ] Recipe name uses generated form (e.g., `RecipesName`)

## Notes

Remember:
- **Do no harm**: If unsure, don't change
- **Minimize changes**: Make only necessary modifications
- **Immutability**: Recipes and LSTs must not be mutated
- **Test thoroughly**: Both positive and negative cases
- **Document clearly**: Future maintainers will thank you

For more information, see:
- SKILL.md in this skill directory
- OpenRewrite documentation in this repository
- Examples in examples/ directory
