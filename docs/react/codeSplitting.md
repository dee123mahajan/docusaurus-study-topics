# Code Splitting

Code splitting is an essential technique in modern web development to optimize the performance of React applications. It allows you to split your JavaScript bundle into smaller chunks. With code splitting, you can only load the code that is needed in a particular context, reducing the initial load time and improving the overall user experience. 

## Implementing Code Splitting in React

There are several ways to implement code splitting in a React application. Let’s explore two commonly used methods:

## Method 1: React.lazy() with Suspense

The React.lazy() function allows you to load a component lazily, which means it is loaded only when needed.  

```bash 
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
```
In this example, the LazyComponent is loaded lazily using React.lazy(). The Suspense component provides a fallback UI (e.g., a loading spinner or a message) while the component is being loaded.

## Method 2: Dynamic Import with Webpack

If you are using Webpack as your build tool, you can leverage its dynamic import feature to achieve code splitting.

```bash 
import React, { Component } from 'react';

class App extends Component {
  handleClick = async () => {
    const module = await import('./DynamicComponent');
    // Do something with the dynamically imported module
  };

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <button onClick={this.handleClick}>Load Dynamic Component</button>
      </div>
    );
  }
}

export default App;
```


In this example, the DynamicComponent is imported dynamically using the import() syntax. When the button is clicked, the component is loaded dynamically, giving you control over when and where to load it.