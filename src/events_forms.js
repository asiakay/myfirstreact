import React from 'react';
import ReactDOM from 'react-dom';

/* 
// A simple select box, where the selected value "Volvo" 
// is initialized in the constructor:

class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mycar: 'Volvo'
    };
  }
  render (){
    return (
      <form>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="BMW">BMW</option>
        </select>
      </form>
    );
  }
}
 */
/* 
// Textarea in React is different from ordinary HTML.
// In HTML the value of a textarea was the text between the 
// start tag <textarea> and the end tag </textarea>, 
// in React the value of a textarea is placed in a value attribute:
// Example: a simple textarea with some content initialized in the 
// constructor:

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'The content of a textarea goes in the value attribute'
    };
  }
  render(){
    return (
      <form>
        <textarea value={this.state.description} />
      </form>
    );
  }
}
 */


/* 
// Adding Error Message
// When you fill in your age as not numeric, an error message is 
// displayed: 

class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age"){
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render(){
    return (
      <form>
        <h1>Hello {this.state.username}, {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          name="username"
          onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input
            type="text"
            name="age"
            onChange={this.myChangeHandler}
            />
            {this.state.errormessage}
      </form>
    );
  }
}
 */



/* //Validating Form Submission
// Example:
// When you submit the form, you will get an alert 
// if the age field is not numeric: 

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name</p>
        <input 
          type="text"
          name="username"
          onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p> 
          <input
            type="text"
            name="age"
            onChange={this.myChangeHandler}
            />
            <br/>
            <br/>
            <input type="submit"/>
      </form>
    );
  }

} */






/* // Validating Form Input
// Example:
// When you input your age, you will get an alert 
// if the age field is not numeric: 

class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age"){
      if (!Number(val)) {
        alert("Your age must be a number!");
      }
    }
    this.setState({[nam]: val});
  }
render(){
  return (
    <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
      type="text"
      name="username"
      onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input 
      type="text"
      name="age"
      onChange={this.myChangeHandler}
      />
    </form>
  );
}
}
 */

/* //Handling Multiple Inputs: Write a form with two input fields:

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name: </p>
        <input 
          type="text"
          name="username"
          onChange={this.myChangeHandler}
          />
        <p>Enter your age: </p>
          <input
            type="text"
            name="age"
            onChange={this.myChangeHandler}
            />
      </form>
    );
  }
} */


/* // Submitting Forms: Add a submit button 
//and an event handler in the onSubmit attribute:


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: ''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You aer submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input 
          type="text"
          onChange={this.myChangeHandler}
          />
          <input
            type="submit"
            />
      </form>
    );
  }
}
 */
/* // Conditional Rendering
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render(){
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input
        type="text"
        onChange={this.myChangeHandler}
        />
      </form>
    );
  }
} */





/* // Add an event handler in the onChange attribute, 
//and let the event handler update the state object:
class MyForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: ''};
  }  

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  
  render(){
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={this.myChangeHandler}
          />
      </form>
    )
  }
} */


/* //You add a form with React like any other element:
import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render(){
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
        type="text"
        />
      </form>
    );
  }
}
 */


 export default MyForm;