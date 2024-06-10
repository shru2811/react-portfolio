import React from 'react'

function Card(props) {
  return (
    <div className='bg-white rounded-lg h-auto p-3 shadow-xl hover:shadow transition-shadow transition-all ease-in duration-200 flex flex-col cursor-pointer'>
        <h1 className='text-m'>{props.head}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card