import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"}; // state accessed through props 
        // this.state get read
        // this.setState set write 
    
// Lifecycle Methods

// // Mounting // setState 
//     componentDidMount() {  
//         setTimeout(() => {
//             this.setState({favoritecolor: "yellow"})
//         }, 1000) 
//         // this.setState is accurate because State will be written/ after the time property passes. 
    

// Updating
//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         document.getElementById("div1").innerHTML = 
//         "Before the update, the favorite was " + prevState.favoritecolor;
//     }

//     componentDidUpdate() {
//     document.getElementById("div2").innerHTML = 
//     "The updated favorite is " + this.state.favoritecolor;
// }
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol};
    // }

// shouldComponentUpdate() { // if set to false, then this method stops the component from rendering at any update.
//     return true;
// }


    // changeColor = () => {
    //     this.setState({favoritecolor: "blue"}); // changeColor event handler setting / writing new state
    // }

    // button doesn't change color because getDerivedStateFromProps() method overrides the favorite color attribute
    
    render(){ // included in mounting, updating, ...
        return (
            <div>
            <h1>My favorite color is {this.state.favoritecolor}</h1>
            {/* <button type="button" onClick={this.changeColor}>Change Color</button> 
            The 2 DIV elements below are where the specified elements, tags, and ids, etc. are rendered*/}
            <div id= "div1" ></div> 
            <div id= "div2"></div>
            </div>
        );
    }
}
export default Header;