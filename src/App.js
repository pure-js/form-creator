import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateForm from './components/CreateForm/CreateForm';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      create: false,
    }
    this.goToCreatingForms = this.goToCreatingForms.bind(this);
  }

  goToCreatingForms() {
    this.setState({
      create: true,
    });
  }

  render() {
    let create;
    if (this.state.create) {
      create = (<CreateForm/>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.goToCreatingForms}>Create form</button>
          {create}
        </header>
      </div>
    );
  }
}

export default App;
