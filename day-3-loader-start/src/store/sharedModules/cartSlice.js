import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartAmount: 0,
        cartProducts: []
    },
    reducers: {
        ADD_PRODUCT_TO_CART: (state, action) => {
            state.cartProducts.push(action.payload)
            state.cartAmount++
        },
        REMOVE_PRODUCT_FROM_CART: (state, action) => {
            // her må id inn
            state.cartAmount--
        }

    }
});

const {actions, reducer} = cartSlice;
 
export default reducer;
const {ADD_PRODUCT_TO_CART} = actions;

export const AddProductToCart = (productData) => (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART(productData));
}


// du lagde to reducers, som var unødvendig for du skal gjøre noe på samme handling. Du har to states, men trenger ikke to reducers og separate actions selvom