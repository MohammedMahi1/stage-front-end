import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FinenLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('')

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
            error_list: [],
        }
        const auth = await axios({
            method: "post",
            data: {
                email: data.email,
                password: data.password,
            },
            url: "http://localhost:8000/api/admin/finenciere/login",
            headers: {
                "Accept": "application/json",
            }
        })
        const res = await auth.data
        localStorage.setItem("accessToken_finenciere", res.token)
        navigate('/finenciere/');
    }
    useEffect(() => {
        const login = async () => {
            const accesToken = localStorage.getItem("accessToken_finenciere");
            if (accesToken === "undefined" || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/finenciere/login')
            } else if (accesToken !== 'undefined') {
                navigate('/finenciere/');
            }
        }
        login();
    }, [])
    return (
        <div className='container-login'>
<div className='container-form'>
            <form onSubmit={loginSubmit} className='form'>
                <h1>Login</h1>
                <input className='input' type='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Entrer l'address email" />

                <input className='input' type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Entre le mot de pass' />
                <div className='controle'>
                    <button type="submit" className='btn dark-btn'>Se connecter</button>
                </div>
            </form>
            <div className='contexte-login'>
            <img className='logo-royal-maroc-login' src='../royal-maroc.png' />
                <h2>Concurrence Taourirt</h2>
                <span>Login page de directeure de bureau d'order</span>
            </div>
</div>
        </div>
    )
}



export default FinenLogin