import { createStore } from 'redux'

import itemsReducer from './reducers/itemsReducer'

const store = createStore(itemsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store