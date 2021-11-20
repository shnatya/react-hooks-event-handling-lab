// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handlerFocus(){
        console.log("Good!")
    }
    function handlerBlur(){
        console.log("Hey! Eyes on me!")
        
    }
    return (
        <button onBlur={handlerBlur} onFocus={handlerFocus}>Eyes on me</button>
    )
}

export default EyesOnMe;