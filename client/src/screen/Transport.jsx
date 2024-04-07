import React from 'react';
import "./transport.css";

const Transport = () => {
  return (
    <>
       <div className="transport-main">
         <div className="transport-head">
         <h1 className="transport-title">
         TRANSPORT INFORMATION FOR STUDENTS
         </h1>
         </div>
          
          <div className="transport-main">
         <div className="transport-details">
           <h4 className="transport-details-title">
           BUS 45923K
           </h4>
           <span style={{marginRight:"10px"}}><span>Booking Price : 100</span></span>
           <p className="transport-details-phone" style={{marginLeft:"10px"}} >Phone No <br/> 9832334527</p> 
           {/* <span>9832334527</span> */}
           <div className="add">
           <p>From: <span>Howrah</span></p>
           <p>Via: <span>Park Circus</span></p>
           <p>To: <span>University of Engineering & Management</span></p>
           </div>      
            </div>


         <div className="transport-details">
           <h4 className="transport-details-title">
           BUS 65532D
           </h4>
           <span>Booking Price : 100</span>
           <p className="transport-details-phone" style={{marginLeft:"10px"}}>Phone No <br/> 7032334527</p> 
           <div className="add">
           <p>From: <span>Chinar Park</span></p>
           <p>Via: <span>Narkelbagan</span></p>
           <p>To: <span>University of Engineering & Management</span></p>
           </div> 
         </div>


         <div className="transport-details">
           <h4 className="transport-details-title">
           BUS 45923L
           </h4>
           <span>Booking Price : 100</span>
           <p className="transport-details-phone" style={{marginLeft:"10px"}}>Phone No <br/> 9032334527</p> 
           <div className="add">
           <p>From: <span>Howrah</span></p>
           <p>Via: <span>Sealdah</span></p>
           <p>To: <span>University of Engineering & Management</span></p>
           </div> 
         </div>


         <div className="transport-details">
           <h4 className="transport-details-title">
           BUS 65673I
           </h4>
           <span>Booking Price : 100</span>
           <p className="transport-details-phone" style={{marginLeft:"10px"}}>Phone No <br/> 8236734527</p> 
           <div className="add">
           <p>From: <span>Behala</span></p>
           <p>Via: <span>Bhawanipur</span></p>
           <p>To: <span>University of Engineering & Management</span></p>
           </div> 
         </div>

         <div className="transport-details">
           <h4 className="transport-details-title">
           BUS 98349M
           </h4>
           <span>Booking Price : 100</span>
           <p className="transport-details-phone" style={{marginLeft:"10px"}}>Phone No <br/> 8236734527</p> 
           <div className="add">
           <p>From: <span>Ruby</span></p>
           <p>Via: <span>Sector V</span></p>
           <p>To: <span>University of Engineering & Management</span></p>
           </div> 
         </div>

         </div>

      </div>
    </>
  )
}

export default Transport;