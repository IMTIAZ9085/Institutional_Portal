import {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { login } from '../redux/apiCalls';
import { loginStart, loginSuccess } from '../redux/userRedux';
// import Navbar from '../components/DesignComp/Navbar';
// import { AuthContext } from '../context/AuthContext.js'; 
// import loginCall from '../context/apiCalls'; 


const Loginpage = ({history}) => {
      const errtype = useSelector((state) => console.log(state.user.isFetching));
      // const {user,dispatch} = useContext(AuthContext);
      // const {state,setState} = useContext(AuthContext);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [Input, setInput] = useState({
            email:"", 
            password:""
       }) ;
      const [error, setError] = useState(true); 
      //  const {isFetching,error} = useSelector((state)=>state.user);

      //  useEffect(()=>{ 
      //       if(localStorage.getItem("authToken")){
      //             navigate("/home");
      //       }
      // },[navigate]);

     useEffect(()=>{ 
         
     },[error])

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
                  email:Input.email,
                  password:Input.password
            } 
            // console.log(userData);
       
           try{
            // loginCall(userData.email,dispatch);
            // console.log(user);
            const {data} =await axios.post('api/auth/login',userData);
            // console.log("here");
            console.log(data);
            // setState(data.userD); 
            // console.log(state);
            // console.log(state); 
            //  const {data2} =await axios.post('api/auth/login',userData);
            //  dispatch({type:"LOGIN_SUCCESS",payload:{data}});
            // console.log(Input.email);

            // console.log(result.data.user);
            // dispatch({type:"LOGIN_SUCCESS",payload:data.userD});
            // console.log(user);
            // console.log(data);
            
            localStorage.setItem("authToken",data.token);
            dispatch(loginStart());
            dispatch(loginSuccess(data.userD));
            // login(dispatch,userData);
            setError(false);
      // window.location.reload();
      // if(error===false){
            navigate("/home");
      // }
           
      //      console.log(user); 
            //  navigate("/");
            // console.log(data);  
            // setInput({
            //       email:"",
            //       password:"",
            // })

            // if(data){ 
            // alert('Successfully send data');}

             
      }
            catch(e){
                  console.log(e);
            }
      
       }

      return (<>
      {/* <div className="main" style={{display: 'flex',flexDirection: 'row'}}> */}
           {/* <div className="login_ip2">
           </div> */}
           {/* {error && <h3>The data is loading</h3>} */}

            <div className="login_ip" style={{display: 'flex',flexDirection: 'row'}}>
            <div className="container log-element">
            <div className="row">
            <div className="col-12 col-lg-7">
            <img id="login-image" style={{height: '30rem',width: '40rem'}} src="login.jpg" alt="event"/>
            </div>
            <div className="col-12 col-lg-5">
            <div className="login_div">
            <h2>LOGIN PAGE</h2>
            <input  className="ip_val" type="email" onChange={handleUpdate} name="email" value={Input.email} placeholder="email" />
            <br/>
            <br/>
            <input  className="ip_val" type="password" onChange={handleUpdate} name="password" value={Input.password} placeholder="password" />
            <br /> <br/>
            <button id="ip_btn" className="btn btn-danger" onClick={submitData}>SIGN IN</button> <br/>

            <span>Don't have an account ? <Link style={{textDecoration:"none"}} to="/register">Register</Link></span>
            <br/>
            <span>Forget Password ? <Link style={{textDecoration:"none"}} to="/forgetPassword">Forget Password</Link></span>
           
           
            {/* <span>Don't have an account ? Register</span>
            <br/>
            <span>Forget Password ?Forget Password</span> */}
            </div>
            </div>
                   
            </div>
            </div>
            </div>
            {/* </div> */}
            </>
  )
}

export default Loginpage;