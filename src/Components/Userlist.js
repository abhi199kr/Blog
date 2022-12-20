import React,{useEffect, useState} from 'react'
import { db } from './Firebase';
import { collection, getDocs } from "firebase/firestore";

const Userlist = () => {
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
    <h1>user lists</h1>
    {
        info.map((e)=>{
            console.log(e.id)
            console.log(e.addBlog.title)
            return(
                <>
                    <h1>{e.id}</h1>
                    <h1>{e.addBlog.title}</h1>
                    <h1>{e.addBlog.name}</h1>
                    <h2>{e.addBlog.description}</h2>
                   
                    {/* <h2>{e.addblog[0]}</h2> */}
                </>
            )
            
        })
    }
      
    </div>
  )
}

export default Userlist
