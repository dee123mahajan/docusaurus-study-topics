# Controlled/Uncontrolled Components

In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.

### Uncontrolled Components

Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.

```bash 
import React from 'react';

class UncontrolledInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input Value:', this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
```
In the UncontrolledInput component, we're using the ref attribute to access the DOM node of the input field directly. When the form is submitted, we retrieve the current value of the input field using this.inputRef.current.value.

### Controlled Components

Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.



```bash 
import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}

```
Example : In the above example, the ControlledInput component manages its state using the useState hook. The value of the input field is controlled by the value prop, which is set to the value state variable. Whenever the input value changes, the handleChange function updates the value state accordingly.