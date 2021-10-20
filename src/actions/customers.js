// export const addCustomer = (details, content, currentUser) => {
//     const payload = {
//         ...details,

//     }
// }

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