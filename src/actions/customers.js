export const login = (details, history) => {
    return async dispatch => {
        dispatch({ type: "REQUESTING" });
        const resp = await fetch('http://localhost:3001/api/v1/customers', {
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
            dispatch({ type: "CLEAR_ERRRORS" })
            dispatch({ type: "NEW_CUSTOMER", payload: data });
        }
        dispatch({ type: "DONE_REQUESTING" });
        history.push('/home')
    }
}