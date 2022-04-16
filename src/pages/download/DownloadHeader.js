import React from 'react'
import nitroimg from '../img/d1.svg'
import { BsDownload } from 'react-icons/bs';

export default function DownloadHeader() {
    return (

        <div className='my-5' style={{ height: '100%', width: '100%' }}>
            <div className="container" style={{ height: '100%' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-md-7 my-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="container" style={{ textAlign: 'start' }}>


                                <h1 className=' downloadtext text-white lh-base'>GET DISCORD <br /> <em className=''> FOR</em> <br /> ANY DEVICE
                                </h1>

                                <p style={{ fontSize: '16px', lineHeight: '140%' }} className='text-white mb-5'>An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.
                                </p>
                                <div style={{width:'450px'}} className="d-flex justify-content-start align-items-center ">
                                    <button className='btnheder4 '><BsDownload className='fs-5'></BsDownload> Download For Windows</button> 
                                    <p className='ms-3 text-white mt-4 hedertext'>   Windows 7 or higher
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 my-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{ textAlign: 'start' }}>
                                <img className='' style={{ height: '100%', width: '100%' }} src={nitroimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
