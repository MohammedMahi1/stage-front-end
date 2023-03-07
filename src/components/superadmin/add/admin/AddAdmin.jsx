import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
    const [fullname, setFullName] = useState("");
    const [CIN, setCIN] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type,setType] = useState("Administrative");
    const navigate = useNavigate();

    const addAdmin = async (e) => {

        e.preventDefault();
        const formData = new FormData();

        formData.append('fullname', fullname);
        formData.append('CIN', CIN);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        
        const accesToken = localStorage.getItem("accessToken");
        console.log(accesToken);
        if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
            navigate('/superadmin/login')
        }
        if(type === 'Administrative'){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addAdministrative",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            }).then(({ data }) => {
                console.log(data.message);
            })
        }else if(type === "Financiere"){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addFinancieres",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            }).then(({ data }) => {
                console.log(data.message);
            })
        }else if(type === "Technique"){
            await axios({
                method: "post",
                url: "http://localhost:8000/api/superadmin/addTechniques",
                data: formData,
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            }).then(({ data }) => {
                console.log(data.message);
            })
        }else{
            console.log('error condition');
        }
    }

    return (
        <div className=''>
            <form onSubmit={addAdmin}>
                <br />
                <div className="form form-container">
                    <h1>Ajouter un admin</h1>
                    <div className='form-controle childe-1'>
                        <input type='text' name='fullname' value={fullname} onChange={(e) => { setFullName(e.target.value) }} placeholder='Entrer le nom complete' />
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-2">
                        <input type='text' name='CIN' value={CIN} onChange={(e) => { setCIN(e.target.value) }} placeholder='Entrer le CIN' />
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-3">
                        <input type='text' name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Entrer le Username' />
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-4">
                        <input type='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Entrer l'address email"/>
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-5">
                        <input type='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Entrer le mot de pass' />
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-6">
                        <select className='selector' value={type} onChange={(e)=>{setType(e.target.value)}}>
                            <option value="Administrative">Administrative</option>
                            <option value="Financiere">Financiere</option>
                            <option value="Technique">Technique</option>
                        </select>
                        <span className='info-text'>*</span>
                    </div>
                    <div className="form-controle childe-7">
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

export default AddAdmin