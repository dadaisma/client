"use client";
import { useEffect, useState, useRef } from "react";
import {Chat, Inputs, SignUp} from "../components";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

export default function Home() {

  const [typing, setTyping] = useState([]);

  useEffect(() => {
   socket.on("receive_message",(msg)=>{
    setChat((prev) => [...prev, msg]);
   })

   socket.on("user_typing", (data) => {
    if(!user.current) return;
    setTyping((prev) => {
      if(data.typing){
        return [...prev, data.user]
      } else {
        return prev.filter((user) => user !== data.user)
      }
    })
   })

   socket.on("new_user", (newUser) => {
    setChat((prev) => [...prev, {content: `${newUser} has joined the chat`, type: "server" }]);
   })

   return () => {
     socket.off("receive_message");
     socket.off("user_typing");
     socket.off("new_user");
   }
  }, []); 

  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");
  const user = useRef(null);



  return (
    <main className=" h-screen max-h-screen max-w-screen mx-auto md:container md:p-20 md:pt-4">
{user.current ?
<>
<Chat user={user.current} chat={chat} typing={typing} />
<Inputs setChat={setChat} user={user.current} socket={socket} /> 
</> 
:
 <SignUp user={user} socket={socket} input={input} setInput={setInput}/>
}
    </main>
  );
}