// Create a new file called "mystyle.module.css" 
// and insert some CSS code in it:
// Import the stylesheet in your component then 
// import the component in the application @ index.js

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component {
  render (){
    return <h1 className={styles.bigblue}>Hello Car!</h1>;
  }
}


export default Car;

/* // Create a style object named mystyle: 
import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
  render(){
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
export default MyHeader;
 */

/* // Use backgroundColor instead of background-color:
import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
  render(){
    return (
      <div>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
export default MyHeader; */

/* //Inserting an object with the styling information:

import React from 'react';
import ReactDOM from 'react-dom';

class MyHeader extends React.Component {
  render(){
    return (
      <div>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </div>
    );
  }
}
  export default MyHeader; */