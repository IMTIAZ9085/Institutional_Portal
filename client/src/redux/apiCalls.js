import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux.js";

export const login = async(dispatch,user)=>{
   try{
      dispatch(loginStart());
      const res = await publicRequest.post("/auth/login",user);
      console.log("this is redux details");
      console.log(res);
      dispatch(loginSuccess(res.data));
   }catch(error){
      dispatch(loginFailure,error.message);
   }
} 