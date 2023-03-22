import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DepartComp_emp = () => {
    const [Depart, setDepart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken_emp");
            console.log(accesToken);
            if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
                navigate('/employe/login')
            }
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setDepart(res.data.Depart)
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr>
                    <th colSpan={30}>Les fichiers de depart</th>
                </tr>
                <tr>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Numero</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Objectif</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Expediteur</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Type de class</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Interet</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Employe</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Type de courier</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Date de fichier</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Date de commission</th>
                    <th className='space-header'></th>
                    <th className='bordred-head'>Date specifiee</th>
                    <th className='space-header'></th>
                </tr>
                {
                    Depart.map((e) => {
                        return (
                            <tr>
                                <td></td>
                                <td>{e.numero}</td>
                                <td></td>
                                <td className='ellipsis'><p>{e.objectif}</p></td>
                                <td></td>
                                <td>{e.expediteur}</td>
                                <td></td>
                                <td>{e.type_de_class}</td>
                                <td></td>
                                <td>{e.interet}</td>
                                <td></td>
                                <td>{e.employere}</td>
                                <td></td>
                                <td>{e.type_de_courier}</td>
                                <td></td>
                                <td>{e.date_de_fichier}</td>
                                <td></td>
                                <td>{e.date_de_commission}</td>
                                <td></td>
                                <td>{e.date_specifiee}</td>
                                <td></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default DepartComp_emp