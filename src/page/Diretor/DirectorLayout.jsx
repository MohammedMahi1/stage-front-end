import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiAdminFill, RiFolderAddFill } from 'react-icons/ri'
import { IoIosArchive } from 'react-icons/io'
import { NavLink, Outlet } from 'react-router-dom'
import Show from '../../components/Itemes/Show'
import { HiUserAdd } from 'react-icons/hi'

const DirectorLayout = () => {
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
                    <NavLink to="/director/addSuperadmin"><button className='btn-add'><HiUserAdd className='logo-icon' /> Ajouter un{'(e)'} director de bureau d'order</button></NavLink>
                    <NavLink to='/director/superadmin' className='childrens'><IoIosArchive className='logo-icon' />Admin de bureau d'order</NavLink>
                    <NavLink to='/director/administrative' className='childrens'><RiAdminFill className='logo-icon' />Adminnistrative</NavLink>
                    <NavLink to='/director/finencier' className='childrens'><RiAdminFill className='logo-icon' />Financiere</NavLink>
                    <NavLink to='/director/technique' className='childrens'><RiAdminFill className='logo-icon' />Technique</NavLink>
                    <NavLink to='/director/employe' className='childrens'><BsFillPersonFill className='logo-icon' />Employes</NavLink>
                </nav>
                <Outlet />
            </div>

        </div>
    )
}

export default DirectorLayout