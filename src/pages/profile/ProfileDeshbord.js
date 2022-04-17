import React, { useState } from 'react'
import About from './About'
import EditProfile from './EditProfile'
import './Profile.css'


import { BsFillPersonFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';

export default function ProfileDeshbord() {
    const [nav, setNav] = useState('about')
    return (
        <div className=' profilehed ' style={{ height: '100%', width: '100%', background: '#404EED' }}>
            <div className="container " style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>
                    <div className="row gx-5 gy-5">
                        <div className="col-lg-3 col-md-3  my-5">
                            <div className="deshbordbtn  text-start my-5">
                                <button onClick={() => setNav("about")} className='aboutbtn fw-lighter text-uppercase text-start"'><BsFillPersonFill className='fs-2' /> About </button>

                                <button onClick={() => setNav("Edit")} className='editbtn my-4 fw-lighter text-uppercase text-start"'><FaUserEdit className='fs-2' /> Edit Profile </button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 deshbord my-5 ">
                            {
                                nav === "about" && <About />
                            }
                            {
                                nav === "Edit" && < EditProfile />
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
