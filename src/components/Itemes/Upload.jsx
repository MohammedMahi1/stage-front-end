import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};
const Upload = ({ person }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (person === "employe") {
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
        setImageUrl(res.data.datas.image_url)
      }
      affiche();
    }

    // -------------------------------------------------------

    else if (person === 'superadmin') {

      const accesToken = localStorage.getItem("accessToken");
      if (accesToken === undefined || accesToken === null || accesToken === 0) {
        navigate('/superadmin/login')
      }
      const affiche = async () => {
        const res = await axios({
          method: "get",
          url: "http://localhost:8000/api/superadmin/",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        })
        setImageUrl(res.data.datas.image_url)
        console.log(res.data.datas);
      }
      affiche();
    }

    // -------------------------------------------------------

    else if (person === 'president') {

      const accesToken = localStorage.getItem("accessToken_pre");
      if (accesToken === undefined || accesToken === null || accesToken === 0) {
        navigate('/president/login')
      }
      const affiche = async () => {
        const res = await axios({
          method: "get",
          url: "http://localhost:8000/api/president/",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        })
        setImageUrl(res.data.datas.image_url)
        console.log(res.data.datas);
      }
      affiche();
    }
    else if (person === 'director') {

      const accesToken = localStorage.getItem("accessToken_dir");
      if (accesToken === "undefined" || accesToken === null || accesToken === 0) {
        navigate('/director/login')
      }
      const affiche = async () => {
        const res = await axios({
          method: "get",
          url: "http://localhost:8000/api/director/",
          headers: {
            "Accept": "application/json",
            "Authorization": 'Bearer ' + accesToken
          }
        })
        setImageUrl(res.data.datas.image_url)
        console.log(res.data.datas);
      }
      affiche();
    }
  }, []);

  const addProfileImage = async (e) => {
    if (person === 'superadmin') {
      e.preventDefault();

      const formData = new FormData();

      formData.append('image_profile', image);

      const accesToken = localStorage.getItem("accessToken");

      await axios({
        method: "post",
        url: "http://localhost:8000/api/superadmin/addImageProfile",
        data: formData,
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then(({ data }) => {
        console.log(data.message);
        window.location.reload(false);
      })
    }

    // -------------------------------------------------------

    else if (person === 'employe') {
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
        window.location.reload(false);
      })
    }

    // -------------------------------------------------------

    else if (person === 'president') {
      e.preventDefault();

      const formData = new FormData();

      formData.append('image_profile', image);

      const accesToken = localStorage.getItem("accessToken_pre");

      await axios({
        method: "post",
        url: "http://localhost:8000/api/president/addImageProfile",
        data: formData,
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then(({ data }) => {
        console.log(data.message);
        window.location.reload(false);
      })
    }
    
    else if (person === 'director') {
      e.preventDefault();

      const formData = new FormData();

      formData.append('image_profile', image);

      const accesToken = localStorage.getItem("accessToken_dir");

      await axios({
        method: "post",
        url: "http://localhost:8000/api/director/addImageProfile",
        data: formData,
        headers: {
          "Accept": "application/json",
          "Authorization": 'Bearer ' + accesToken
        }
      }).then(({ data }) => {
        console.log(data.message);
        window.location.reload(false);
      })
    }
    
    
    else {
      console.log('error');
    }
  }
  const handlechange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div>
      <Avatar className='img' image={imageUrl} icon="pi pi-user" style={{ width: '180px', height: '180px', background: "#919191", color: "#fafafa" }} shape="circle" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={addProfileImage}>
            <input type="file" name="image_profile" onChange={handlechange} className='profile-add-img' />
            <button type='submit' className='btn-add-image'>Confirmer</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Upload