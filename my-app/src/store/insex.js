 import { combineReducers, createStore, applyMiddleware } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import thunk from 'redux-thunk'

 import product from './products';
 import productsCart from './cart';
 import data from './api-reducer';

 let reducers = combineReducers({ product, productsCart, data });


 const store = () => {
     return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
 }


 export default store();