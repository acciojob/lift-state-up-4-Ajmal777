import React from "react";

const Child = ({ cartItems, setItemList }) =>{

    function handleClick(key){
        setItemList(cartItems => cartItems.filter(item => item.id !== key));
    }

    return (
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {
                    cartItems.map(item =>{
                        <li key={item.key}>{item.itemName} - ${item.itemPrice} <button onclick={()=>handleClick(item.key)}>Remove</button> </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Child;