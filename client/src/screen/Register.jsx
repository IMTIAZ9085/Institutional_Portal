import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom';

const Register = ({history}) => {
  const navigate = useNavigate();
      const [flag,setFlag] = useState(false);
      const [userOtp,setUserOTP] = useState();
      const [Input, setInput] = useState({
            name:"",
            email:"",
            password:"",
            enrollment:"",
            year:"",
            status:"",
            passoutYear:"",
            linkdin:"",
            stream:"",
            section:"",
       }) 

       useEffect(()=>{
            if(localStorage.getItem("authToken")){
                  navigate("/");
                  // history.push("/");
                
            }
      },[navigate]);
      
      const handleUpdate=async(event)=>{
       const {name,value} = event.target;
       setInput(previnput=>{
        return{
         ...previnput,
         [name]:value
        }
       })
       }

       const handleOtp=async(event)=>{
            setUserOTP(event.target.value);
            }

       const getOTP = async(event)=>{
            event.preventDefault();
          setFlag(true);
          const userData1 = {
            email:Input.email
          }
          console.log(Input.email);
          try{
            const data =await axios.post("api/auth/signup",userData1);
            console.log(data);
          }catch(e){
            console.log(e);
          }
       }

       const submitData=async(event)=>{
            event.preventDefault();
            // console.log(Input);
      
            const userData = {
                  username:Input.name,
                  email:Input.email,
                  password:Input.password,
                  enrollment:Input.enrollment,
                  year:Input.year,
                  status:Input.status,
                  passoutYear:Input.passoutYear,
                  linkdin:Input.linkdin,
                  stream:Input.stream,
                  section:Input.section,
                  userOtp:userOtp
            }
      
           try{
           console.log("bf api");
             const {data} =await axios.post("api/auth/signup_verify",userData);
            //  localStorage.setItem("authToken",data.token);
            //  navigate("/");
            // history.push("/");
            console.log(data);
            // setInput({
            //       name:"",
            //       email:"",
            //       password:"",
            // })
          console.log(data.success);
            if(data.success===true){
            alert('User Created Successfully');
          navigate("/");      
      }
      if(data.success===false){
        alert("OTP verification failed! Register Again");
        navigate("/register");
        document.location.reload(true);
      }
            
      }
            catch(e){
                  console.log(e);
            }
      
       } 
      
      //  const submitData=async(event)=>{
      //       event.preventDefault();
      //       // console.log(Input);
      
      //       const userData = {
      //             username:Input.name,
      //             email:Input.email,
      //             password:Input.password,
      //             enrollment:Input.enrollment,
      //             year:Input.year,
      //             status:Input.status,
      //             passoutYear:Input.passoutYear,
      //             linkdin:Input.linkdin,
      //             stream:Input.stream,
      //             section:Input.section
      //       }
      
      //      try{
      //      console.log("bf api");
      //        const {data} =await axios.post("api/auth/register",userData);
      //       //  localStorage.setItem("authToken",data.token);
      //       //  navigate("/");
      //       // history.push("/");
      //       console.log(data);
      //       // setInput({
      //       //       name:"",
      //       //       email:"",
      //       //       password:"",
      //       // })
 
      //       if(data){
      //       alert('Successfully send data');
      //     navigate("/");      
      // }
            
      // }
      //       catch(e){
      //             console.log(e);
      //       }
      
      //  } 

      return (<>
             
            <div className="register_ip">
            <h3>REGISTER PAGE</h3>
            <div className="reg_ip">
            <input className="ip_val"  onChange={handleUpdate} name="name" value={Input.name} placeholder="name"/> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="email" value={Input.email} placeholder="email" /> <br /> <br />
            <input  className="ip_val" type="password" onChange={handleUpdate} name="password" value={Input.password} placeholder="password" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="enrollment" value={Input.enrollment} placeholder="enrollment" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="year" value={Input.year} placeholder="year" /> <br /> <br />
            
            <input  className="ip_val" onChange={handleUpdate} name="stream" value={Input.stream} placeholder="stream" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="section" value={Input.section} placeholder="section" /> <br /> <br />
            {/* <input  className="ip_val" onChange={handleUpdate} name="c_password" value={Input.c_password} placeholder="conform password" /> */}
            <div className="radio_level">
            <label for="status1">Passout</label>
            <input type="radio" id="status1" className="ip_al" onChange={handleUpdate} name="status" value="Passout"/> <br /> <br />
            <label for="status2">Student</label>
            <input type="radio" id="status2" className="ip_al" onChange={handleUpdate} name="status" value="Student"/> <br /> <br />
            {Input.status==="Passout" &&  <>
      
            <input className="ip_val" onChange={handleUpdate} name="passoutYear" value={Input.passoutYear} placeholder="Passout Year" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="linkdin" value={Input.linkdin} placeholder="Linkdin Profile Link" /> <br /> <br />
            </> } 
            {Input.status==="Student" &&  <>
            <input  className="ip_val" onChange={handleUpdate} name="passoutYear" value={Input.passoutYear} placeholder="Passout Year" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="linkdin" value={Input.linkdin} placeholder="Linkdin Profile Link" /> <br /> <br />
            </> } 

            {flag &&  <>
            <input  className="ip_val" onChange={handleOtp} name="otp" value={userOtp} placeholder="Enter OTP" /> <br /> <br />
            </> } 

            </div>
            </div>
            <div className="reg_submit">
            {  flag &&  <button id="ip_btn" className="btn btn-danger" onClick={submitData}>SIGNUP</button>}
            {  (flag===false) &&  <button id="ip_btn" className="btn btn-danger" onClick={getOTP}>GET OTP</button>} <br /> <br/>
            <span>Already have an account ? <Link style={{textDecoration:"none"}} to="/">Login</Link></span>
            </div>
            </div>

            </>
  )
}

export default Register;