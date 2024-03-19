# Higher order components

Higher-order components (HOCs) are a powerful feature of the React library. They allow you to reuse component logic across multiple components.

In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

HOCs allow you to add additional functionality to a component without modifying the component's code. For example, you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components.

```bash 
// Higher Order Component
const withLogging = (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            console.log("Component is mounted!");
        }
        
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

// Component
const MyComponent = (props) => {
    return <div>Hello, {props.name}!</div>;
}

// Enhanced Component
const LoggedComponent = withLogging(MyComponent);

```