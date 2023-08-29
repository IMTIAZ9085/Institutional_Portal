import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Result = () => {
   const navigate = useNavigate();
   const [sem, setSem] = useState();

   const handleResultData = () => {
    const semVal = sem;
       navigate('/result_data',{state:{
        semVal,
   }})
};

  return (
    <div className="result-div" style={{marginTop:"3rem",marginBottom:"2rem",marginLeft:"35rem"}}>
      <p>SELECT YOUR SEMESTER</p>
  <select
  onChange={(e)=>{setSem(e.target.value)}}
   name="sem-option">
  <option>Select Semester</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</select>
{/* <Link to="result_data" state={{semVal:4}}>click here</Link> */}
<button style={{marginLeft:"1rem"}} onClick={handleResultData}>Submit</button>
<br /><br />
    </div>
  )
}

export default Result;