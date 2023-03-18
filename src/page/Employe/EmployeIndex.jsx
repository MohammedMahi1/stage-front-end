import { Avatar } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const EmployeIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [CIN, setCIN] = useState("");
    const [interet, setInteret] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    
    
    
    
    
    
    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/employe/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setCIN(res.data.datas.CIN)
            setInteret(res.data.datas.interet)
            setType(res.data.datas.type)
            setImageUrl(res.data.datas.image_url)
        }
        affiche();
    }, []);
    const addProfileImage = async(e) => {
        
        e.preventDefault();
        
        const formData = new FormData();
        
        formData.append('image_profile', image);
        
        const accesToken = localStorage.getItem("accessToken_emp");
        
        await axios({
            method: "post",
            url: "http://localhost:8000/api/employe/addImageProfile",
            data: formData,
            headers: {
                "Accept": "application/json",
                "Authorization": 'Bearer ' + accesToken
            }
        }).then(({ data }) => {
            console.log(data.message);
        })
    }
const handlechange = (e) => {
    setImage(e.target.files[0])
}
const onClose = () => {
    setImage(null)
}
const onCrop = view => {
    setImage(view)
}
    console.log(imageUrl);
    //last time i was here
    return (
        <div className='profile-container'>
            <div className="profile-controle">
                <div className="profile-header">
                    <div className="profile-img-controle">
                    <div className='img-container'>
                    <Avatar className='img' onCrop={onCrop} onClose={onClose} src={imageUrl}/>
                    </div>
                        <p className='profile-info-img'>Personnalisez votre compte avec une photo.</p>
                        <form onSubmit={addProfileImage}>
                        <input type="file" onChange={handlechange} name="profile-img" className='profile-add-img' />
                        <button className='btn-add-image'>Add image</button>
                        </form>
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre nom complete</p>
                        <p >{fullname}</p>
                    </div>
                </div>
            </div>

            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>Profile info</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre CIN</p>
                        <p >{CIN}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre interet</p>
                        <p >{interet}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre classe</p>
                        <p >{type}</p>
                    </div>
                </div>
            </div>
            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>Account info</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre email</p>
                        <p >{email}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EmployeIndex