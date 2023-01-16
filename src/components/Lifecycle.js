import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'

 class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Samson'
        }
        console.log('Lifecycle constructor')
    }
    
static getDerivedStateFromProps(props, state){
    console.log('Lifecycle getDerivedStateFromProps')
    return null
}

componentDidMount() {
    console.log('Lifecycle componentDidMount ')
}
shouldComponentUpdate(){
    console.log('Lifecycle shouldComponentUpdate')
    return true   
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Lifecycle getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('Lifecycle componentDidUpdate')
}
changeState = () => {
    this.setState ({
        name: 'Vicious'
    })
}

  render() {
    console.log('Lifecycle render')
    return (
        <div>
            <div>LifeCycle</div>
            <button onClick={this.changeState}>Change</button>
        <Lifecycle2 />
        </div>
    )
  }
}

export default Lifecycle
