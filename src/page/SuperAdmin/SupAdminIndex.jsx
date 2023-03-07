import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import  { HiUserAdd } from 'react-icons/hi'
const SupAdminIndex = () => {

    const [AdminFinancieres, setAdminFinancieres] = useState([]);
    const [AdminTechniques, setAdminTechniques] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const affiche = async () => {
            const accesToken = localStorage.getItem("accessToken");
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
            setAdminTechniques(res.data.AdminTechniques)
        }
        affiche();
    }, []);

    return (
        <div className='container'>
            <nav className='navbar'>
                <div className='left-side'>

                    <img className='logo-royal-maroc' src='../royal-maroc.png' />
                    <h5>Bureau d'order</h5>
                    <div className='search-bar'>
                        <AiOutlineSearch className='logo-search' />
                        <input type="text" className='search' placeholder='Rechrcher des fichier' />
                    </div>
                </div>
                <div className='right-side'>
                    <IoMdSettings className='logo-setting' />
                    <FaUserCircle className='logo-profile' />

                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to="/superadmin/addadmin"><button className='btn-add'><HiUserAdd className='logo-add'/> Ajouter un admin</button></NavLink>
                    <NavLink to="/superadmin/addemploye"><button className='btn-add'><HiUserAdd className='logo-add'/> Ajouter un employe</button></NavLink>
                    <NavLink to='/superadmin/arriver' className='childrens'>Arriver</NavLink>
                    <NavLink to='/superadmin/depart' className='childrens'>Depart</NavLink>
                    <NavLink to='/superadmin/administrative' className='childrens'>Adminnistrative</NavLink>
                    <NavLink to='/superadmin/financier' className='childrens'>Financiere</NavLink>
                    <NavLink to='/superadmin/technique' className='childrens'>Technique</NavLink>
                    <NavLink to='/superadmin/employes' className='childrens'>Employes</NavLink>
                </nav>
                <Outlet/>
            </div>

        </div>
    )
}

export default SupAdminIndex