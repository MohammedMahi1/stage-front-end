import React from 'react'
import { BiError } from 'react-icons/bi';
const ErrPage = () => {
  return (
    <div className='errPage'>
    <BiError className='errIcon' width={'200px'}/>
      <h1>Error 404</h1>
      <span className='errInfo'>Page not found</span>
    </div>
  )
}

export default ErrPage;