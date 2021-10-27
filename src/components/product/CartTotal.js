import React, { useEffect } from 'react'

const CartTotal = ({cart, totalPrice, setTotalPrice}) => {

    useEffect(() => {
        let nums = [];
        cart.forEach((item) => nums.push(item.price));
        let newNums = nums.reduce((a, b) => {
          return a + b;
        }, 0);
        setTotalPrice(newNums);
      }, [cart, setTotalPrice]);
    return (
        <div>
            <h3>Total: </h3>
            <p>{totalPrice}</p>
        </div>
    )
}

export default CartTotal
