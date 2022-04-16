import React from 'react'
import pic from '../img/home4.svg'

export default function Hanging() {
    return (
        <div style={{   }} className='container d-flex justify-content-center align-items-center my-5 hwall' >
            <div className='container h-100 w-100'>
                <div className="row h-100 w-100 ">

                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div className=" text-start">
                            <h1  className=' discord-headline'>Where hanging out is easy</h1>
                            <p style={{ lineHeight: '1.9rem' }} className='text-start' >Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
                        </div>
                    </div>

                    <div className="col-md-7 d-flex justify-content-end align-items-center ">
                        <img className='img-fluid' src={pic} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
