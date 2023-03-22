import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Show = ({ person }) => {
    const menu = useRef(null);
    const toast = useRef(null);

    const navigate = useNavigate()
    const navigation = () =>{
        if(person === 'employe'){
            navigate('/employe')
        }else if (person === 'siperadmin'){
            navigate('/superadmin')
        }
        else if (person === 'president'){
            navigate('/president')
        }else{
            navigate('/')
        }
    }
    const logout = () => {
        if (person === "employe") {
            const accesToken = localStorage.getItem("accessToken_emp");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/employe/login')
            }
            axios({
                method: 'delete',
                url: 'http://localhost:8000/api/employe/logout',
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            localStorage.removeItem("accessToken_emp");
            navigate('/employe/login')
        }
        else if (person === "superadmin") {
            const accesToken = localStorage.getItem("accessToken");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/superadmin/login')
            }
            axios({
                method: 'delete',
                url: 'http://localhost:8000/api/superadmin/logout',
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            localStorage.removeItem("accessToken");
            navigate('/superadmin/login')
            
        }else if (person === "president"){
        
            const accesToken = localStorage.getItem("accessToken_pre");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/president/login')
            }
            axios({
                method: 'delete',
                url: 'http://localhost:8000/api/president/logout',
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            localStorage.removeItem("accessToken_pre");
            navigate('/president/login')
        }
        else {
            console.log("error");
        }
    }

    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Profile',
                    icon: 'pi pi-user',
                    command: () => {
                    navigation()
                    }
                },
                {
                    label: 'Se Déconnecter',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        logout()
                    }
                }
            ]
        },
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu className='menu' model={items} popup ref={menu} />
            <div className='border-avatar'>
                <Avatar icon="pi pi-user" style={{ backgroundColor: '#fafafa', color: '#272727' }} shape="circle" onClick={(e) => menu.current.toggle(e)} />
            </div>
        </div>
    )
}

export default Show