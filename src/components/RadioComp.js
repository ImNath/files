import React from 'react';

function RadioComp (props){

    return (
    <label>
    <input 
        type="radio"
    /> {props.text}
</label>
    )

}
export default RadioComp;