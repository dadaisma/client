import Image from "next/image";
import ServerMessage from "./Messages/ServerMessage";
import Typing from "./Messages/Typing";
import Message from "./Messages/Message";
import { useRef, useEffect } from "react";

const Chat = ({chat, user, typing}) => {
 
const scroller = useRef(null);

useEffect(() => {
    if(!scroller.current) return;
    if (scroller.current) {
        scroller.current.scrollIntoView({behaviour: "smooth", block: "end", inline: "nearest"});
        }
}
, [chat]);

  return (
    <div className="h-full pb-12 md:p-4">
      <div className="w-full h-full max-h-screen rounded-md overflow-y-auto gradient pt-2 md:pt-6">
        
        {
            chat.map((message, index) => {
              
                message = {...message, own: message.user?.id === user.id}
                
                return message.type === "server" ?
                            <ServerMessage key={index} {...message} />
                        :
                            <Message key={index} {...message} />
                        })
                    }
                    {
                        typing[0] && <Typing user={typing[0]} />
                    }
       
       <div ref={scroller} className="pb-2 md:pb-6" />
      </div>
    </div>
  );
};


export default Chat;
