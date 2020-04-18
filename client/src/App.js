import React from 'react';
import Template from './Components/Component';
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
        <Template/>
      </div>
    );
  }
}

export default App;
