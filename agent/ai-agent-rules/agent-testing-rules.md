## 5) Naming Conventions

### Test file naming
- `ComponentName.test.jsx`
- `useSomething.test.js`
- `helperName.test.js`

---

### Test naming

Describe behavior clearly:

- `renders the hero title correctly`
- `shows the contact button when links are available`
- `calls the handler when the button is clicked`
- `displays validation errors when the form is submitted empty`

#### Avoid vague names like:
- `works correctly`
- `should test component`
- `test button`

---

## 6) Unit Testing Rules

### What to test
- Pure functions
- Conditional logic
- Data formatting
- Utility helpers
- Hook return values and state transitions
- Simple presentational components when behavior matters

---

### Best practices
- Keep unit tests small and focused
- Test one behavior per test
- Prefer explicit assertions
- Cover normal case, edge case, and failure case when relevant

---

### Avoid
- Testing library internals
- Testing React itself
- Repeating the same assertion pattern unnecessarily
- Verifying every prop mechanically if no real behavior changes

---

## 7) Integration Testing Rules

### Focus on user-visible behavior

Test:
- What is rendered
- What changes after user interaction
- What appears/disappears
- What callbacks are triggered
- What navigation or state changes occur

---

### Best practices
- Render components as close as possible to real usage
- Use:
  - `screen.getByRole`
  - `getByText`
  - `getByLabelText`
- Prefer accessible queries over fragile selectors
- Use `userEvent` instead of low-level event simulation

---

### Query priority
1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByTestId` (only as last resort)

---

### Avoid
- Querying by CSS class
- Querying internal DOM structure unnecessarily
- Shallow-style testing patterns
- Asserting internal state not visible to the user

---

## 8) Mocking Rules

### Mock only when necessary

Use mocks for:
- External API calls
- Browser APIs not available in test environment
- Expensive or unrelated external dependencies
- Non-deterministic behavior

---

### Prefer not to mock
- Internal child components (unless isolation is required)
- Simple utilities
- Your own React hooks (unless necessary)

---

### Guidelines
- Keep mocks minimal
- Mock behavior, not everything
- Make mocked values explicit and readable
- Reset mocks between tests when needed

---

## 9) Accessibility in Tests

Accessibility must be part of the testing strategy.

### Validate:
- Correct accessible roles
- Buttons and links discoverable by role
- Inputs associated with labels
- Error messages clearly exposed
- Keyboard interaction works correctly

---

### Prefer assertions like:
- Headings by role
- Buttons by accessible name
- Inputs by label text

> Accessibility is **not optional**

---

## 10) Async Testing Rules

### Best practices
- Use `findBy...` for async elements
- Use `waitFor` only when necessary
- Await user interactions when needed
- Make async expectations explicit

---

### Avoid
- Arbitrary timeouts
- Manual delays
- Overuse of `waitFor`
- Race-condition-prone tests

> Tests must be deterministic and stable

---

## 11) Test Data Strategy

- Use realistic but minimal test data
- Keep fixtures small and readable
- Create factories/builders only when repetition is meaningful
- Avoid large mock objects unless required
- Each test should include only necessary data

---

## 12) Setup and Shared Utilities

Use shared setup only when it improves clarity.

### Allowed shared utilities
- `renderWithProviders`
- Test setup file (`jest-dom`, global mocks)
- Reusable factories
- Wrappers (theme/router/providers)

---

### Avoid
- Over-abstracted helpers that hide intent
- Large generic utilities used everywhere
- Indirection that reduces readability

---

## 13) Good Assertions

### Prefer
- Clear, behavior-based assertions
- One main expectation per behavior
- Secondary assertions only when they add value

---

### Examples
```js
expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument()

expect(onClickMock).toHaveBeenCalledTimes(1)

## 14) Coverage Guidelines

Coverage is a **quality signal**, not the goal itself.

### Priority areas
- Utilities and logic-heavy code should have strong coverage
- Core UI flows should be covered by integration tests
- Critical states must be tested:
  - loading
  - success
  - error
  - empty states

---

### Do not:
- Force 100% coverage at the cost of poor-quality tests
- Write meaningless tests just to increase coverage metrics

---

## 15) Quality Checklist for Every Test File

- [ ] Test names clearly describe behavior  
- [ ] Tests focus on behavior, not implementation details  
- [ ] Accessible queries are used first (`getByRole`, etc.)  
- [ ] Mocks are minimal and justified  
- [ ] No duplicated setup without reason  
- [ ] Async behavior is handled correctly  
- [ ] Edge cases are covered when relevant  
- [ ] Tests are readable and deterministic  
- [ ] No flaky assumptions  
- [ ] No unnecessary snapshot usage  

---

## 16) Anti-Patterns (Forbidden)

- Testing implementation details instead of behavior  
- Excessive mocking  
- Snapshot testing as the primary strategy  
- Querying elements by CSS classes or fragile selectors  
- Large, unreadable test files  
- One test covering multiple unrelated behaviors  
- Hidden dependencies between tests  
- Arbitrary `setTimeout`-style waiting  
- Copy-paste duplication of test logic  
- Ignoring accessibility in test queries  

---

## 17) Definition of Done for Testing

A test suite is considered complete only if:

- ✅ Unit tests cover core isolated logic  
- ✅ Integration tests cover user-visible behavior  
- ✅ Tests are deterministic and maintainable  
- ✅ Accessibility-friendly queries are used  
- ✅ Mocks are minimal and justified  
- ✅ Critical UI states are covered (loading, error, success, empty)  
- ✅ The test suite is easy to understand and extend  

---

## 18) Collaboration Workflow for Testing Tasks

### When receiving a testing task:
- Summarize what needs to be tested  
- Identify whether unit tests, integration tests, or both are required  
- Propose test scenarios before implementation if needed  

---

### When delivering tests:
- Explain what was covered  
- Explain why each test level was chosen  
- Mention any intentional exclusions  
- Ensure the test suite remains clean and production-oriented  

---

## 19) Preferred Testing Philosophy

- Unit tests validate **isolated logic**  
- Integration tests validate **real component behavior**  

Always prioritize:
- **Confidence** → tests give real safety  
- **Clarity** → easy to read and understand  
- **Maintainability** → easy to evolve  

> Always test the application **as the user experiences it**, not how it is implemented