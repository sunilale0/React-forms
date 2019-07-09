import React from 'react';

const forms = (props) =>{

    const labelStyle={
        display:'block',
    }
    const inputStyle={
        length:"4px",
        size:"4px",
        padding:'10px'
    }
    return(
        <div>
            
            <label htmlFor = "name" style={labelStyle}>
               {props.fieldName} <input 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={props.onchange}
                />
            </label>
            {/* <label htmlfor ='name' style={labelStyle}>
                <input type = 'submit' />
            </label>
            <label>
                <input type={props.type} placeholder/>
            </label> */}
           
            
        </div>
    )
}

export default forms;