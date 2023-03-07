import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SupAdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('')

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
            error_list: [],
        }
        const auth = await axios({
            method: "post",
            data: {
                username: data.username,
                password: data.password,
            },
            url: "http://localhost:8000/api/superadmin/login",
            headers: {
                "Accept": "application/json",
            }
        })
        const res = await auth.data
        localStorage.setItem("accessToken", res.token)
        if (res) {
            navigate('/superadmin/')
        } else {
            console.log(res.message);
        }

    }
    useEffect(() => {
        const login = async () => {
            const data = {
                username: username,
                password: password,
                error_list: [],
            }
            const auth = await axios({
                method: "post",
                data: {
                    username: data.username,
                    password: data.password,
                },
                url: "http://localhost:8000/api/superadmin/login",
                headers: {
                    "Accept": "application/json",
                }
            })
            const res = await auth.data
            const accesToken = localStorage.getItem("accessToken");
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/superadmin/login')
            } else if (accesToken === res.token) {
                navigate('/superadmin/');
            }
        }
        login();
    }, [])
    return (
        <div>

            <form onSubmit={loginSubmit} className='form'>
                <h1>Login page</h1>
                <input type='text' name='username' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Entre your username' />

                <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Entre your password' />
                <div className='controle'>
                    <button type="submit" className='btn btn-primary'>Login</button>
                    <a href='/register' className='link'>I don't have account</a>
                </div>
            </form>
        </div>
    )
}



export default SupAdminLogin