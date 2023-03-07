import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [fullname, setFullName] = useState("");
    const [CIN, setCIN] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('fullname', fullname);
        formData.append('CIN', CIN);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        await axios.post('http://127.0.0.1:8000/api/director/addSuperAdmin', formData).then(({ data }) => {
            console.log(data.message);
        })
    }

    return (
        <div>
            <form className='form' onSubmit={register}>
                <h1>Register page</h1>
                <input type='text' name='fullname' value={fullname} onChange={(e)=>{setFullName(e.target.value)}} placeholder='Entre the full name' />

                <input type='text' name='CIN' value={CIN} onChange={(e)=>{setCIN(e.target.value)}} placeholder='Entre the CIN' />
                
                <input type='text' name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Entre the Username' />

                <span className='info-text'>Email is required *</span>
                <input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Entre your email' />

                <span className='info-text'>Password is required *</span>
                <input type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Entre your password' />

                <div className='controle'>
                    <button className='btn btn-primary'>Register</button>
                    <a href='/login' className='link'>I already have account</a>
                </div>
            </form>
        </div>
    )
}

export default Register