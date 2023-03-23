import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddSupDirector = () => {
    const [fullName, setFullName] = useState('');
    const [CIN, setCIN] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const addSup = async (e) => {
        const accesToken = localStorage.getItem("accessToken_dir");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/director/login')
        }
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', fullName);
        formData.append('CIN', CIN);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        
        await axios({
            method: 'post',
            url: 'http://localhost:8000/api/director/addSuperAdmin',
            data: formData,
            headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
        },  
        }).then(({ data }) => {
            console.log(data.message);
        })
        navigate('/director/superadmin');
    }
    return (
        <div>
            <form onSubmit={addSup}>
                <div className='form form-container'>
                    <div className="full-childe">
                        <div className='form-controle'>
                            <input type="text" name="expediteur" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Entrer le nom complete" />
                        </div>
                        
                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={CIN} onChange={(e) => setCIN(e.target.value)} placeholder="Entrer le CIN" />
                        </div>
                        
                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Entrer le username" />
                        </div>
                        
                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Entrer l'email" />
                        </div>
                        
                        <div className='form-controle'>
                            <input type="text" name="destinataire" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrer le mot de pass" />
                        </div>
                        <div className="form-controle">
                            <button className='btn'>Ajouter cette fichier</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSupDirector