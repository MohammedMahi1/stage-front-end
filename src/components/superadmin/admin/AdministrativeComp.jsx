import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdministrativeComp = () => {
    const [AdminAdministratives, setAdminAdministratives] = useState([]);
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
            setAdminAdministratives(res.data.AdminAdministratives)
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr className='header'>
                    <th colSpan={12}>Admins Administratives</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th className='bordred-head'>ID</th>
                    <th></th>
                    <th className='bordred-head'>Full name</th>
                    <th></th>
                    <th className='bordred-head'>Email</th>
                    <th></th>
                    <th className='bordred-head'>CIN</th>
                    <th></th>
                </tr>
                {
                    AdminAdministratives.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td><input type="checkbox" name={e.id} id="" /></td>
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

export default AdministrativeComp