import React from 'react';
import { SiDiscord } from 'react-icons/si';
import nitroimg from '../img/nitroheder-removebg-preview.png'
const NitroHeder = () => {
    return (
        <div className='my-5' style={{ height: '100%', width: '100%' }}>
            <div className="container" style={{ height: '100%' }}>
                <div 
                data-aos="fade-up"
               
                className="row" style={{ height: '100%' }}>
                    <div className="col-md-7 mb-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{textAlign:'start'}}>
                                <div className="d-flex justify-content-start align-items-center text-white">
                                    <SiDiscord style={{ backgroundColor: '', }} className='display-3'></SiDiscord>
                                    <h3 className='ms-3 fs-3'>  Discord</h3>
                                </div>
                                <h1 style={{fontSize:'80px'}} className='my-1 text-white '>NITRO</h1>
                                <p className=' discord-text text-white'>Get an enhanced Discord experience for one low monthly cost. Upgrade your emoji, enjoy bigger file uploads, stand out in your favorite Discords, and more.
                                </p>
                                <button style={{}} className='nitrobtn1'>$99.99 Per Year <em className='border-5  emborder'>16%off</em> </button>
                                <br />
                                <button style={{}} className='nitrobtn2 mb-4'>9.9 Per Month</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{textAlign:'start'}}>
                                <img className='' style={{height:'350px',width:'100%'}} src={nitroimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NitroHeder;








