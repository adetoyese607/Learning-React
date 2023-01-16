import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'How are you'
        }
        // third Approach
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message: 'Im Fyn, Thank You (--)'
        })
    }

    // For the THird Approach Only
//    clickHandler = () =>  {
//         this.setState({
//            message: 'Im Fyn, Thank You (--)'
//            } )
//     }


  render() {
    return (
      <div>
        <div>{this.state.message} </div>

        {/* First Approach */}
        <button onClick={this.clickHandler.bind(this)}>Click </button>
        {/* Second Approach */}
        <button onClick={() => this.clickHandler()}>Click </button>
        {/* Third Approach */}
        <button onClick={this.clickHandler}>Click </button>

      </div>
    )
  }
}

export default EventBind
