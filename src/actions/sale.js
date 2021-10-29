import { baseUrl } from "../GlobalVariable"

export const addSale = (details, token) => {
    return async (dispatch) => {
      const resp = await fetch(baseUrl + `/sales`, {
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
      dispatch({type: "ADD_SALE", payload: data})
    }
}

export const loadSales = () => {
  return async dispatch => {
    dispatch({ type: "REQUESTING" });
    const customer_id = JSON.parse(localStorage.getItem('customer_id'))
    console.log(baseUrl + `/customers/${JSON.parse(localStorage.getItem('customer_id'))}/sales`)
    const resp = await fetch(baseUrl + `/customers/${customer_id}/sales`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })
    
    const data = await resp.json();
    console.log(data)
    dispatch({ type: "SET_SALE", payload: data})
    dispatch({ type: "DONE_REQUESTING" })
  }
}

