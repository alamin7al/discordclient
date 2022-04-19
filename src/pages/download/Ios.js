import React from 'react';
import img1 from '../img/Capture1.PNG'
import img2 from '../img/d4.svg'
import img3 from '../img/Capture2.PNG'
import img4 from '../img/d5.svg'


import { RiArrowDownSLine } from 'react-icons/ri';

const Ios = () => {
    return (
        <div className="my-5">
            <div className='container '>
                <div
                
                data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                className="row ">
                    <div className="col-md-6 gy-5">
                        <div style={{}} className="">
                            <div className='p-5 textstyle' style={{ width: '100%', background: '#F6F6F6' }}>
                                <h3>iOS</h3>
                                <button className='commonnbtn'>Download</button>
                                <img className='w-100 h-100 mx-auto' src={img1} alt="" />
                            </div>
                        </div>
                        <div style={{}}>
                            <div className='p-5 textstyle' style={{ width: '100%', background: '#F6F6F6' }}>
                                <h3>iOS</h3>
                                <button className='commonnbtn'>Download</button>
                                <img className='w-100 h-100 mx-auto' src={img2} alt="" />
                            </div>
                        </div>



                    </div>
                    <div className="col-md-6 gy-5 d-flex justify-content-center align-items-center androidstyle">
                        <div className="">
                            <div style={{}} className="">
                                <div className='p-5 textstyle' style={{ width: '100%', background: '#F6F6F6' }}>
                                    <h3>Android</h3>
                                    <button className='commonnbtn'>Download</button>
                                    <img className='w-100 h-100 mx-auto' src={img3} alt="" />
                                </div>
                            </div>
                            <div style={{}}>
                                <div className='p-5 textstyle' style={{ width: '100%', background: '#F6F6F6' }}>
                                    <h3>Mac</h3>
                                    <button className='commonnbtn'>Download</button>
                                    <img className='w-100 h-100 mx-auto' src={img4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-8 gy-5">
                        <div className='text-start '>
                            <div className='p-5 textstyle text-start' style={{ width: '100%', background: '#F6F6F6' }}>
                                <h3 className='lh-lg '>Feeling experimental?</h3>
                                <p style={{fontSize:'18px'}} className='lh-base '>Try our Public Test Build and test new features before they launch.</p>


                              



                                <button style={{ fontSize: '' }} className='btnheder3'> Download Public Test Build  <RiArrowDownSLine className='arrow'></RiArrowDownSLine> </button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ios;