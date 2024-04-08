import React, { useState } from "react";
import "./community.css";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const Community = ()=>{
  const navigate = useNavigate();
  const [passout,setPassout] =  useState(null);
  const [student,setStudent] =  useState(null);

  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  useEffect(()=>{
    const fetchData = async(req,res)=>{
      try{
        const res = await axios.get("/api/auth/passout");
        const res2 = await axios.get("/api/auth/student");
        // console.log(res2);
        // console.log(res.data.user);
        setPassout(res.data.user);
        setStudent(res2.data.user);
        // console.log(passout);
      }catch(e){
        console.log(e);
      }
    }
    fetchData();
    
  },[]);

 async function handleCreateChat(val){
    // e.preventDefault();
    console.log(val);
    console.log("here");
    const data = {
      senderId:user._id,
      receiverId:val
    };

   try{
    const res = await axios.post('/api/chat/newChat',data);
    console.log(res);
    if(res.data.length===0){
      const res1 = await axios.post('/api/chat/',data);
      console.log(res1);
    }
    navigate("/chat");
 
   }catch(e){
    console.log(e);
   }

  }
 
  return (
    <div className="main_community_div">
     <h2 className="c-head">PASSOUT STUDENTS</h2>
     <div className="passout_community_div">
      <table class="fixed_header">
<thead>
  <tr>
    <th>NAME</th>
    <th>PASSOUT YEAR</th>
    <th>LINKEDIN</th>
  </tr>
</thead>
<tbody>
{ passout &&  passout.map((student)=>{
  return <tr key={student._id}>
    <td>{student.username}</td>
    <td>{student.passoutYear}</td>
    <td>
    <a href={student.linkdin}>
    <button  class="btn btn-primary">linkedin</button></a></td> 
    <td><button  class="btn btn-success" onClick={()=>handleCreateChat(student._id)}>Message</button></td>
    
  </tr>;
 })
}
</tbody>
</table>
</div>
 
<div className="student_community_div">
<h3 className="c-head">CURRENT STUDENTS</h3>
 <table class="fixed_header">
<thead>
  <tr>
    <th>NAME</th>
    <th>PASSOUT YEAR</th>
    <th>LINKEDIN</th>
  </tr>
</thead>
<tbody>
{ student &&  student.map((student)=>{
  return <tr key={student._id}>
    <td>{student.username}</td>
    <td>{student.passoutYear}</td>
    <td>
    <a href={student.linkdin}>
    <button  class="btn btn-primary">linkedin</button></a></td> 
    <td><button  class="btn btn-success" onClick={()=>handleCreateChat(student._id)}>Message</button></td>
  </tr>;
 })
}
</tbody>
</table>
</div>
    </div>
  )
;}


export default Community;