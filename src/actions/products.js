export const loadProducts = () => {
    return async dispatch => {
      dispatch({ type: "REQUESTING" });
      const resp = await fetch('http://localhost:3001/api/v1/products', {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
      })
  
      const data = await resp.json();
      dispatch({ type: "SET_PRODUCTS", payload: data})
      dispatch({ type: "DONE_REQUESTING" })
    }
  }