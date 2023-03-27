import React from 'react'

const ResultDetails = () => {
  return (
    <div className="container">
    <h3>STATEMENT OF GRADES</h3>
    <p>NAME :</p> <h6>SK IMTIAZ ALI</h6>
    <p>ENROLLMENT NUMMBER :</p> <h6>12020009029050</h6>
    <p>SEMESTER :</p> <h6>5 th</h6>
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">SUBJECT CODE</th>
      <th scope="col">SUBJECT NAME</th>
      <th scope="col">LETTER GRADE</th>
      <th scope="col">POINTS</th>
      <th scope="col">CREDIT</th>
      <th scope="col">CREDIT POINTS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">PCCS401</th>
      <td>Theory Of Computation</td>
      <td>O</td>
      <td>10.0</td>
      <td>4.0</td>
      <td>40.0</td>
    </tr>
    <tr>
      <th scope="row">PCCCS402</th>
      <td>Computer Netowrks</td>
      <td>O</td>
      <td>10.0</td>
      <td>3.0</td>
      <td>30.0</td>
    </tr>
    <tr>
      <th scope="row">PCCCS403</th>
      <td>Database Management System</td>
      <td>O</td>
      <td>10.0</td>
      <td>3.0</td>
      <td>30.0</td>
    </tr>
    <tr>
      <th scope="row">PCCCS404</th>
      <td>Principles Of Management</td>
      <td>O</td>
      <td>10.0</td>
      <td>2.0</td>
      <td>20.0</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td>TOTAL</td>
      <td>29.0</td>
      <td>284.0</td>
    </tr>
  </tbody>
</table>
<br /> <br /> 


<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>SGPA(ODD) SECOND YEAR FIRST SEMESTER</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>SGPA(EVEN) SECOND YEAR SECOND SEMESTER : 9.99</td>
         <td></td>
      <td></td>
    </tr>
    <br /><br />
    <tr>
      <th scope="row"></th>
      <td>STREAM :</td>
      <td>COMPUTER SCIENCE AND ENGINEERING</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ResultDetails;