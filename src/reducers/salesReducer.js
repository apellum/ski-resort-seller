const initialState = [];

const salesReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_SALE":
            return [...state, action.payload]
        case "SET_SALE":
            return action.payload;
        default:
            return state;
    }
}

export default salesReducer;