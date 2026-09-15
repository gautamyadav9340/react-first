import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/card';
const App = () => {


  const [userData,setUserData] = useState([])
  const [index , setIndex] = useState(1);
 
  const getData = async ()=>
    {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data);
    
    }

    useEffect(function(){
      getData()
    },[index])

    let printUserdata = <h2 className='text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading....</h2>

    if(userData.length>0)
    {
      printUserdata = userData.map(function(elem,idx){
       
      return <div key={idx}>
        <Card elem={elem}/>
       </div>
       
      })
    }

  return (
    <div className='bg-black h-screen overflow-auto w-screen text-white'>
      <div className='flex gap-4 flex-wrap m-3 p-4 text-gray-500 text-2xl font-medium'>
        {printUserdata}
      </div>
      <div className='flex items-center justify-center gap-6 p-4'>
      <button className=' px-7 py-3  bg-amber-300 rounded active:scale-90'
      onClick={()=>{
         if(index>0)
          setIndex(index-1)
      }}>Prev</button>
      <h2>Page {index}</h2>
      <button className='px-7 py-3  bg-amber-300 rounded active:scale-90'
      onClick={()=>{
       setIndex(index+1)
      }}>Next</button>
      </div>
      
    </div>
  )
}

export default App
