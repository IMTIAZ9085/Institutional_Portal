import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { subject } from '../data';
import { useState } from 'react';

const Homepage = () => {
  const [sem1,setSem1] = useState(null);
  const [sem2,setSem2] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const num = parseInt(user.year)*2;
  const num2 = num-1;
// if(user==null){
  // window.location.reload();
// }
  useEffect(()=>{ 
    // const sub = subject.filter((currVal)=> currVal.sem===num);
    const sub1 = subject.filter(obj => (obj.sem === num2));
    const sub2 = subject.filter(obj => (obj.sem === num));
    setSem1(sub1);
    setSem2(sub2);
   
},[]);

  const token = localStorage.getItem('authToken');
//   if(!localStorage.getItem("authToken")){
//     navigate("/"); 
// }

  // if(!token){ 
  //  navigate('/login');
  // }
//  console.log(user);


  return (
    <div>
    {user ? 
    <div className="container">
    <div className="pp_img">
      <img src="https://media.istockphoto.com/id/1257355594/vector/man-avatar-icon.jpg?s=612x612&w=0&k=20&c=LZP10v92sFRls54xFnhSrrBRsqta3uDNmC116brPCQY=" alt="profile_picture" />
      <h3 className='text-danger'>YOUR PROFILE</h3>
    </div>
    {/* //1st table */}

    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">YEAR</th>
      <th scope="col">STREAM</th>
      <th scope="col">SECTION</th>
      <th scope="col">ENROLLMENT NO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >{user.username}</td>
      <td >{user.year} YEAR</td>
      <td >{user.stream}</td>
      <td >{user.section}</td>
      <td >{user.enrollment}</td>
    </tr>
  </tbody>
</table>





{/* ////////////2nd table////////// */}
  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col"  colSpan="3">CURRENT SEMESTER</th>
      <th scope="col" colSpan="1">SUBJECTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  
    </tr>
   { sem1 &&  sem1.map((sb)=>{
     return <tr key={sb.sem}>
      <td colSpan="3">{sb.sem}th SEMESTER</td>
      <td colSpan="1">{sb.sub1}</td>
      <td colSpan="1">{sb.sub2}</td>
      <td colSpan="1">{sb.sub3}</td>
      <td colSpan="1">{sb.sub4}</td>
      <td colSpan="1">{sb.sub5}</td>
    </tr>
    })
   }
   { sem2 &&  sem2.map((sb)=>{
     return <tr key={sb.sem}>
      <td colSpan="3">{sb.sem}th SEMESTER</td>
      <td colSpan="1">{sb.sub1}</td>
      <td colSpan="1">{sb.sub2}</td>
      <td colSpan="1">{sb.sub3}</td>
      <td colSpan="1">{sb.sub4}</td>
      <td colSpan="1">{sb.sub5}</td>
    </tr>
    })
   }
    {/* <tr>
    <td colSpan="3"></td>
      <td colSpan="1">DATABASE MANAGEMENT SYSTEMS</td>
    </tr>
    <tr>
    <td colSpan="3"></td>
      <td colSpan="1">PRINCIPLES OF MANAGEMENT</td>
    </tr> */}
    
  </tbody>
</table>
</div>
: 
<div style={{height:"29.3vh"}} className="container not-login">
<h1>LOGIN FIRST</h1>
</div>
    }
    </div>
  )
}

export default Homepage; 