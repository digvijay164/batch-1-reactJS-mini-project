import React from "react";

function Button({ btnName, className, btnColor, onclick }) {

    return (
        <>
            <button className={className} style={{ backgroundColor: btnColor }} onClick={onclick}>{btnName}</button>
        </>
    )
}

export default Button