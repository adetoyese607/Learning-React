import React, { Component } from "react";
 
class Join extends Component {
    // render(){
    //     return <h3>Welcome to the group {this.props.name} called {this.props.heroname}</h3>
    // }
    // Destructuring props
    render(){
        const {name, heroname} = this.props
        return <h3>Welcome to the group {name} called {heroname}</h3>
    }
}
export default Join