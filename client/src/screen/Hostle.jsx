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
         
         <img style={{height: '40%', width: '100%'}} src="https://www.sheryna.in/media/fotos/inddealzProperties_513964_1_1658170506.jpg" alt="pg1_img" className="hostle_image" />
           <h4 className="hostle-details-title">
           PAPER PLANE HOSTEL
           </h4>
           <span >Rent : 20000</span>
           <p>Phone No : 9832334527</p> 
           {/* <span>9832334527</span> */}
           <div className="add" style={{marginTop:'1.2rem'}}>
           <p>Address: Baligori,NewTown,Kolkata</p>
            <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>24</span></h5> 
           </div>        
            </div>

           


         <div className="hostle-details">
         <img style={{height: '40%', width: '100%'}} src="https://housing-images.n7net.in/01c16c28/e3f40bdaf2a62d128b7c7e9da8be074d/v0/large/4_bhk_independent_house-for-sale-subramanyapura-Bangalore-others.jpg
" alt="pg2_img" className="hostle_image" />
           <h4 className="hostle-details-title">
           SHREE SHAILA PG FOR LADIES
           </h4>
           <span>Rent : 1000</span>
           <p>Phone No : 7032334527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>20</span></h5> 
           </div>
         </div>

         <div className="hostle-details">
         
         <img style={{height: '40%', width: '100%'}} src="https://img.clasf.in/2022/07/26/brand-new-tenanted-pg-building-for-sale-at-aswathnagar-marathalli-bangalore-202207261821024182280000.jpg" alt="pg1_img" className="hostle_image" />
           <h4 className="hostle-details-title">
           WHITEFIELD HOSTEL
           </h4>
           <span >Rent : 20000</span>
           <p>Phone No : 9832334527</p> 
           {/* <span>9832334527</span> */}
           <div className="add" style={{marginTop:'1.2rem'}}>
           <p>Address: Baligori,NewTown,Kolkata</p>
            <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>14</span></h5> 
           </div>        
            </div>

         <div className="hostle-details" style={{marginTop:'-15rem'}}>
         <img style={{height: '40%', width: '100%'}} src="https://housing-images.n7net.in/01c16c28/d0337e7c9887a3059d625c1f830fcffb/v0/fs-large/4_bhk_independent_house-for-sale-subramanyapura-Bangalore-others.jpg" alt="pg4" />
           <h4 className="hostle-details-title">
           ANIK COASTAL
           </h4>
           <span>Rent : 100</span>
           <p>Phone No : 9032334527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>8</span></h5> 
           </div>
         </div>

         <div className="hostle-details" style={{marginTop:'-15rem'}}>
         <img style={{height: '40%', width: '100%'}} src="https://housing-images.n7net.in/01c16c28/27cff8ef4e61188aef5ceb76ab65dfd8/v0/large/3_bhk_independent_house-for-sale-kengeri_satellite_town-Bangalore-living_room.jpg" alt="pg4" />
           <h4 className="hostle-details-title">
           JONOKALYAN PG
           </h4>
           <span>Rent : 100</span>
           <p>Phone No : 8236734527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>3</span></h5> 
           </div>
         </div>


         <div className="hostle-details" style={{marginTop:'-15rem'}}>
         <img style={{height: '40%', width: '100%'}} src="https://housing-images.n7net.in/01c16c28/27cff8ef4e61188aef5ceb76ab65dfd8/v0/large/3_bhk_independent_house-for-sale-kengeri_satellite_town-Bangalore-living_room.jpg" alt="pg4" />
           <h4 className="hostle-details-title">
           JONOKALYAN PG
           </h4>
           <span>Rent : 100</span>
           <p>Phone No : 8236734527</p> 
           <div className="add">
           <p>Address: Baligori,NewTown,Kolkata</p>
           <h5>SEAT AVAILABLE : <span style={{color: 'green'}}>3</span></h5> 
           </div>
         </div>
         

         </div>

      </div>
    </>
  )
}

export default Hostle;