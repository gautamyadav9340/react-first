import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.download_url}>
        <div className='h-40 w-40 overflow-hidden'>
        <img className='bg-cover w-full h-full rounded-xl' src={props.elem.download_url} alt="" />
       </div>
       <h1 className='font-medium'>{props.elem.author}</h1>
       </a>
    </div>
  )
}

export default Card
