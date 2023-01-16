import React, { Component } from 'react'

 class Lifecycle2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Samson'
        }
        console.log('Lifecycle2 constructor')
    }
    
static getDerivedStateFromProps(props, state){
    console.log('Lifecycle2 getDerivedStateFromProps')
    return null
}

componentDidMount() {
    console.log('Lifecycle2 componentDidMount ')
}
shouldComponentUpdate(){
    console.log('Lifecycle2 shouldComponentUpdate')
    return true 
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Lifecycle2 getSnapshotBeforeUpdate')
    return null 
}

componentDidUpdate(){
    console.log('Lifecycle2 componentDidUpdate')
}


  render() {
    console.log('Lifecycle2 render')
    return (
        <div>LifeCycle2</div>
    )
  }
}

export default Lifecycle2
