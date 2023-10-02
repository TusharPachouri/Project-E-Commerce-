import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:8080/api/register/user', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.warn(result)
        if (result) {
            navigate('/');
        }

    }
    return (
        <div className='sign-up'>
            <h1>Register:</h1>
            <input className='input-box' type='text'
                value={name} onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name' />
            <input className='input-box' type='text'
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email' />
            <input className='input-box' type='password'
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter Password' />
            <button onClick={collectData} className='input-btn' type='button' >Sign Up</button>
        </div>
    )
}

export default SignUp;