import { baseUrl } from "../GlobalVariable";

export const login = (details, history) => {
    return async dispatch => {
        dispatch({ type: "REQUESTING" });
        const resp = await fetch(baseUrl + '/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        })
        const data = await resp.json();
        if (data.errors) {
            console.log(data.errors)
            dispatch({ type: "ERRORS", payload: data.errors })
        } else {
            localStorage.setItem('jwt', data.jwt);
            dispatch({ type: "CLEAR_ERRRORS" })
            dispatch({ type: "LOGIN", payload: data });
            history.push('/')
        }
        dispatch({ type: "DONE_REQUESTING" });
    }
}

export const getCurrentUser = () => {
    return async dispatch => {
        dispatch({ type: "REQUESTING"})
        const resp = await fetch(baseUrl + '/get-current-user', {
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `bearer ${localStorage.getItem('jwt')}`
            }
        })
        const data = await resp.json();
        const payload = {
            user: data,
            jwt: localStorage.getItem('jwt'),
        }
        if (data.email) {
            dispatch({ type: "LOGIN", payload})
        }
        dispatch({ type: "DONE_REQUESTING" })
    }
}

export const logout = () => {
    localStorage.removeItem('jwt');

    return {
        type: "LOGOUT"
    }
}