import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from '@reduxjs/toolkit'
import productsSlice from "./modules/productsSlice.js";
import loaderSlice from './sharedModules/loaderSlice.js';
import cartSlice from './sharedModules/cartSlice.js';

const reducer = combineReducers({
    // here we will be adding reducers
    products: productsSlice, // NOTE: Remember this name you will use with useSelector
    loader: loaderSlice,
    cart: cartSlice
})
const index = configureStore({
    reducer,
    
})
export default index;

console.log(index)
