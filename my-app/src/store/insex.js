 import { combineReducers, createStore } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';

 import product from './products';
 import productsCart from './cart';

 let reducers = combineReducers({ product, productsCart });


 const store = () => {
     return createStore(reducers, composeWithDevTools());
 }


 export default store();