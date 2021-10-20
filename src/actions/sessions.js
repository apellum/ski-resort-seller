export const login = (details, history) => {
    return async dispatch => {
        dispatch({ type: "REQUESTING" });
        const resp = await fetch('http://localhost:3001/api/v1/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        })
        const data = await resp.json();
        if (data.errors) {
            dispatch({ type: "ERRORS", payload: data.errors })
        } else {
            localStorage.setItem('jwt', data.jwt);
            dispatch({ type: "CLEAR_ERRRORS" })
            console.log(data)
            dispatch({ type: "LOGIN", payload: data });
        }
        dispatch({ type: "DONE_REQUESTING" });
        history.push('/home')
    }
}

export const getCurrentUser = () => {
    return async dispatch => {
        dispatch({ type: "REQUESTING"})
        const resp = await fetch('http://localhost:3001/api/v1/get-current-user', {
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
        console.log(data)
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