import React from 'react'
import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
export default function UserProfile() {
  const { user } = useAuth()
  return (
    <div className='' style={{ height: '300px', width: '100%', background: '#404EED' }}>
      <div className="d-flex justify-content-start align-items-center h-100 container">
        <div className="">
          
          <div className='d-flex justify-content-evenly align-items-center'>
            {
              user?.photoURL ? <div>
                <img className='rounded-pill' style={{ height: '150px', width: '100%' }} src={user.photoURL} alt="" />
              </div> : <div>
                <img className='rounded-pill' style={{ height: '150px', width: '100%' }} src={pr} alt="" />
              </div>
            }
            <div className='text-start ms-5'>
              <h2 className='phtotext' style={{ display: 'inline-block' }}> {user.displayName} </h2>
              <h2 className='phtotext'>{user.email}</h2>
              {
                user?.metadata?.creationTime &&

                <h1 className='phtotext'>{user?.metadata?.creationTime}</h1>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
