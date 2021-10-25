export const addSale = (details, token) => {
    return async (dispatch) => {
      const resp = await fetch(`http://localhost:3001/api/v1/sales`, {
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