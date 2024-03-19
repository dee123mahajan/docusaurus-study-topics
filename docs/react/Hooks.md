# React Hooks

React Hooks are functions that let you use state and other React features without writing a class. They are introduced in React 16.8 as a way to write more concise and readable React code, especially functional components. Hooks are JavaScript functions, but they have specific names and conventions that let React maintain the state of a functional component between renders.

The most common built-in hooks are:

### useState 
Allows functional components to manage state without needing a class. It returns a stateful value and a function to update it, akin to this.setState in class components.

```bash 
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```
### useEffect
Adds the ability to perform side effects in function components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods in class components.

```bash 
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
### useContext
Provides a way to pass data through the component tree without having to pass props down manually at every level.

```bash 
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function Example() {
  const theme = useContext(ThemeContext);
  // ...
}

```
### useReducer

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method

```bash 
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

```

### useLayoutEffect

useLayoutEffect is similar to useEffect in that it allows you to perform side effects in function components, but it runs synchronously after all DOM mutations. It's useful when you need to read from the DOM or perform other actions that need to be synchronized with the browser's painting process.

```bash 
import React, { useLayoutEffect, useState } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial width
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div>
      <p>Window width: {width}px</p>
    </div>
  );
};

export default MyComponent;

```
In this example, useLayoutEffect is used to update the component's state (width) synchronously after any DOM resize event, ensuring that the UI is always in sync with the actual window width.

