- [ ] Why would you use class component over function components (removing hooks from the question)?
 You would use class components if the existing codebase primarily consists of class components and it would be cost prohibitive to overhaul the codebase in favor of function components, when your code requires access specifically to methods in the React component lifecyle, or to add state to the program (removing the use of state provided via the usage of hooks)

- [ ] Name three lifecycle methods and their purposes.
ComponentDidMount - runs code, primarily side effects when component is mounted and runs only once
ComponentDidUpdate - runs code, primarily side effects and when stated is updated, render is called each time
ComponentWillUnmount - runs code prior to death of component, usually used for garbage collection

- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?