import React, { PureComponent } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

import CreateForm from './components/CreateForm/CreateForm';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      create: false,
    };
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
      create = <CreateForm />;
    }
    return (
      <div className="App">
        <Button
          variant="contained"
          onClick={this.goToCreatingForms}
          color="primary"
        >
          Create new form
        </Button>
        {create}
      </div>
    );
  }
}

export default App;
