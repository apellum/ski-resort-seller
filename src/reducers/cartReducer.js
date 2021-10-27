const initialState = {
    cart: []
};

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_CART_ITEM":
            return [...state, action.payload]
        case "SET_CUSTOMERS":
            return action.payload;
        default:
            return state;
    }
}

export default cartReducer;