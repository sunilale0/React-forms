# React-Forms - Incomplete
My first time creating forms with React.

## Code Snippets
### Handling Change
```javascript
handleChange = (event) =>{
    console.log('[App.js] handleChange method')

    this.setState({
      userName: event.target.value
    })
  }
```
The above code logs any change in the input element.
```javascript
<Forms 
        onchange={this.handleChange} 
        userValue={this.state.userName}
        type='text'
        placeholder='johndoe1'
        fieldName='User name:'/> 
```
The onchange property of `Forms` component holds the function call to `this.handleChange` and ultimately gets trigerred in `Forms.js` at:
```javascript
<input 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={props.onchange}
                size='100'/>
```

### Handling Submit
```javascript
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
```
The above function gets called by the following line in return:
```javascript
<form onSubmit={this.handleSubmit} style={formStyle}> 
```
