import React from 'react';
import "./hostle.css";

const Hostle = () => {
  return (
    <>
      <div className="hostle-main">
         <div className="hostle-head">
         <h1 className="hostle-title">
         HOSTEL INFORMATION FOR STUDENTS
         </h1>
         </div>
          
          <div className="hostle-main">
         <div className="hostle-details">
           <h4 className="hostle-details-title">
           PAPER PLANE HOSTEL
           </h4>
           <span style={{marginRight:"10px"}}>Rent : 20000</span>
           <p>Phone No <br/> 9832334527</p> 
           {/* <span>9832334527</span> */}
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
          
           </div>        
            </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           HOSTEL COASTAL
           </h4>
           <span>Rent : 1000</span>
           <p style={{marginLeft:"50px"}}>Phone No <br/> 7032334527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>
         </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           ANIK COASTAL
           </h4>
           <span>Rent : 100</span>
           <p style={{marginLeft:"50px"}}>Phone No <br/> 9032334527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>
         </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           JONOKALYAN PG
           </h4>
           <span>Rent : 100</span>
           <p style={{marginLeft:"50px"}}>Phone No <br/> 8236734527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>
         </div>

         </div>

      </div>
    </>
  )
}

export default Hostle;