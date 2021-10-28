import { baseUrl } from "../GlobalVariable";

export const loadProducts = () => {
    return async dispatch => {
      dispatch({ type: "REQUESTING" });
      const resp = await fetch(baseUrl +'/products', {
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