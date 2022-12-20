import React from 'react'
import "./Dcontent.css"
import { Link } from 'react-router-dom'

const Dcontent = () => {
  return (
    <div className='bg'>
      <div className="container text-center p-5">
        <h1 className='text-light text-center'>Publish your passions, your way</h1>
       
        <p className='text-light text-center h5'>Create a unique and beautiful blog easily.</p>
        {/* <div className='py-2 my-3 btn btn-warning rounded text-light cr '>CREATE YOUR BLOG</div> */}
     <Link to="/add">   <button className='rounded bg1 py-2 px-2 text-light cre m-5 btn btn-info'>Create your blog</button>
</Link>

        <div>
            <img className='img-fluid' src="https://images.unsplash.com/photo-1671427801641-187826edfb2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60
            "
           alt="52621" />
        </div>
    </div>
      
      
    </div>
  )
}

export default Dcontent
