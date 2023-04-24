import React from 'react';
import "./hostle.css";

const Hostle = () => {
  return (
    <>
      <div className="hostle-main">
         <div className="hostle-head">
         <h1 className="hostle-title">
         HOSTLE INFORMATION FOR STUDENTS
         </h1>
         </div>
          
          <div className="hostle-main">
         <div className="hostle-details">
           <h4 className="hostle-details-title">
           PAPER PLANE HOSTLE
           </h4>
           <span>Rent : 20000</span>
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>        
            </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           HOSTLE COASTAL
           </h4>
           <span>Rent : 1000</span>
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>
         </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           ANIK COASTAL
           </h4>
           <span>Rent : 100</span>
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           </div>
         </div>


         <div className="hostle-details">
           <h4 className="hostle-details-title">
           JHONNY HOSTLE
           </h4>
           <span>Rent : 100</span>
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