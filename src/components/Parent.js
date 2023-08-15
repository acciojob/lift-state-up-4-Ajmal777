import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemList, setItemList] = useState([]);
    const [key, setKey] = useState(0);
    const [] = useState();
    const handleClick = () => {
        setItemList([...itemList, {key: key, itemName: itemName, itemPrice: itemPrice}]);
        setKey(key+1);
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <label for="itemName">Item Name: </label>
            <input type="text" id="itemName" onChange={(e) => setItemName(e.target.value)} />
            <label for="itemPrice">Item Price: </label>
            <input type="number" id="itemPrice" onChange={(e) => setItemPrice(e.target.value)} />
            <button onClick={handleClick} setItemList = {setItemList}>Add Item</button>
            <Child cartItems={itemList} />
        </div>
    )
}

export default Parent;