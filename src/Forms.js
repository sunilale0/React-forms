import React from 'react';
import { blockStatement } from '@babel/types';

const forms = (props) =>{

    const labelStyle={
        display:'block',
        float:'left'
    }
    return(
        <div>
            <form onSubmit={props.submit}>
            <label htmlFor = "name" style={labelStyle}>
               UserName: <input 
                type="text" 
                placeholder="Input your Name" 
                onChange={props.onchange}
                value={props.userValue}/>
            </label>
            <label htmlfor ='name' style={labelStyle}>
                <input type = 'submit' />
            </label>
            <label>
                <input type='text'/>
            </label>
            </form>
            
        </div>
    )
}

export default forms;