import React from 'react'
import { FiUsers } from 'react-icons/fi'

function TopComponent({title , current}) {
  return (
      <div className='w-auto bg-white rounded-lg shadow-2l p-2 flex'>
          <div className='flex  w-40 border-r-2 border-neutral-500'>
              <div className='bg-blue-900 p-1.5 rounded-md mr-2'><FiUsers color='white' /></div>
              <h1 className='py-1'>{title}</h1>
          </div>
          <nav className="rounded-md w-full py-1 px-20">
              <ol className="list-reset flex">
                  <li><a href="#" className="text-blue-600 hover:text-blue-700">{title}</a></li>
                  <li><span className="text-gray-500 mx-2">/</span></li>
                  <li className="text-gray-500">{current}</li>
              </ol>
          </nav>
      </div>
  )
}

export default TopComponent