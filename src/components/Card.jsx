import React from 'react'

function Card(props) {
  return (
    <div className='bg-white rounded-lg h-auto p-3 shadow-white hover:shadow hover:bg-gray-200 hover:border-b-4 border-t-4 border-b-4 transition duration-500 ease-in-out flex flex-col cursor-pointer bg-violet-900 text-white hover:bg-indigo-100 hover:text-blue-500'>
        <h1 className='text-m'>{props.head}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card