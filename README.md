## State Location 

- State Update? Rerender the component it is defined in all + all the components chidlren.
- Find all the components that need to use this state.
- DEFINE THE STATE IN THE LOWEST COMMON PARENT.

## useEffect

- Its a function that we import from the React librabry.
- Used to run code when a component is initailly rendered and sometimes when it is rendered.
- useEffect function takes two arguments.
1. First Argument - is an arrow function that contains code(any functionality) we want to run.
2. Second Argument - is an array or nothing: these arguments control whether the function is executed on rerenders.

- The first argument which is the arrow function is going to be called automatically by React at very specific points in time.
- The useEffect is always called after an initial render (first render of an application).
 
Timeline
1. Initial Render (Component Called ---> JSX returned ---> DOM updated)
- Arrow Function(First Argument) which is passed in useEffect is always called.
- User clicks a button (State Update)
2. Second Render (Component Called ---> JSX returned ---> DOM updated)
- Arrow Function(First Argument) which is passed in useEffect MAYBE called depending upon the Second Argument.
- User clicks a button (State Update)
3. Third Render (Component Called ---> JSX returned ---> DOM updated)
- Arrow Function(First Argument) which is passed in useEffect MAYBE called depending upon the Second Argument.

### Three Variations in useEffect
1. First Varialtion: if you keep the second argument as []. The first argument in the useEffect is called after the first render and NEVER called again.
2. Second Variation: if there is nothing as second argument. The first argument in the useEffect is called after the first render and is ALWAYS called after every render.
3. Third Varaition: if you add a counter in the second argument. The first argument in the useEffect is called after the first render and is called again only if there is change in the counter.