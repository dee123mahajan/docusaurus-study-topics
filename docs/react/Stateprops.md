# State and Props

## State

State represents the local state of a component. It's mutable and can be updated using setState() method. State allows components to manage their data internally and make the component dynamic and interactive.

Example:

```bash
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

```

In this example, count is a piece of state managed by the useState hook. Whenever the buttons are clicked, setCount() updates the state, triggering a re-render of the component with the updated count.

## Props:

Props (short for properties) are inputs to a React component. They are passed from parent to child components and are immutable within the child component. Props allow components to be customizable and reusable.

```bash

import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to React!" />
      <Greeting name="Bob" message="Have a great day!" />
    </div>
  );
};

export default App;

```

In this example, Greeting component receives name and message props from its parent App component. Each time Greeting is used, it can display a different greeting based on the props passed to it. Props are immutable within the Greeting component, so they cannot be changed from within the component itself.

### Key Differences:

1. Mutability: State is mutable and can be updated using setState(), whereas props are immutable and cannot be modified directly within the component.

2. Scope: State is local to the component where it is defined, while props are passed from parent to child components.

3. Usage: State is used to manage component-specific data and handle changes internally, while props are used to customize and configure components based on their parent's requirements.
