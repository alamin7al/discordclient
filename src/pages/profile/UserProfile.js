import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa';

import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
// import EditProfile from './EditProfile'
export default function UserProfile() {
  const { user, singleuser } = useAuth()
console.log(singleuser);



  if (singleuser.length === 0) {
    <h3 className='text-white display-3'>loading...</h3>
  }

  return (
    <div className='profileheight' style={{ width: '100%', background: '#404EED' }}>
      <div className="d-flex justify-content-between align-items-center h-100 container">

        <div className="">

          <div className='d-flex justify-content-evenly align-items-center flex-wrap'>
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

        {
          singleuser.map((s, i) => {
            return (
              <>
                <Link key={i} to={`/edit/${s._id}`}>
                  {/* <button className='editbtn fw-lighter text-uppercase text-start fs-1'><FaUserEdit className='fs-2' /> Edit Profile </button> */}
                </Link>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
