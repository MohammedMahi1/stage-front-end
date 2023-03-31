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
    const navigation = () => {
        //----------------------------------------
        if (person === 'employe') {
            navigate('/employe')
        }

        //----------------------------------------

        else if (person === 'siperadmin') {
            navigate('/superadmin')
        }

        //----------------------------------------

        else if (person === 'president') {
            navigate('/president')
        }

        //----------------------------------------

        else if (person === 'director') {
            navigate('/director')
        }

        //----------------------------------------

        else if (person === 'administrative') {
            navigate('/administrative')
        }

        //----------------------------------------

        else {
            navigate('/404');
        }
    }

    //############################### Function logout ################################//

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

        //----------------------------------------

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

        }

        //----------------------------------------

        else if (person === "president") {
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

        //----------------------------------------

        else if (person === "director") {

            const accesToken = localStorage.getItem("accessToken_dir");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/director/login')
            }
            axios({
                method: 'delete',
                url: 'http://localhost:8000/api/director/logout',
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            localStorage.removeItem("accessToken_dir");
            navigate('/director/login')
        }
        
        //----------------------------------------
        
        else if (person === "administrative") {

            const accesToken = localStorage.getItem("accessToken_administrative");
            if (accesToken == "undefined" || accesToken === null || accesToken === 0) {
                navigate('/administrative/login')
            }
            axios({
                method: 'delete',
                url: 'http://localhost:8000/api/admin/administrative/logout',
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })

            localStorage.removeItem("accessToken_administrative");
            navigate('/administrative/login')
        }
        else {
            console.log("error of a guard you use in component show.jsx !!");
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