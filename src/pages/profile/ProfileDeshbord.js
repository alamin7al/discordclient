import React, { useState } from 'react'
import About from './About'
import './Profile.css'
import { FaUserEdit } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';


import { BsFillPersonFill } from 'react-icons/bs';
import useAuth from '../login/useAuth';
import { Link } from 'react-router-dom';
import ProfileFilup from './ProfileFilup';

export default function ProfileDeshbord() {
    const [nav, setNav] = useState('about')
    const { singleuser } = useAuth()
    return (
        <div className=' profilehed ' style={{ height: '100%', width: '100%', background: '#404EED' }}>
            <div className="container " style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>
                    <div className="row gx-5 gy-5">
                        <div className="col-lg-3 col-md-3  my-5">

                            <div className="deshbordbtn  text-start my-5">
                                <button onClick={() => setNav("fill")} className='aboutbtn fw-lighter text-uppercase text-start"'><HiInformationCircle className='fs-2' /> Information </button>
                                <button onClick={() => setNav("about")} className='aboutbtn fw-lighter text-uppercase text-start"'><BsFillPersonFill className='fs-2' /> About </button>
                                {
                                    singleuser.slice(0,1).map((s, i) => <>
                                        <Link key={i} to={`/edit/${s._id}`}>
                                            <button className='editbtn my-4 fw-lighter text-uppercase text-start"'><FaUserEdit className='fs-2' /> Edit Profile </button>
                                        </Link>
                                    </>)
                                }


                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 deshbord my-5 ">
                            {
                                nav === "about" && <About />
                            }
                            {
                                nav === "fill" && <ProfileFilup />
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
