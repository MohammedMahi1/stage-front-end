import React from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";


const TechniqueEdit = () => {
    const { id } = useParams();
    const [fullname, setFullName] = useState("");
    const [CIN, setCIN] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [boolean, setBoolean] = useState(false)
    const navigate = useNavigate();

    const editAdmin = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('fullname', fullname);
        formData.append('CIN', CIN);
        formData.append('email', email);
        formData.append('password', password);

        const accesToken = localStorage.getItem("accessToken");
        console.log(accesToken);
        if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
            navigate('/superadmin/login')
        }
        await axios({
            method: "post",
            url: "http://localhost:8000/api/superadmin/editTechniques/" + id,
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        }).then(({ data }) => {
            console.log(data.message);
            setMessage(data.message)
            setBoolean(true)
        })
    }

    return (
        <div>
            <form onSubmit={editAdmin}>

                <br />
                <div className="form form-container">
                    <h1>Modification d'admin technique numero : {id}</h1>
                    <div className='message-controle'>
                        {
                            boolean ?
                                <div className='message'>{message} <NavLink to="/superadmin/technique">Return</NavLink></div>
                                : ""
                        }
                    </div>
                    <div className='form-controle childe-1'>
                        <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='Entrer le nom complete' />
                        <span className='info-text'>Entrer le nom complete d'admin *</span>
                    </div>

                    <div className="form-controle childe-2">
                        <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder='Entrer le CIN' />
                        <span className='info-text'>Entrer le CIN d'admin {'(minimume de charactere est 6)'} *</span>
                    </div>

                    <div className="form-controle childe-3">
                        <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Entrer l'address email" />
                        <span className='info-text'>Entrer l'address mail d'admin *</span>
                    </div>

                    <div className="form-controle childe-4">
                        <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Entrer le mot de pass' />
                        <span className='info-text'>Entre le password d'admin {'(minimume de charactere est 8)'}*</span>
                    </div>
                    <div className="form-controle">
                        <div className='btn-controle'>
                            <button className='btn btn-primary'>Ajouter cette admin </button>
                        </div>
                    </div>
                    <span>{'(*)'} : requis d'entre les informations ici</span>
                </div>

            </form>
        </div>
    )
}

export default TechniqueEdit