import React, {Component} from 'react';
import Forms from './Forms';

class App extends Component{

  state ={
    userName: 'Some Name',
    personName: [],
    personAge: [],
    personOcc: []
  }
  handleChange = (event) =>{
    console.log('[App.js] handleChange method')

    this.setState({
      userName: event.target.value
    })
  }

  handleSubmit = (props) =>{
    const newState = this.state;
    newState.personName.push(props.target.userValue);
    newState.personAge.push(props.target.userValue);
    newState.personOcc.push(props.target.userValue);

    alert('input submitted.')
    this.setState({
         personName: newState.personName,
         personAge: newState.personAge,
         personOcc: newState.personOcc
    })
  }
  
  render(){

    const formStyle={
      border:'1px solid green',
      margin:'10px 5px',
      padding:'20px'
    }
    return(
      <div>
        <div>Name: {this.state.userName}</div>
        <form onSubmit={this.handleSubmit} style={formStyle}> 
        <Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='text'
        placeholder='johndoe1'
        fieldName='Username:'/> 
        <br/>
        <Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='text'
        placeholder='John'
        fieldName='First Name:'/>
        <br/>
        <Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='text'
        placeholder='Doe'
        fieldName='Last Name:'/>
        <br/>
        <Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='text'
        placeholder='123 Jay Lane, Some City, Country'
        fieldName='Address:'/> 
        <br/>
        <Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='submit'
        /> 
        </form>
         
      </div>
      
    );
  }
}

export default App;