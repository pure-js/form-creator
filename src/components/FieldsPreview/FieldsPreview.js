import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Grid from '@material-ui/core/Grid';

class FieldsPreview extends Component {
  constructor() {
    super();

    this.state = {
      fields: [],
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.newField !== prevProps.newField) {
      const fieldsCopy = this.state.fields.slice();

      fieldsCopy.push({
        type: this.props.newField,
        id: Math.random().toString(36).substr(2, 9),
      });

      this.setState({
        fields: fieldsCopy,
      });
    }
  }

  handleInputChange(event) {
    const { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    function getFieldByType(type) {
      let input;
      switch(type) {
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
      return input;
    }

    const bmb = this.state.fields.map((field) => 
      <React.Fragment key={field.id}>
        <Grid item xs={2}>
          <TextField value={field.name}/>
        </Grid>
        <Grid item xs={10} key={field.id}>
          {getFieldByType(field.type)}
        </Grid>
      </React.Fragment>
    );
    return (
      <Grid container>
        {bmb}
      </Grid>
    )
  }
}

export default FieldsPreview;
