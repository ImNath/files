import React from 'react';


function CheckComp(props){

    return (
     <label>
        <input 
            type={"checkbox"}
            name={props.name}
            onChange={this.handleChange}
            checked={props.checked}
        /> {props.label}
    </label>
    )


}

export default CheckComp;