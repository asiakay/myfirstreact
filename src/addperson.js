import React from 'react';
import ReactDOM from 'react-dom';
 

class AddPersonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactname: '',
      age: null,
      zipcode: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.contactname + this.state.age + this.state.zipcode );
  }

  myChangeHandler = (event) => {
    this.setState({contactname: event.target.value});
    this.setState({age: event.target.value});
    this.setState({zipcode: event.target.value});
  }


  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <input type="text"
        name={this.contactname}
        placeholder="add contact name"
        onChange={this.myChangeHandler} 
        />

        <input type="text"
        name={this.age}
        placeholder="add contact age"
        onChange={this.myChangeHandler} 
        />

        <input type="text"
        name={this.zipcode}
        placeholder="add contact zipcode"
        onChange={this.myChangeHandler} 
        />

        <input
        type="submit"
            />
      </form>
    )
  }
}
export default AddPersonForm;