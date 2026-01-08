import { useState } from "react"

export default function Cards({
    className = "h-80 w-80 bg-zinc-500 rounded-xl p-[1rem] text-white relative",
    heading = "Heading of text",
    content = "Type Your content over here"
}) {

    return (
        <>
            <div className={className}>
                <div className="heading">
                    <h1 className="text-2xl">{heading}</h1>
                </div>
                <div className="line w-[100%] h-[1px] bg-white"></div>
                <div className="content">{content}</div>
                <div className="status absolute bottom-[1rem] flex items-center gap-[10rem]">
                    <button className="done  h-[1.5rem] w-[4rem] rounded-xl bg-green-500 hover:bg-green-700">Done</button>
                    <button className="clear  h-[1.5rem] w-[4rem] rounded-xl bg-red-500 hover:bg-red-700">Clear</button>
                </div>
            </div>
        </>
    )
}