import { createStore, combineReducers, applyMiddleware } from 'redux'
import productDetailReducer from './components/ProductDetail/ProductDetail.reducer'
import productListReducer from './components/ProductList/ProductList.reducer'
import loginReducer from './components/Login/Login.reducer'
import registerReducer from './components/Register/Register.reducer'
// import thunk from 'redux-thunk'

const reducers = combineReducers({ productDetailReducer, productListReducer, loginReducer, registerReducer })
export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)