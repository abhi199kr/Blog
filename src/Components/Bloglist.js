import React,{useEffect, useState} from 'react'
import { db } from './Firebase';
import { collection, getDocs } from "firebase/firestore";
const Bloglist = () => {
const [info , setInfo] = useState([]);
const fetchdata=async ()=>{
    
       
        await getDocs(collection(db, "Add"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setInfo(newData);                
                console.log(info, newData);
            })
}
useEffect(()=>{
    fetchdata()
},[])
  return (
    <div>
    <h1>Blog lists</h1>
    <div className="row">
    {
        info.map((e)=>{
            console.log(e.id)
            console.log(e.addBlog.title)
            return(
                <>  
                <div className="col-lg-3 col-md-6 col-12">

               
                <div className="card">
                    <h1>{e.id}</h1>
                    <h1>{e.addBlog.title}</h1>
                    <h1>{e.addBlog.name}</h1>
                    <h2>{e.addBlog.description}</h2>
                    <div className="d-flex gap-5 m-auto">
                        <button className='btn btn-success h1 rounded-5' >Accept</button>
                        <button className='btn btn-danger h1 rounded-5'>Reject</button>
                    </div>
                    </div>
                    </div>
                    {/* <h2>{e.addblog[0]}</h2> */}
                </>
            )
            
        })
    }
    </div>
      
    </div>
  )
}
export default Bloglist
