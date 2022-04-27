import React, { useState } from 'react'
import About from './About'
import './Profile.css'
import { FaUserEdit } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi';
import { FaBlogger } from 'react-icons/fa';


import { FcAbout } from 'react-icons/fc';
import useAuth from '../login/useAuth';
import { Link } from 'react-router-dom';
import ProfileFilup from './ProfileFilup';
import BlogPost from './BlogPost';
import { Spinner } from 'react-bootstrap';

export default function ProfileDeshbord() {
    const [nav, setNav] = useState('about')
    const { singleuser } = useAuth()


    if (singleuser.length === 0) {
        <>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />

        </>
    }

    return (
        <div className=' profilehed ' style={{ height: '100%', width: '100%', }}>
            <div className="container " style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>
                    <div className="row gx-5 ">
                        {
                            singleuser.length === 0 ? <>
                                <Spinner animation="border" variant="primary" />
                                <Spinner animation="border" variant="secondary" />
                            </> : ''
                        }
                        <div className="col-lg-3 col-md-3  ">

                            <div className="deshbordbtn  text-start my-5">
                                <button onClick={() => setNav("fill")} className='aboutbtn fw-lighter text-uppercase text-start"'><HiInformationCircle style={{ backgroundColor: '' }} className='fs-2' /> Information </button>
                                <button onClick={() => setNav("about")} className='aboutbtn fw-lighter text-uppercase text-start"'><FcAbout style={{ color: '#fff' }} className='fs-2' /> About </button>
                                {
                                    singleuser.slice(0, 1).map((s, i) => <>
                                        <Link key={i} to={`/edit/${s._id}`}>
                                            <button className='editbtn my-4 fw-lighter text-uppercase text-start"'><FaUserEdit className='fs-2' /> Edit Profile </button>
                                        </Link>
                                    </>)
                                }

                                <button onClick={() => setNav("blog")} className='aboutbtn fw-lighter text-uppercase text-start"'><FaBlogger className='fs-2' /> Blog </button>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 deshbord my-5 ">
                            {
                                nav === "about" && <About />
                            }
                            {
                                nav === "fill" && <ProfileFilup />
                            }
                            {
                                nav === "blog" && <BlogPost />
                            }

                        </div>
                    </div>
                </div>
            </div>
  
        </div>
    )
}
