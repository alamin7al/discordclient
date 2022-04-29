import React, { } from 'react'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa';

import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
import { Spinner } from 'react-bootstrap';
// import EditProfile from './EditProfile'
export default function UserProfile() {
  const { user, singleuser } = useAuth()






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

        <Link to='/crud'>
          <button className='editbtn fw-lighter text-uppercase text-start fs-5'><FaUserEdit className='fs-2' /> Crud </button>
        </Link>


        {
          singleuser.length === 0 ? <>
            <button style={{ border: '0', margin: '0', fontSize: '14px', backgroundColor: 'transparent', color: 'white' }} onClick={() => window.location.reload(false)}>Click After Sorting The Profile</button>

            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="border" variant="success" />
          </> : ''
        }
        {
          singleuser.map((s, i) => {
            return (
              <>
                <Link key={i} to={`/edit/${s._id}`}>
                  <button className='editbtn fw-lighter text-uppercase text-start fs-5'><FaUserEdit className='fs-2' /> Edit Profile </button>
                </Link>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
