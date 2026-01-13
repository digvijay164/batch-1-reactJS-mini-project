import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const { setUser } = useContext(userContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e)=> setUserName( e.target.value )}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setpassword( e.target.value )}
                />
                <button onClick={handleSubmit} >Submit</button>
            </div>
        </>
    )
}