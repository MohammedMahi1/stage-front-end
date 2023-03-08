import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArriverComp = () => {
    const [Arriver, setArriver] = useState([]);
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
            setArriver(res.data.Arriver)
        }
        affiche();
    }, []);
    return (
        <div>
            <table className='table'>
                <tr>
                    <th colSpan={20}>Les fichiers d'arriver</th>
                </tr>
                <tr>
                    <th></th>
                    <th className='bordred-head'>Numero</th>
                    <th></th>
                    <th className='bordred-head'>Date de fichier</th>
                    <th></th>
                    <th className='bordred-head'>Objectif</th>
                    <th></th>
                    <th className='bordred-head'>Expediteur</th>
                    <th></th>
                    <th className='bordred-head'>Destinataire</th>
                    <th></th>
                    <th className='bordred-head'>Interet</th>
                    <th></th>
                    <th className='bordred-head'>Employe</th>
                    <th></th>
                </tr>
                {
                    Arriver.map((e) => {
                        return (
                            <tr>
                            <td></td>
                                <td>{e.numero}</td>
                                <td></td>
                                <td>{e.date_de_fichier}</td>
                                <td></td>
                                <td>{e.objectif}</td>
                             <td></td>   
                                <td>{e.expediteur}</td>
                                <td></td>
                                <td>{e.destinataire}</td>
                                <td></td>
                                <td>{e.interet}</td>
                                <td></td>
                                <td>{e.employere}</td>
                            
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ArriverComp