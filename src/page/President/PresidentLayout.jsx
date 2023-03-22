import React from 'react'
import { BsFileEarmarkArrowDownFill, BsFileEarmarkArrowUpFill, BsFillPersonFill } from 'react-icons/bs'
import { RiAdminFill } from 'react-icons/ri'
import { TbChairDirector } from 'react-icons/tb'
import { IoIosArchive } from 'react-icons/io'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Show from '../../components/Itemes/Show'

const PresidentLayout = () => {
const navigate = useNavigate();
    const accesToken = localStorage.getItem("accessToken_pre");
    if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
        navigate('/president/login')
    }
    return (

        <div className='container'>
            <nav className='navbar'>
                <div className='left-side'>

                    <img className='logo-royal-maroc' src='../royal-maroc.png' />
                    <h5>Bureau d'order</h5>
                    <div className='search-bar'>
                        <i className="pi pi-search logo-search"></i>
                        <input type="text" className='search' placeholder='Rechrcher des fichier avec le : numero, interet, employer' />
                    </div>
                </div>
                <div className='right-side'>
                    <Show person={"president"} />
                </div>
            </nav>

            <div className='grid-container'>
                <nav className='left-bar'>
                    <NavLink to='/president/arriver' className='childrens'><BsFileEarmarkArrowDownFill className='logo-icon' />Arriver</NavLink>
                    <NavLink to='/president/depart' className='childrens'><BsFileEarmarkArrowUpFill className='logo-icon' />Depart</NavLink>
                    <NavLink to='/president/directeur' className='childrens'><TbChairDirector className='logo-icon' />Directeur</NavLink>
                    <NavLink to='/president/superadmin' className='childrens'><IoIosArchive className='logo-icon' />Admin de bureau d'order</NavLink>
                    <NavLink to='/president/administrative' className='childrens'><RiAdminFill className='logo-icon' />Adminnistrative</NavLink>
                    <NavLink to='/president/finencier' className='childrens'><RiAdminFill className='logo-icon' />Financiere</NavLink>
                    <NavLink to='/president/technique' className='childrens'><RiAdminFill className='logo-icon' />Technique</NavLink>
                    <NavLink to='/president/employe' className='childrens'><BsFillPersonFill className='logo-icon' />Employes</NavLink> 
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default PresidentLayout