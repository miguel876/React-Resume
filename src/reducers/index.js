import loadedState from '../reducers/loadingState'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productList,
    
})

export default rootReducer;