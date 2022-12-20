import React from 'react'
import { Link } from 'react-router-dom'

const UserHeader = () => {
  return (
    <div className='bg-dark text-light'>
   
    <div className="d-flex p-3">
     <div className='d-flex flex-grow-1'>
    <Link to="/"><button className='btn btn-info'>Blogger</button></Link>
     </div>
     <div className='d-flex gap-2  justify-content-end'>
        <Link to="/signup"> <button className='btn btn-info'>USER</button></Link>
       
     </div>
    </div>
       
     </div>
  )
}

export default UserHeader
