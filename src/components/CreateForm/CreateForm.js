import React, { PureComponent } from 'react';

class CreateForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      fieldType: 'input',
      fielddName: '',
    }

    this.handleInputChange =  this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    let input;
    switch(this.state.fieldType) {
      case 'input':
        input = (<input type="text"/>);
        break;
      case 'textarea':
        input = (<textarea/>);
        break;
      case 'checkbox':
        input = (<input type="checkbox"/>);
        break;
      case 'radio':
        input = (<input type="radio"/>);
        break;
      case 'select':
        input = (<select/>);
        break;
      case 'file':
        input = (<input type="file"/>);
        break;
      default:
        input = (<input type="text"/>);
    }

    return (
      <div>
        <section>
          <select onChange={this.handleInputChange} name="fieldType">
            <option value="input">Input</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
            <option value="select">Select</option>
            <option value="file">File</option>
          </select>
          <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="filed name"
            name="fielddName"
          />
          <button>Add</button>
        </section>
        <form>
          <h1>Preview</h1>
          <label>
            {input}
            {this.state.fielddName}
          </label>
        </form>
      </div>
    );
  }
}

export default CreateForm;
