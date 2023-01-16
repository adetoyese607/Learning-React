import React, { Component } from 'react'
import withCounter from './withCounter'

 class HoverCounter extends Component {
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
    const {count, incrementCount} = this.props
    return <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>

  }
}

export default withCounter(HoverCounter)
