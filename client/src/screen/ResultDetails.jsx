import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { subject,subjectResult } from '../data';

const ResultDetails = () => {
  const user = useSelector((state) => state.user.currentUser);
  const {state} = useLocation();
  const [sem1,setSem1] = useState(null);
  const [semNo,setSemNo] = useState(null);
  const [cgpa,setCgpa] = useState(null);

  // console.log(state);
  useEffect(()=>{ 
    // const sub = subject.filter((currVal)=> currVal.sem===num);
    const num = parseInt(state.semVal);
    const sub1 = subject.filter(obj => (obj.sem === num));
    const subResult = subjectResult.filter(obj => (obj.sem === num));
    // console.log(subResult);
    const totalNo = subResult[0].sub1*subResult[0].sub1Credit + subResult[0].sub2*subResult[0].sub2Credit + subResult[0].sub3*subResult[0].sub3Credit + subResult[0].sub4*subResult[0].sub4Credit + subResult[0].sub5*subResult[0].sub5Credit + subResult[0].sub6*subResult[0].sub6Credit; 
    const totalCredit = subResult[0].sub1Credit + subResult[0].sub2Credit + subResult[0].sub3Credit + subResult[0].sub4Credit + subResult[0].sub5Credit + subResult[0].sub6Credit; 
    console.log(totalNo/totalCredit);
    setCgpa({
      total:totalNo,
      totalC:totalCredit,
      sgpa:totalNo/totalCredit
    })
    setSem1(sub1[0]);
    setSemNo(subResult[0]);
   
},[]);

  return (
    <div className="container">
    <h3>STATEMENT OF GRADES</h3>
    <p>NAME :</p> <h6>{user.username}</h6>
    <p>ENROLLMENT NUMMBER :</p> <h6>{user.enrollment}</h6>
    <p>SEMESTER :</p> <h6>{state.semVal}</h6>
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
  {
    sem1 &&  <> 
      <tr>
      <th scope="row">{sem1.sub1Code}</th>
      <td>{sem1.sub1}</td>
      <td>{semNo.sub1>= 9 ? "O":(semNo.sub1>=7?"A":"B")}</td>
      <td>{semNo.sub1}.0</td>
      <td>{semNo.sub1Credit}.0</td>
      <td>{semNo.sub1*semNo.sub1Credit}.0</td>
    </tr>

    <tr>
      <th scope="row">{sem1.sub2Code}</th>
      <td>{sem1.sub2}</td>
      <td>{semNo.sub2>= 9 ? "O":(semNo.sub2>=7?"A":"B")}</td>
      <td>{semNo.sub2}.0</td>
      <td>{semNo.sub2Credit}.0</td>
      <td>{semNo.sub2*semNo.sub2Credit}.0</td>
    </tr>

    <tr>
      <th scope="row">{sem1.sub3Code}</th>
      <td>{sem1.sub3}</td>
      <td>{semNo.sub3>= 9 ? "O":(semNo.sub3>=7?"A":"B")}</td>
      <td>{semNo.sub3}.0</td>
      <td>{semNo.sub3Credit}.0</td>
      <td>{semNo.sub3*semNo.sub3Credit}.0</td>
    </tr>

    <tr>
      <th scope="row">{sem1.sub4Code}</th>
      <td>{sem1.sub4}</td>
      <td>{semNo.sub4>= 9 ? "O":(semNo.sub4>=7?"A":"B")}</td>
      <td>{semNo.sub4}.0</td>
      <td>{semNo.sub4Credit}.0</td>
      <td>{semNo.sub4*semNo.sub4Credit}.0</td>
    </tr>

    <tr>
      <th scope="row">{sem1.sub5Code}</th>
      <td>{sem1.sub5}</td>
      <td>{semNo.sub5>= 9 ? "O":(semNo.sub5>=7?"A":"B")}</td>
      <td>{semNo.sub5}.0</td>
      <td>{semNo.sub5Credit}.0</td>
      <td>{semNo.sub5*semNo.sub5Credit}.0</td>
    </tr>

    <tr>
      <th scope="row">{sem1.sub6Code}</th>
      <td>{sem1.sub6}</td>
      <td>{semNo.sub6>= 9 ? "O":(semNo.sub6>=7?"A":"B")}</td>
      <td>{semNo.sub6}.0</td>
      <td>{semNo.sub6Credit}.0</td>
      <td>{semNo.sub6*semNo.sub6Credit}.0</td>
    </tr>

    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
      <td>{cgpa.totalC}.0</td>
      <td>Total: {cgpa.total}.0</td>
    </tr>

    </>
    
  }
    
   
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
      <td>SGPA {user.year} YEAR {state.semVal} SEMESTER : 7.88</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      {/* {cgpa.total && cgpa.totalC &&
      <td>SGPA(EVEN) SECOND YEAR SECOND SEMESTER :{(cgpa.total/cgpa.totalC).toFixed(2)} </td>} */}
         <td></td>
      <td></td>
    </tr>
    <br /><br />
    <tr>
      <th scope="row"></th>
      <td>STREAM : {user.stream}</td>
      <td>COMPUTER SCIENCE AND ENGINEERING</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default ResultDetails;