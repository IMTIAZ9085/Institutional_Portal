import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { addMessage, getMessages } from "../../api/MessageRequests";
// import { getUser } from "../../api/UserRequests";
import "./Chatbox.css";
import { format } from "timeago.js";
import axios from "axios";
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser,setSendMessage,receieveMessage}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage)=> {
    setNewMessage(newMessage);
  };

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const res = await axios.get(`/api/auth/findUser/${userId}`);
        // console.log(res);
        setUserData(res.data.user); 
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/message/${chat._id}`);
        console.log(res);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  // Always scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])



  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault();
    if(newMessage!==''){
    const message = {
      senderId : currentUser,
      text: newMessage,
      chatId: chat._id,
  }
  const receiverId = chat.members.find((id)=>id!==currentUser);
   // send message to socket server
 setSendMessage({...message, receiverId});
//   // send message to database
  try {
    const res = await axios.post('/api/message/',message);
    console.log(res);
    setMessages([...messages, res.data]);
    setNewMessage("");
  }
  catch
  {
    console.log("error")
  }
}
}

// Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receieveMessage)
  if (receieveMessage !== null && receieveMessage.chatId === chat._id) {
    setMessages([...messages, receieveMessage]);
  }

},[receieveMessage])



  const scroll = useRef();
  const imageRef = useRef();
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src="defaultProfile.png"
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.username}
                    </span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid lightblue",
                  marginTop: "5px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
            {console.log(messages)}
              {messages.map((message) => (
                <>
                  <div style={{backgroundColor:"blue"}} ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    } 
                  >
                    <span >{message.text}</span>{" "}
                    <span >{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />
              <div style={{ height:"30px",cursor:"pointer", borderRadius:"10px",fontWeight:"bold",backgroundColor:"green",color:"white"}} className="send-button button" onClick = {handleSend}>Send</div>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  )
}

export default ChatBox;