import React from 'react';
import Form from './Components/Form';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message : "This is a Template"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Client</h1>
        <Form />
      </div>
    );
  }
}

export default App;
