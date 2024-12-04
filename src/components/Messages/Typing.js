import React from 'react'

const Typing = ({user}) => {
  return (
    <div className='px-6 py-1 flex'>
<span className='logo mr-2 text-xl md:text-3xl text-white flex items-center bg-blue-600 rounded-full text-center px-4'>
    {user.charAt(0).toUpperCase()}
</span>
<div className='loader bg-slate-300 rounded-2xl p-5'>
    <div></div>
    <div></div>
    <div></div>



</div>
        
    </div>
  )
}

export default Typing