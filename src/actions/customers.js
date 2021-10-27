export const addCustomer = (details, token) => {
  return async (dispatch) => {
    const resp = await fetch(`http://localhost:3001/api/v1/customers`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bear ${token}`
      },
      body: JSON.stringify(details)
    })
    const data = await resp.json()
    console.log(data)
    dispatch({type: "ADD_CUSTOMER", payload: data})
  }
}

export const loadCustomers = () => {
    return async dispatch => {
      dispatch({ type: "REQUESTING" });
      const resp = await fetch('http://localhost:3001/api/v1/customers', {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      })
  
      const data = await resp.json();
      dispatch({ type: "SET_CUSTOMERS", payload: data})
      dispatch({ type: "DONE_REQUESTING" })
    }
}
