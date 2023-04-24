import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Homepage = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser.userD);
// if(user==null){
  // window.location.reload();
// }
//   useEffect(()=>{

//       window.location.reload();

//     // if(localStorage.getItem("authToken")){
//     //       navigate("/");
//     // }
// },[navigate]);

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
    {token && user ? 
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
      <td colSpan="3">5th SEMESTER</td>
      <td colSpan="1">THEORY OF COMPUTATION</td>
    </tr>
    <tr>
      <td colSpan="3"></td>
      <td colSpan="1">COMPUTER NETWORKS</td>
    </tr>
    <tr>
    <td colSpan="3"></td>
      <td colSpan="1">DATABASE MANAGEMENT SYSTEMS</td>
    </tr>
    <tr>
    <td colSpan="3"></td>
      <td colSpan="1">PRINCIPLES OF MANAGEMENT</td>
    </tr>
    
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