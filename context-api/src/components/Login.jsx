import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(userContext)

    const handleClick = (e)=>{
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <>
            <div className="">
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="user name" 
                />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password" 
                />
                <button onClick={handleClick}>Submit</button>
            </div>
        </>
    )
}