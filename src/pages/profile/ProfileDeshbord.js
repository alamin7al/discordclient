import React, { useState } from 'react'
import About from './About'
import EditProfile from './EditProfile'
import './Profile.css'


import { BsFillPersonFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';

export default function ProfileDeshbord() {
    const [nav, setNav] = useState('about')
    return (
        <div className='my-5 profilehed' style={{ height: '100%', width: '100%' }}>
            <div className="container " style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>
                    <div className="row gx-5 gy-5">
                        <div className="col-lg-3 col-md-3 deshbord">

                            <div className="deshbordbtn">
                                <div  className="">
                                 

                                    <button onClick={() => setNav("about")} className='aboutbtn'>   <BsFillPersonFill className='fs-1 me-2'></BsFillPersonFill> About</button>
                                </div>
                                <div className="">
                                   
                               
                                    <button onClick={() => setNav("Edit")} className='editbtn my-4'>  <FaUserEdit style={{color:'#404EED'}} className='fs-1 me-2'></FaUserEdit> Edit Profile </button>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 deshbord">
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
