import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
  render() {
    // First Approach

    // if (this.state.isLoggedIn){
    //     return (
    //         <div>Hello Samson</div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Hello Stranger</div>
    //     )
    // }


    // second Approach
//     let message
//     if (this.state.isLoggedIn){
// message = <div>Hello Samson</div>
//     }
//     else{
//         message = <div>Hello Stranger</div>
//     }
//     return(
//         <div>{message} </div>
//     )


    // Third Approach
//     return this.state.isLoggedIn ?
//     (
//         <div>Welcome Samson</div> 
//     ) 
//     :
//     (
// <div>Welcome Stranger</div>
//     )


// Forth Appoach (Welcome Samson or Nothing)
return this.state.isLoggedIn && <div>Welcome Samson</div>


}
}

export default UserGreeting
