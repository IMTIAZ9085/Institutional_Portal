import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { getUser } from "../../api/UserRequests";
const Conversation = ({ data, currentUser, online }) => {

  const [userData, setUserData] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser);
    
    const getUserData = async ()=> {
      try
      {
          // const {data} =await getUser(userId)
          const res = await axios.get(`/api/auth/findUser/${userId}`);
          console.log(res);
          setUserData(res.data.user);
        //  dispatch({type:"SAVE_USER", data:data})
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, []);

  return (
    <>
      <div className="follower conversation">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {online && <div className="online-dot"></div>}
          <img
            src="defaultProfile.png"
            alt="Profile"
            className="followerImage"
            style={{ width: "30px", height: "30px" }}
          />
       
          <div className="name" style={{fontSize: '0.8rem'}}>
            <span>{userData?.username}</span>
            <span style={{color: online?"#51e200":""}}>  {online? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid lightblue" }} />
    </>
  );
};

export default Conversation;