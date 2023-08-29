import React, { useState } from "react";
import "./community.css";
import { useEffect } from "react";
import axios from "axios";

const Community = ()=>{
  const [passout,setPassout] =  useState(null);
  const [student,setStudent] =  useState(null);

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

  return (
    <div className="main_community_div">
     <h2 className="c-head">PASSOUT STUDENTS</h2>
     <div className="passout_community_div">
      <table class="fixed_header">
<thead>
  <tr>
    <th>NAME</th>
    <th>PASSOUT YEAR</th>
    <th>LINKDIN</th>
  </tr>
</thead>
<tbody>
{ passout &&  passout.map((student)=>{
  return <tr key={student._id}>
    <td>{student.username}</td>
    <td>{student.passoutYear}</td>
    <td>
    <a href={student.linkdin}>
    <button  class="btn btn-primary">linkdin</button></a></td> 
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
    <th>LINKDIN</th>
  </tr>
</thead>
<tbody>
{ student &&  student.map((student)=>{
  return <tr key={student._id}>
    <td>{student.username}</td>
    <td>{student.passoutYear}</td>
    <td>
    <a href={student.linkdin}>
    <button  class="btn btn-primary">linkdin</button></a></td> 
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