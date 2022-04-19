import React from 'react';
import { SiDiscord } from 'react-icons/si';
import nitroimg from '../img/Nitroclassic-removebg-preview.png'
import './NitroClassic.css'
export default function NitroClassic() {
    return (
        <div className=' classicbackground' style={{ height: '100%', width: '100%' }}>
            <div className="container" >
                <div
                data-aos="fade-up"
                
                className="row" >
                    <div className="col-md-7 col-lg-6 col-sm-6 my-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{ textAlign: 'start' }}>
                                <img className='' style={{ height: 'img-fluid', width: '100%' }} src={nitroimg} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-6 col-sm-6 my-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{ textAlign: 'start' }}>
                                <div className="d-flex justify-content-start align-items-center text-white">
                                    <SiDiscord style={{ backgroundColor: '', }} className='display-3'></SiDiscord>
                                    <h3 className='ms-3 fs-3'>  Discord</h3>
                                </div>
                                <h1 style={{ fontSize: '80px' }} className='my-1 text-white '>NITRO</h1>
                                <h1 style={{ fontSize: '40px' }} className='my-1 text-white '>CLASIC</h1>
                                <p className=' discord-text text-white'>Keep it simple — get the base chat perks without a Server Boost.

                                </p>
                                <button  className='nitrobtn1'>$99.99 Per Year <em className='border-5  emborder'>16%off</em> </button>
                                <br />
                                <button  className='nitrobtn2 mb-4'>9.9 Per Month</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
