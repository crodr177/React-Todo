import store from '../store'

let id = 0;

export function addTodo(input) {
  id++
  store.dispatch({
    type: "GET_ITEMS",
    input: {
      input: input,
      status: 'pending',
      id: id
    }
  })
}

export function changeStatus(id){
  store.dispatch({
    type: 'CHANGE_STATUS',
    id: id
  })
}

export function updateFilter(filter) {
  store.dispatch({
    type: 'UPDATE_FILTER',
    filter: filter
  })
}

export function deleteItem(id) {
  store.dispatch({
    type:'DELETE_ITEM',
    id: id
  })
}

export function clearCompleted() {
  store.dispatch({
    type:'CLEAR_COMPLETED'
  })
}