import React from 'react'
import useAuth from '../login/useAuth'

export default function UserProfile() {
  const { user } = useAuth()
  console.log(user);
  return (
    <div style={{ height: '300px', width: '100%', background: '#404EED' }}>
      <div className="d-flex justify-content-start align-items-center h-100 container">
        <div className="">
          <div className='d-flex justify-content-evenly align-items-center'>
            <div>
              <img className='rounded-pill' style={{ height: '150px', width: '100%' }} src={user.photoURL} alt="" />
            </div>
            <div>
              <h2 className='ms-5 text-white fw-light' style={{ display: 'inline-block' }}> {user.displayName} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
