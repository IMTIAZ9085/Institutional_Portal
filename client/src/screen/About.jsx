import React from 'react';
import "./about.css";

const About = () => {

      return (
            <>
                  <section className="common-section our-services">
                            <h1 id="about-title">Welcome to Institutional portal</h1>
                                                    <h5 id="about-small-title">________Good Education,Good jobs</h5>
                  <div className="container mb-2">
                    <div className="row">

                    {/* //1st section left side */}
                          <div className="col-12 col-lg-5 text-center leftside-img order-lg-first order-last">
                            <img className="img-fluid abtimg"   style={{height: '22rem', width: '46rem'}} src="boy.jpg" alt="aboutimg" />
                          </div>

                     {/* 1st section right side data */}
                     <div className="col-12 col-lg-7 rightside">
                           {/* <h4 className="head1">--Available @ Google Play Store and Apple App Store</h4> */}
                           <h1 className="main-title">Structure Your All Details Here</h1>
                          
                                    <div className="row our-services-info">
                               <div className="col-11 our-services-data">
                               <h5>History:</h5>
                             <p>Founded by visionary educators and community leaders, University of Engineering and Management has a rich history of providing high-quality education and fostering an environment of intellectual curiosity. From our humble beginnings, we have evolved into a hub of creativity, research, and collaboration.
                              </p>
                             <h5>Mission</h5>
                              <p>Dedicated to academic excellence and societal impact, our mission is to cultivate a diverse community of learners who are prepared to lead, innovate, and contribute meaningfully to a global society.
                              </p>
                              <h5>Values:</h5>
                              <p>
Our values—integrity, inclusivity, innovation, and excellence—guide every facet of our institution. We are committed to fostering an environment that celebrates diversity, encourages critical thinking, and promotes the highest standards of academic and ethical conduct.

</p>
                               </div>
                           </div>
                         
                           <br />
                           <button className="btn btn-primary learn">Learn More</button>
                     </div>
                    </div>
                  </div>

                  </section>


                  
                  
                  {/* //support section */}
                  <section className="common-section our-services">

<div className="container mb-4">
  <div className="row">

   {/* 1st section right side data */}
   <div className="col-12 col-lg-7 rightside">
         <h4 className="head1">--Support in Any Language</h4>
         <h1 className="main-title">Make Easy Your Daily College Events</h1>
  
                  <div className="row our-services-info">
             <div className="col-11 our-services-data">
            <h5>Accreditations and Affiliations:</h5>
            <p>University of Engineering & Management is proud to be accredited by AICTE and maintains affiliations with prestigious academic and professional organizations. These affiliations underscore our commitment to upholding the highest standards of education.
</p>
             <h5>Achievements and Recognitions:
</h5>
            <p>Our commitment to excellence has been recognized through numerous awards and accolades. These achievements motivate us to continually strive for greatness in all aspects of academia.
</p>
             </div>
         </div>
         <br />
         <button className="btn btn-primary learn">Learn More</button>
   </div>

    
    {/* //1st section left side */}
    <div className="col-12 col-lg-5 text-center leftside-img ">
          <img className="img-fluid abtimg"  style={{height: '22rem', width: '46rem'}} src="gg.jpg" alt="aboutimg" />
        </div>

  </div>
</div>

</section>
            </>
      )
}

export default About;