import React, { useState, useEffect } from 'react'

const CartTotal = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let nums = [];
        cart.forEach((item) => nums.push(item.price));
        let newNums = nums.reduce((a, b) => {
          return a + b;
        }, 0);
        setTotalPrice(newNums);
      }, [cart]);
    return (
        <div>
            <h3>Total: </h3>
            <p>{totalPrice}</p>
        </div>
    )
}

export default CartTotal
