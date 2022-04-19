import React from 'react'
import pic from '../img/home1.svg'
import './Invite.css'
export default function Invite() {
    return (

        <div className='container d-flex justify-content-center align-items-center my-5 hwall'  >
            <div
            
            data-aos="fade-up"
            data-aos-duration="1000"
            className='container '>
                <div className="row ">
                    <div className="col-md-7  d-flex justify-content-start align-items-center ">
                        <img className='img-fluid' src={pic} alt="" />
                    </div>
                    <div className="col-md-5  d-flex justify-content-end align-items-center">
                        <div className=" text-start">
                        <h1  className=' discord-headline'>Create an invite-only place where you belong</h1>

                       
                            <p style={{lineHeight:'1.8rem'}} >Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
