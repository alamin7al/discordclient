
import React, { } from 'react'
import { Link } from 'react-router-dom'
import { SiSlideshare } from 'react-icons/si';
import { IoIosCreate } from 'react-icons/io';

import useAuth from '../login/useAuth'
import pr from '../img/profileimgicon.png'
import './crud.css'
// import EditProfile from './EditProfile'
export default function Crudprofile() {
    const { user } = useAuth()

    return (
        <div className='crudhight' id='boxsh' style={{ width: '100%', }}>
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
                    <button className='editbtn fw-lighter text-uppercase text-start fs-5'> <IoIosCreate className='fs-2' />  create </button>
                </Link>

                <Link to='/profile'>
                    <button className='editbtn fw-lighter text-uppercase text-start fs-4'><SiSlideshare className='fs-2' /> Deshbord </button>
                </Link>
            </div>
        </div>
    )
}
