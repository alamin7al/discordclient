import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa';

import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
import { Spinner } from 'react-bootstrap';
// import EditProfile from './EditProfile'
export default function Deshbordgo() {
  const { user, singleuser } = useAuth()



  if (singleuser.length === 0) {
    <>
    <Spinner animation="border" variant="primary" />
    <Spinner animation="border" variant="secondary" />
    <Spinner animation="border" variant="success" />
    <Spinner animation="border" variant="danger" />
    <Spinner animation="border" variant="warning" />
    <Spinner animation="border" variant="info" />
    <Spinner animation="border" variant="light" />
    <Spinner animation="border" variant="dark" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="dark" />
  </>
  }

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

        {
          singleuser.slice(0,1).map((s, i) => {
            return (
              <>
                <Link key={i} to='/profile'>
                  <button className='editbtn fw-lighter text-uppercase text-start fs-4'><FaUserEdit className='fs-2' /> Deshbord </button>
                </Link>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
