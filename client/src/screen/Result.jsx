import React from 'react';
import { useNavigate } from 'react-router-dom';


const Result = () => {
   const navigate = useNavigate();

   const handleResultData = () => {
       navigate('/result_data');
};

  return (
    <div>
      <p>SELECT YOUR SEMESTER</p>
  <select name="sem-option">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
</select>
<button onClick={handleResultData}>Submit</button>
<br /><br />
    </div>
  )
}

export default Result;