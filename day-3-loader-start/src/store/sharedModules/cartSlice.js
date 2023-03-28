import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartAmount: 0,
        cartProducts: []
    },
    reducers: {
        ADD_PRODUCT_TO_CART: (state, action) => {
            const isProductIncart = state.cartProducts.some(product => product.id === action.payload.id);
            if (isProductIncart) {
                // i virkeligheten vil vi heller øke mengden på det produktet/gi en beskjed
            } else {
                state.cartProducts.push(action.payload)
                state.cartAmount = state.cartProducts.length
            }
            
        },
        REMOVE_PRODUCT_FROM_CART: (state, action) => {
            state.cartProducts = state.cartProducts.filter(function(product) {
                return product.id !== action.payload;
            })
            state.cartAmount = state.cartProducts.length
        }

    }
});

const {actions, reducer} = cartSlice;
 
export default reducer;

const {ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART} = actions;

export const AddProductToCart = (productData) => (dispatch) => {
    dispatch(ADD_PRODUCT_TO_CART(productData));
}

export const DeleteProductFromCart = (id) => (dispatch) => {
    dispatch(REMOVE_PRODUCT_FROM_CART(id));
}


// du lagde to reducers, som var unødvendig for du skal gjøre noe på samme handling. Du har to states, men trenger ikke to reducers og separate actions selvom