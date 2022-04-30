import React, { useState } from 'react'
import './crud.css'
import UserEdit from './UserEdit'
import Userpost from './Userpost'
import UserSee from './UserSee'
export default function CrudDeshbord() {
    const [nav, setNav] = useState('userpost')

    return (
        <div className=' profilehed ' style={{ height: '100%', width: '100%', backgroundColor: '#BA77EC' }}>
            <div className="container " style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>
                    <div className="row">
 
                        <div className="col-lg-2 col-md-2  ">
                            <div className="deshbordbtn  text-start my-5">
                                <button onClick={() => setNav("userpost")} className='aboutbtn fw-lighter text-uppercase text-start"'>Create post </button>

                                <button onClick={() => setNav("usersee")} className='aboutbtn fw-lighter text-uppercase text-start"'>Public </button>
                                {/* <button onClick={() => setNav("useredit")} className='aboutbtn fw-lighter text-uppercase text-start"'>About </button> */}
                            </div>
                        </div>
                        <div style={{ backgroundColor: '#BA77EC' }} className="col-lg-10 col-md-10 deshbord my-5 ">
                            {
                                nav === "userpost" && <Userpost />

                            }
                            {
                                nav === "usersee" && <UserSee />

                            }
                            {/* {
                                nav === "useredit" && <UserEdit />

                            } */}




                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
