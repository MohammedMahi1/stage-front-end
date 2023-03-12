import axios from 'axios';
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const EmployeDelete = ({id}) => {
const navigate = useNavigate();
const e = id
const deleteEmploye = async() => {
    const accesToken = localStorage.getItem("accessToken");
  console.log(accesToken);
  if (accesToken === undefined || accesToken === null || accesToken === 0 || accesToken === false) {
      navigate('/superadmin/login')
  }
  await axios({
    method: "delete",
    url: "http://localhost:8000/api/superadmin/deleteEmploye/" + e,
    headers: {
        "Accept": "application/json",
        "Authorization": 'Bearer ' + accesToken
    }
  }).then(({data}) =>{
    alert(data.message);
    window.location.reload(false);
  })  
  }
  return (
    <div>
        <RiDeleteBin7Fill className='edit-icon' onClick={()=> deleteEmploye()}>Delete</RiDeleteBin7Fill>
    </div>
  )
}

export default EmployeDelete