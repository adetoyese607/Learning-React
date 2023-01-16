import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic: 'react'
        }
    }
    
    handleUsernameChange = event  => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = event  => {
        this.setState({
            comments: event.target.value
        })
    }
    
    handleTopicChange = event  => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event  => {
        alert(`I am  ${this.state.username} , comments: ${this.state.comments}, learninig ${this.state.topic} `)
        event.preventDefault()

    }
    
  render() {
    const{username, comments, topic} = this.state
    return (
 <form onSubmit={this.handleSubmit}>
    <div>
        <label>Username</label>
        <input type='text' value={username}
        onChange = {this.handleUsernameChange}
        />
    </div>
    <div>
        <label>Comment</label>
        <textarea value={comments}
        onChange ={this.handleCommentsChange}
        />
    </div>
    <div>
    <label>Topic</label>
    <select value={topic} onChange={this.handleTopicChange} >
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
    </select>
    </div>
    <button>Submit</button>
 </form>
    )
  }
}

export default Form
