import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import FieldsPreview from '../FieldsPreview/FieldsPreview';

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
    const data = [
      {
        type: 'input',
        name: 'KEk',
      },
      {
        type: 'checkbox',
        name: 'Ziz'
      }
    ]

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
          <FieldsPreview fieldsList={data}/>
        </form>
      </div>
    );
  }
}

export default CreateForm;
