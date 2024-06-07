import React from 'react'

function Card(props) {
  return (
    <div className='bg-white rounded-lg h-auto p-3 shadow-xl hover:shadow-2xl transition-shadow transition-all ease-in duration-200 flex flex-col'>
        <h1 className='text-m'>{props.head}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card