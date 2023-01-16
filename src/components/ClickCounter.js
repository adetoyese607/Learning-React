import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//          count: 0 
//     }
// }
// incrementCount =() => {
//     this.setState(prevState =>  {
//         return {count: prevState.count + 1 }
//     })
// }
// IT IS NOW IN THE HOC(HIGHER ORDER COMPONENT(withCounter.js))

render() {
  console.log(this.props.name)
    const {count, incrementCount} = this.props
    return (
    <button onClick={incrementCount}>
      {this.props.name} Clicked{count} times</button>
    )
  }
}

export default withCounter

(ClickCounter)

