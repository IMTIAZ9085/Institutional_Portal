import React from 'react'

const Homepage = () => {
  return (
    <div>
    <div className="container">
    <div className="pp_img">
      <img src="student.jpg" alt="profile_picture" />
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
      <td >SK IMTIAZ ALI</td>
      <td >3rd YEAR</td>
      <td >COMPUTER SCIENCE & ENGINEERING</td>
      <td >A-IOT</td>
      <td >12020009029050</td>
    </tr>
  </tbody>
</table>







{/* ////////////2nd table////////// */}
    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col"  colspan="3">CURRENT SEMESTER</th>
      <th scope="col" colspan="1">SUBJECTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3">5th SEMESTER</td>
      <td colspan="1">THEORY OF COMPUTATION</td>
    </tr>
    <tr>
      <td colspan="3"></td>
      <td colspan="1">COMPUTER NETWORKS</td>
    </tr>
    <tr>
    <td colspan="3"></td>
      <td colspan="1">DATABASE MANAGEMENT SYSTEMS</td>
    </tr>
    <tr>
    <td colspan="3"></td>
      <td colspan="1">PRINCIPLES OF MANAGEMENT</td>
    </tr>
    
  </tbody>
</table>
</div>
    </div>
  )
}

export default Homepage; 