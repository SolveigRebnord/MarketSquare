
const erororSlice = createSlice({
    name: 'error',
    initialState: {
        isError: false,
        errorMessage: "Sorry error"
    },
    reducers: {
        SET_ERROR: (state, action) => {
            state.isError = action.payload
        },
        SET_ERROR_MESSAGE: (state, action) => {
            state.errorMessage = action.payload
        }
    }

    
});

const {actions, reducer} = erororSlice;
 
export default reducer;

const {SET_ERROR, SET_ERROR_MESSAGE} = actions;





// du lagde to reducers, som var unødvendig for du skal gjøre noe på samme handling. Du har to states, men trenger ikke to reducers og separate actions selvom