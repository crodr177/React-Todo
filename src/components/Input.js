import React, { Component } from 'react'
import { addTodo } from '../actions/todoItems'

class Input extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.input !== '') {
      addTodo(this.state.input)
    }
    this.setState({
      input: ''
    })
  }
  render(){
    return (
      <div id="text-container">
        <h1 className="title">todo<span id="span-title">list</span></h1>
        <form onSubmit={this.handleSubmit}>
          <input maxLength="40" type="text" name="input" value={this.state.input} placeholder="what needs to be done?" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}
export default Input