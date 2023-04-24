import {useState,useEffect} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom';

const Register = ({history}) => {
  const navigate = useNavigate();
      const [Input, setInput] = useState({
            name:"",
            email:"",
            password:"",
            enrollment:"",
            year:"",
            stream:"",
            section:""
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
      
       const submitData=async(event)=>{
            event.preventDefault();
            // console.log(Input);
      
            const userData = {
                  username:Input.name,
                  email:Input.email,
                  password:Input.password,
                  "enrollment":Input.enrollment,
                  "year":Input.year,
                  "stream":Input.stream,
                  "section":Input.section
            }
      
           try{
           
             const {data} =await axios.post('api/auth/register',userData);
             localStorage.setItem("authToken",data.token);
            //  navigate("/");
            // history.push("/");
            console.log(data);
            // setInput({
            //       name:"",
            //       email:"",
            //       password:"",
            // })

            if(data){
            alert('Successfully send data');
          navigate("/");      
      }

             
      }
            catch(e){
                  console.log(e);
            }
      
       } 

      return (<>
            <div className="register_ip">
             <h3>REGISTER PAGE</h3>
            <input className="ip_val"  onChange={handleUpdate} name="name" value={Input.name} placeholder="name"/> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="email" value={Input.email} placeholder="email" /> <br /> <br />
            <input  className="ip_val" type="password" onChange={handleUpdate} name="password" value={Input.password} placeholder="password" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="enrollment" value={Input.enrollment} placeholder="enrollment" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="year" value={Input.year} placeholder="year" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="stream" value={Input.stream} placeholder="stream" /> <br /> <br />
            <input  className="ip_val" onChange={handleUpdate} name="section" value={Input.section} placeholder="section" /> <br /> <br />
            {/* <input  className="ip_val" onChange={handleUpdate} name="c_password" value={Input.c_password} placeholder="conform password" /> */}
            <button id="ip_btn" className="btn btn-danger" onClick={submitData}>SIGNUP</button> <br /> <br/>
            <span>Already have an account ? <Link style={{textDecoration:"none"}} to="/login">Login</Link></span>
            </div>
            </>
  )
}

export default Register;