# Context Api

In React, the Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This can be especially useful for passing global data or theme information throughout an application.

```bash 
// AppContext.js
import React, { createContext, useState } from 'react';

// Creating a context object
export const AppContext = createContext();

// Creating a provider component
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

```
In this example, AppContext is created using createContext(). Then, a Provider component (AppProvider) is defined, which wraps its children with AppContext.Provider. It also holds the state for the theme (either 'light' or 'dark') and a function to toggle the theme.

```bash 
// Button.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff' }}>
      Toggle Theme
    </button>
  );
};

export default Button;

```

In this example, Button component uses useContext hook to consume the context. It receives theme and toggleTheme function from the context and uses them accordingly to toggle the theme.

Finally, you can use this Button component in your App component wrapped with AppProvider:

```bash 
// App.js
import React from 'react';
import { AppProvider } from './AppContext';
import Button from './Button';

const App = () => {
  return (
    <AppProvider>
      <div>
        <h1>Context API Example</h1>
        <Button />
      </div>
    </AppProvider>
  );
};

export default App;
```
Now, the Button component can toggle the theme stored in the context, and any other components wrapped in the AppProvider can access this global state without needing to pass props down through the component tree.