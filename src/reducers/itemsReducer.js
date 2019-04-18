const initialState = {
  items: [],
  filter: 'all'
}

export default function (state = initialState, action) {
  switch(action.type) {
    case "GET_ITEMS":
      return {...state, items:[...state.items, action.input]}
    case "CHANGE_STATUS":
      return {...state, items:state.items.map(item => {
        if(item.id === action.id){
          return {
            input: item.input,
            status: 'completed',
            id: item.id
          }
        }
        else {
          return item
        }
      })
    }
    case 'UPDATE_FILTER':
      return {...state, filter: action.filter}
    case 'DELETE_ITEM':
      return {...state, items: state.items.filter(item => {
        return item.id !== action.id
      })}
    case 'CLEAR_COMPLETED':
      return {...state, items: state.items.filter(item => {
        return item.status !== 'completed'
      })}
    default:
      return state
  }
}