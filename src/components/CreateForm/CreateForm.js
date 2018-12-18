import React, { PureComponent } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Grid from '@material-ui/core/Grid';

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
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
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
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <form>
            <h1>Preview</h1>
            <FieldsPreview newField={this.state.fieldType}/>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default CreateForm;
