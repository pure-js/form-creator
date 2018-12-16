import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
        input = (<TextField/>);
        break;
      case 'textarea':
        input = (<TextField multiline/>);
        break;
      case 'checkbox':
        input = (<input type="checkbox"/>);
        break;
      case 'radio':
        input = (
          <FormControl component="fieldset">
            <RadioGroup>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        );
        break;
      case 'select':
        input = (<select/>);
        break;
      case 'file':
        input = (<input type="file"/>);
        break;
      default:
        input = (<TextField/>);
    }

    return (
      <div>
        <section>
          <Select
            onChange={this.handleInputChange}
            value={this.state.fieldType}
            name="fieldType"
          >
            <MenuItem value="input">Input</MenuItem>
            <MenuItem value="textarea">Textarea</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="radio">Radio</MenuItem>
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="file">File</MenuItem>
          </Select>
          <TextField
            onChange={this.handleInputChange}
            placeholder="filed name"
            name="fielddName"
          />
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </section>
        <form>
          <h1>Preview</h1>
          <label>
            {this.state.fielddName}
            {input}
          </label>
        </form>
      </div>
    );
  }
}

export default CreateForm;
