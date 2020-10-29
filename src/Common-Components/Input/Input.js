import React from "react";
import {ValidationMessage} from './Styles';
const input = (props) => {
  let inputElement = null;
  let validationerror = null;
  if (props.invalid && props.touched) {
    validationerror = <ValidationMessage>Please enter a valid {props.valuetype}!</ValidationMessage>; 
    // validationerror.push(validationerror);

}
  switch (props.elementtype) {
    case "input":
      inputElement = <input  {...props.elementconfig} value={props.value} onChange={props.changed}  />;
      break;
    case "textarea":
      inputElement = <textarea  {...props.elementconfig} value={props.value} onChange={props.changed} />;
      break;
    default:
      inputElement = <input  {...props.elementconfig} value={props.value} onChange={props.changed} />;
  }
 
  
  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
      {validationerror}
    </div>
  );
};
export default input;
