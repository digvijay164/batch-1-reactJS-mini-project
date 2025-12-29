import React from "react";

export default function Card({
    content = "Pass the Prop within the Component",
    containerClassName = "bg-orange-500 w-30 h-30 m-[1rem] pl-[10px] pt-[5px] absolute",
    contentClassName = "text-[9px] leading-[10px] text-white"
}){
    return(
        <>
        <div className={containerClassName}>
            <p className={contentClassName}>{content}</p>
        </div>
        </>
    )
}

// export default Card