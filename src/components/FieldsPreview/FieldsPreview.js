import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class FieldsPreview extends Component {
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

    const bmb = this.props.fieldsList.map((field) => 
      <label>
        {field.name}
        {getFieldByType(field.type)}
      </label>
    );
    return (
      <div>
        {bmb}
      </div>
    )
  }
}

export default FieldsPreview;
