import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { updateFilter, clearCompleted } from '../actions/todoItems'

class Items extends Component {
  changeFilter = (filter) => {
    updateFilter(filter)
  }

  clearCompleted = (e) => {
    e.preventDefault()
    clearCompleted()
  }
  render(){
    return(
      <div>
        <ul>
          {
            this.props.items.filter(item => {
              if(this.props.filter === 'all'){
                return true;
              }

              return item.status === this.props.filter
            }).map(item => (
              <Item {...item}/>
            ))
          }
        </ul>
        {this.props.items.length > 0 ?
        <div id="bottom-row">
          {this.props.items.filter(item => item.status === 'pending').length + " items left"}
          <div className="middle-buttons">
            <button onClick={() => this.changeFilter('all')}>All</button>
            <button onClick={() => this.changeFilter('pending')}>Active</button>
            <button onClick={() => this.changeFilter('completed')}>Completed</button>
          </div>
          <p>{this.props.items.filter(item => item.status === 'completed').length > 0 ? <button onClick={this.clearCompleted}>Clear Completed</button> : ''}</p>
        </div> : ''
        }
      </div>
    )
  }
}

function mapStateToProps(appState){
  return{
    items: appState.items,
    filter: appState.filter
  }
}

export default connect(mapStateToProps)(Items)