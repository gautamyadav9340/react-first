import React, { useState } from 'react'

const App = () => {

  const [title , setTitle] = useState('')
  const btnclicked = (e) =>
  {
    e.preventDefault()
    console.log('From sumbit' ,title)
  }
  return (
    <div>
     <form onSubmit={(e)=>{
        btnclicked(e);
     }} className='flex justify-center items-center text-center flex-col mt-55 ml-150 gap-10 w-75 h-85 border-3 rounded-2xl bg-cover bg-center' style={{backgroundImage:'url("https://t3.ftcdn.net/jpg/02/83/54/94/360_F_283549444_QJP74KROpbcvsBvohYSSJxVfFIcqr5O8.jpg")'}} >
      <input value = {title} onChange={(e)=>{
        setTitle(e.target.value)
      }}
      
       type="text" placeholder='Enter your name Here' className='bg-transparent p-2 border-3 rounded-2xl text-white font-bold' />
      <input type="text" placeholder='Enter your mo. no.' className='bg-transparent p-2 border-3 rounded-2xl text-white font-bold' />
      <input type="text" className='bg-transparent p-2 border-3 rounded-2xl text-white font-bold ' placeholder='enter your email' name='email'/>
      <button className='p-1.5 rounded-md text-center font-bold bg-gray-400'>sumbit
      </button>
     </form>
    </div>
  )
}

export default App
