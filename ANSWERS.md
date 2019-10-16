- [ ] Why would you use class component over function components (removing hooks from the question)?
 You would use class components if the existing codebase primarily consists of class components and it would be cost prohibitive to overhaul the codebase in favor of function components, when your code requires access specifically to methods in the React component lifecyle, or to add state to the program (removing the use of state provided via the usage of hooks)

- [ ] Name three lifecycle methods and their purposes.
ComponentDidMount - runs code, primarily side effects when component is mounted and runs only once
ComponentDidUpdate - runs code, primarily side effects and when stated is updated, render is called each time
ComponentWillUnmount - runs code prior to death of component, usually used for garbage collection

- [ ] What is the purpose of a custom hook?
The purpose of a custom hook is to reuse state logic in other components rather than to rewrite the same logic over and over again

- [ ] Why is it important to test our apps?
Testing allows the developer to produce a better product by identifying errors in the code that may result in performance issues, inoperability, memory issues, etc. Testing allows the developer to make sure that a pure component produces the correct output given the same input.