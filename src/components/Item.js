import React, { Component } from 'react'
import { changeStatus, deleteItem } from '../actions/todoItems'

class Item extends Component {
  handleClick = (e) => {
    changeStatus(this.props.id)
  }

  deleting = (e) => {
    e.preventDefault()
    deleteItem(this.props.id)
  }

  render(){
    return(
      <li>
      <div>
        <span onClick={this.handleClick}className="checked">&#10003;</span><span className={this.props.status === 'completed'? 'line':''}>{this.props.input}</span>
      </div>
      <div className="delete-container">
        <span onClick={this.deleting} className="delete">X</span>
      </div>
      </li>
    )
  }
}

export default Item