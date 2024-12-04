import { useEffect, useState } from "react"


const SignUp = ({user, socket, input, setInput}) => {
    

const addUser = ()=> {
    user.current = {name: input, id: socket.id};
    socket.emit('new_user', {user: input});
    setInput('')
}

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-center grid grid-rows-3 gap-2 gradient p-8 rounded-md">
<h1 className="text-6xl font-bold text-white">Chat App</h1>
<h2 className="text-xl text-white">Enter your Name</h2>
<input type="text" className="text-2xl text-center my-2 p-2 text-blue-400 placeholder-blue-300 rounded-md focus:outline-none"
placeholder="..."
value={input} onChange={(e) => setInput(e.target.value)} 
onKeyDown={(e) => e.key === "Enter" && addUser() }
/>
     <button className={`text-xl w-full py-2 px-3 text-white font-bold rounded-md bg-sky-400
        ${input ? "hover:bg-sky-400" : "bg-slate-400"}`} 
        onClick={addUser} disabled={!input}
        >
        Join Chat
        </button>     
          </div>
         
        </div>
    )
}

export default SignUp
