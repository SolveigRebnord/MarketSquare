import { createSlice } from "@reduxjs/toolkit";

const loaderSLice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false
    },
    reducers: {
        SET_LOADER: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})


export default loaderSLice.reducer; // legge med .reducer!!

// Vi trekker ut reduceren fra loaderSlice her, SET_LOADER er reduceren og er den vi trekker ut her og somi eks under der vi heller dekonstrukter

/*
const {actions, reducer} = loaderSlice;
export default reducer;
const {SET_LOADER} = actions;
*/
console.log(loaderSLice.actions) // gir oss SET_LOADER inni et objekt, men SET_LOADER er fortsatt en actionCreator
const {SET_LOADER} = loaderSLice.actions;
console.log(SET_LOADER) //så denne er bare destructing av SET_LOADER, en actionCreator

export const setLoadingState = (loadingStatus) => async (dispatch) => {
    dispatch(SET_LOADER(loadingStatus));
} // dette er funksjonen/action? vi setter hvor vi vil at den skal loade før den har resultater