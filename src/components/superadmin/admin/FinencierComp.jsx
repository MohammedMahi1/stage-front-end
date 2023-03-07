import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FinencierComp = () => {
    const [AdminFinancieres, setAdminFinancieres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken");
            console.log(accesToken);
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/superadmin/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/superadmin/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setAdminFinancieres(res.data.AdminFinancieres)
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={7}>Admins Finencieres</th>
                </tr>
                <tr>
                <th></th>
                    <th>ID</th>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>CIN</th>
                </tr>
                {
                    AdminFinancieres.map((e) => {
                        return (
                            <tr>
                                <td><input type="checkbox" name={e.id} /></td>
                                <td>{e.id}</td>
                                <td>{e.fullname}</td>
                                <td>{e.email}</td>
                                <td>{e.CIN}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default FinencierComp