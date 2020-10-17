import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

// React Event Object 

/* 
Arrow Function: Sending the event object manually:
*/
class Football extends React.Component {
  shoot = (a,b) => {
    alert(b.type);
    /* 
    'b' represents the React event that triggered the function, 
    in this case the 'click' event 
    */
  }
  render() {
    return (
      <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!!</button>
    );
  }
}

/* 
Sending "Goal" as a parameter to the shoot function,
using an anonymous arrow function.

class Football extends React.Component {
shoot = (a) => {
  alert(a);
}
render() {
  return (
    <button onClick={() => this.shoot("Goal")}>Take the shot!</button>  
    );
  }
} */

/* // Sending "Goal" as a parameter to the shoot function by 
// binding the event handler to 'this'
class Football extends React.Component {
  shoot(a) {
    alert(a); 
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    );
  }
} */


/* {
    constructor(props) {
    super(props)
    this.shoot = this.shoot.bind(this)
  } */

/*   shoot () {
    alert(this); */
    /* The 'this' keyword refers to the component object 
    Thanks to the binding in the constructor function, 
    the 'this' keyword now refers to the component object */
/*   }
  render() {
    return (
      <button onClick={this.shoot}>Take the shot!</button>
    );
  }
}
 */
  