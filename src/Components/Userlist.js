import React,{useEffect, useState} from 'react'
import { db } from './Firebase';
import { collection, getDocs } from "firebase/firestore";

const Userlist = () => {
    let i=1
const [info , setInfo] = useState([]);
const fetchdata=async ()=>{
    
       
        await getDocs(collection(db, "Users"))
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
    <div className='container'>
    <h1>user lists</h1>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {
       
        info.map((e)=>{
            return(
                <>
                    <tr>
                        <td>{i++}</td>
                        <td>{e.user.name}</td>
                        <td>{e.user.email}</td>
                        <td>{e.user.pass}</td>
                        
                    </tr>
                </>
            )
        })
    }
    </tbody>
    </table>
    {/* {
        info.map((e)=>{
            console.log(e.id)
            console.log(e.user.name)
            return(
                <>
                    <h1>{e.user.name}</h1>
                    {/* <h1>{e.addBlog.title}</h1>
                    <h1>{e.addBlog.name}</h1>
                    <h2>{e.addBlog.description}</h2> */}
                   
                    {/* <h2>{e.addblog[0]}</h2> */}
                {/* </>
            )
            
        })
    } */} 
      
    </div>
  )
}

export default Userlist
