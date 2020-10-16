class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
      }
    render(){
      let myheader;
  
      if (this.state.show) {
        myheader = <Child />;
        };
        return (
          <div>
          {myheader}
          <button type="button" 
          onClick={this.delHeader}>
          Delete Header</button>
        </div>
        );
      }
    }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert ("The component named Header is about to be unmounted.");
    }
    render () {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
    // componentDidMount() {
    //     setTimeout(() => {
    //       this.setState({favoritecolor: "yellow"})
    //     }, 1000)
    //   }
      
   
      // componentDidUpdate() {
      //     document.getElementById("div2").innerHTML =
      //     "The updated favorite is " + this.state.favoritecolor;
      //   }
  
  
      // getSnapshotBeforeUpdate(prevProps, prevState) {
      //   document.getElementById("div1").innerHTML =
      //   "Before the update, the favorite was " + prevState.favoritecolor;
      // }
   
      // render() {
      //   return (
      //     <div>
      //     <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      //     <div id=""></div>
       
      //     </div>
      //   );
      // }