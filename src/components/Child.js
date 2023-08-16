import React from "react";

const Child = ({ itemList, setItemList }) =>{

    function handleClick(key){
        setItemList(itemList => itemList.filter(item => item.id !== key));
    }

    return (
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {
                    itemList.map(item =>
                        <li key={item.key}>
                            {item.itemName} - ${item.itemPrice} 
                            <button onclick={()=>handleClick(item.key)}>Remove</button> 
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Child;