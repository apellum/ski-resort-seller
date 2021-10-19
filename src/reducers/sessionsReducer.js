const initialState = {
    currentUser: {},
    loggedIn: false,
    token: null
}

const sessionsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                currentUser: action.payload.user,
                loggedIn: true,
                token: action.payload.jwt
            }
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export default sessionsReducer;