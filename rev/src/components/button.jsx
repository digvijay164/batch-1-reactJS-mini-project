import React from "react";

export default function Button({
    className,
    cbfn,
    btnName
}){
    return(
        <button 
        className={className}
        onClick={cbfn}
        >{btnName}</button>
    )
}