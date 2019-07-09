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
    return(
      <div>
        <div>Name: {this.state.userName}</div>
        <Forms 
        onchange={this.handleChange} 
        submit={this.handleSubmit}
        userValue={this.state.userName}/>  
      </div>
      
    );
  }
}

export default App;