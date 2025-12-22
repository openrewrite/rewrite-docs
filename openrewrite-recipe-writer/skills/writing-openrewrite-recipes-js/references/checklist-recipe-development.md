# OpenRewrite Recipe Development Checklist (TypeScript)

Use this checklist to ensure you've covered all important aspects of recipe development.

## Planning Phase

### Recipe Approach Selection
- [ ] Determined if transformation can use `rewrite()` helper (simple pattern-to-template)
- [ ] Evaluated if direct `pattern`/`template` needed (complex conditional logic)
- [ ] Confirmed manual visitor manipulation is necessary (no pattern matching)
- [ ] Identified which LST elements need to be visited
- [ ] Reviewed existing recipes to avoid duplication

### Requirements Gathering
- [ ] Clearly defined what the recipe should change
- [ ] Identified what should NOT be changed
- [ ] Documented expected input and output
- [ ] Listed any dependencies or external types needed
- [ ] Determined if multi-file analysis is required (ScanningRecipe)
- [ ] Identified if type attribution is needed (context + dependencies)

## Implementation Phase

### Recipe Class Structure
- [ ] Extended `Recipe` class
- [ ] Implemented `name` property with proper namespace (e.g., `org.openrewrite.javascript.MyRecipe`)
- [ ] Implemented `displayName` property (sentence case, descriptive)
- [ ] Implemented `description` property (clear, period-ending description)
- [ ] Used `@Option` decorator for configurable fields (if applicable)
- [ ] Implemented constructor with default values for options (if applicable)
- [ ] `editor()` returns NEW visitor instance each time

### Visitor Implementation
- [ ] Chose correct visitor type (`JavaScriptVisitor<ExecutionContext>`)
- [ ] Called `super.visitX()` first in overridden visit methods (default pattern)
- [ ] Checked for null before accessing type information
- [ ] Implemented "do no harm" - return unchanged LST when unsure
- [ ] Used `produce()` or `.withX()` methods instead of mutating LSTs
- [ ] Always unwrapped wrapper types (`.element`) before accessing properties
- [ ] Avoided creating unnecessary new objects (referential equality check)

### Pattern/Template Usage (if applicable)
- [ ] Created capture objects for reusable values
- [ ] Used variadic captures (`{ variadic: true }`) for argument lists
- [ ] Used constraints for runtime validation (not just type parameters)
- [ ] Configured patterns with `context` for semantic matching (if needed)
- [ ] Configured patterns with `dependencies` for type attribution (if needed)
- [ ] Set `lenientTypeMatching: false` for strict type checking (if needed)
- [ ] Ensured template strings produce syntactically valid JS/TS code
- [ ] Used `raw()` for dynamic code at construction time
- [ ] Reused same capture objects between pattern and template

### rewrite() Helper (if applicable)
- [ ] Defined builder function with captures inside
- [ ] Used `.tryOn()` with fallback (`|| node`)
- [ ] Used `.orElse()` for alternative transformations (if needed)
- [ ] Used `.andThen()` for sequential transformations (if needed)
- [ ] Added `preMatch` predicate for context filtering before pattern matching (if needed)
- [ ] Added `postMatch` predicate for filtering based on captured values (if needed)

### Advanced Features (if applicable)
- [ ] Used cursor navigation (`cursor.parentTree()`, `cursor.firstEnclosing()`)
- [ ] Used cursor messaging for intra-visitor communication
- [ ] Implemented ScanningRecipe for multi-file analysis
- [ ] Used `maybeAddImport()` for new imports
- [ ] Used `maybeRemoveImport()` for cleanup
- [ ] Applied `maybeAutoFormat()` for formatting (if needed)

## Testing Phase

### Test Structure
- [ ] Created test file with `describe` block
- [ ] Used `RecipeSpec` for test setup
- [ ] Set `spec.recipe` before each test

### Test Coverage
- [ ] Test for expected changes (before → after)
- [ ] Test for no changes when not applicable (single argument)
- [ ] Test for edge cases and boundary conditions
- [ ] Test with different file types (JavaScript, TypeScript, JSX, TSX)
- [ ] Test with type attribution using `npm()` helper (if needed)
- [ ] Test with different parameter values (if configurable)
- [ ] Added `packageJson()` for dependency testing (if needed)

### Test Quality
- [ ] Test names clearly describe what is being tested
- [ ] Used meaningful variable and function names in test code
- [ ] Included comments explaining complex test scenarios
- [ ] Verified tests pass
- [ ] Checked that recipe is idempotent (multiple runs produce same result)
- [ ] Used `withDir` from 'tmp-promise' for tests with dependencies

## Code Quality Phase

### Best Practices
- [ ] Recipe follows "do no harm" principle
- [ ] Recipe makes minimal, least invasive changes
- [ ] Recipe respects existing formatting
- [ ] Used referential equality checks (same object = no change)
- [ ] No mutable state in recipe class
- [ ] Options are captured in closures for visitor use

### TypeScript Specific
- [ ] Used proper TypeScript types throughout
- [ ] Used type guards (`isIdentifier`, `isLiteral`, etc.) before narrowing
- [ ] Proper async/await usage in visitor methods
- [ ] No TypeScript compilation errors

### Pattern/Template Specific
- [ ] Type parameters used only for IDE hints, not runtime validation
- [ ] Constraints used for runtime type validation
- [ ] Template strings produce valid code structure
- [ ] Captures properly reused between pattern and template

## Documentation Phase

### Code Documentation
- [ ] Added JSDoc comments to recipe class
- [ ] Documented option fields with clear descriptions
- [ ] Added inline comments for complex logic

### Examples and Tests
- [ ] Tests serve as usage examples
- [ ] Edge cases are documented in tests
- [ ] Added comments explaining non-obvious transformations

## Distribution Phase

### Packaging
- [ ] Recipe properly exported from module
- [ ] All dependencies declared in package.json
- [ ] TypeScript compilation works
- [ ] Tests run successfully with `npm test`

### Final Verification
- [ ] Recipe name follows convention (`org.openrewrite.javascript.VerbNoun`)
- [ ] Display name is clear and descriptive
- [ ] Description is complete and accurate
- [ ] All tests pass
- [ ] No console warnings or errors
- [ ] Recipe works on real-world code samples

## Common Issues Checklist

### If recipe doesn't transform:
- [ ] Verified visitor method is actually called
- [ ] Checked pattern matches AST structure
- [ ] Verified `super.visitX()` is called
- [ ] Ensured modified node is returned

### If pattern doesn't match:
- [ ] Printed AST structure to debug
- [ ] Used `any()` for parts to ignore
- [ ] Checked variadic captures for lists
- [ ] Verified type attribution if using semantic matching

### If tests fail:
- [ ] Checked for exact formatting match (whitespace matters!)
- [ ] Verified template uses correct syntax
- [ ] Ensured wrapper types are unwrapped
- [ ] Checked for proper async/await usage

### If type errors occur:
- [ ] Verified wrapper types are unwrapped (`.element`)
- [ ] Used type guards before narrowing
- [ ] Checked for null/undefined before accessing properties
- [ ] Used constraints instead of relying on type parameters
