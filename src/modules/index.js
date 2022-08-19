import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { combineReducers } from 'redux'
import favorites from './favorites'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
  favorites,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
)

export default store
