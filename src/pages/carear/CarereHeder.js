import React from 'react'
import './Carer.css'
import Apps from './Modal'

export default function CarereHeder() {
  return (
    <div className="">
      <div className='carere' style={{ width: '100%', background: '#5865F2' }}>
        <div className="container h-100">
          <div className='mx-auto d-flex justify-content-center align-items-center h-100 w-100'>
            <div className='text-white carerediv'>
              <button className='modalbtn mb-4'>               <Apps />
              </button>
              <h1 className='carererheding my-4'>Work at Discord</h1>
              <p className='carertext my-3'>Discord is home to passionate people who value our mission—giving you the power to create belonging in your life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
