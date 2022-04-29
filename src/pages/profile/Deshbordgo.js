import React, { } from 'react'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa';

import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
// import { Spinner } from 'react-bootstrap';
// import EditProfile from './EditProfile'
export default function Deshbordgo() {
  const { user} = useAuth()



  return (
    <div className='profileheight profilehed' style={{ width: '100%', background: '#404EED' }}>
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

        {/* {
          singleuser.length === 0 ? <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="secondary" />
          </> : ''
        } */}
        <Link to='/profile'>
          <button className='editbtn fw-lighter text-uppercase text-start fs-4'><FaUserEdit className='fs-2' /> Deshbord </button>
        </Link>
        {/* {
          singleuser.slice(0,1).map((s, i) => {
            return (
              <>
               
              </>
            )
          })
        } */}
      </div>
    </div>
  )
}
