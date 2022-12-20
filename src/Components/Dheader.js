import React from 'react'
import { Link } from 'react-router-dom'

const Dheader = () => {
  return (
    <div className='bg-dark text-light'>
   
   <div className="d-flex p-3">
    <div className='d-flex flex-grow-1'><button className='btn btn-info'>Blogger</button></div>
    <div className='d-flex gap-2  justify-content-end'>
       <Link to="/signup"> <button className='btn btn-info'>Sign up</button></Link>
       <Link to="/login"> <button  className='btn btn-info'>login</button></Link>
    </div>
   </div>
      
    </div>
  )
}

export default Dheader
