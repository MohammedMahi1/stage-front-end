import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FinenDirector = () => {
    const [admin, setAdmin] = useState([]);
    const navigate = useNavigate()
    
    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_dir");
            if (accesToken === undefined || accesToken === null || accesToken === 0) {
                navigate('/director/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/director/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setAdmin(res.data.AdminFinancieres);
        }
        affiche();
    }, []);
    return (

        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={20}>Admins Finencier</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>ID</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Full name</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Email</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>CIN</th>
                    <th></th>
                </tr>
                {
                    admin.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td></td>
                                <td>{e.id}</td>
                                <td></td>
                                <td>{e.fullname}</td>
                                <td></td>
                                <td>{e.email}</td>
                                <td></td>
                                <td>{e.CIN}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default FinenDirector
