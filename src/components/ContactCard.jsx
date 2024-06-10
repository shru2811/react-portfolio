import React from 'react'
import { Link } from 'react-router-dom'

function ContactCard(props) {
  return (
    <div>
        

<div className="max-w-sm bg-white border dark:border-blue-200 dark:bg-gray-800 border-gray-200 rounded-lg shadow-xl hover:shadow transition-shadow transition-all ease-in duration-300">
    <a href="#">
        <img className="rounded-t-lg" src={props.img} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-pink-500 ">{props.head}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
        <Link to={props.href} target='blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-blue-800 dark:hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-500 ease-in-out ">
            {props.con}
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

    </div>
  )
}

export default ContactCard