// Code Keypad Component Here
import React from "react";

function Keypad(){
    function handlerEvent(){
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={handlerEvent} />
    )
}

export default Keypad