import React, { useState } from 'react'
import './Safty.css'
import img1 from '../img/safty.svg'
import Saftyone from './Saftyone';
import Saftytwo from './Saftytwo';
import Saftythree from './Saftythree';
import Saftyfour from './Saftyfour';
export default function SaftyHeder() {
    const [nav, setNav] = useState("saftyone");
    return (
        <div className='my-5' style={{ height: '100%', width: '100%' }}>
            <div className="container" style={{ height: '100%' }}>
                <div className="" style={{ height: '100%' }}>

                    <div className="btnbody">
                        <button onClick={() => setNav("saftyone")} className='btnsafty'>Safty Center</button>
                        <button onClick={() => setNav("saftytwo")} className='btnsafty'>Controlling Your Experience </button>
                        <button onClick={() => setNav("saftythree")} className='btnsafty'>Parents & Educators</button>
                        <button onClick={() => setNav("saftyfour")} className='btnsafty'>How We Enforce Rules</button>
                    </div>
                    <hr className='hrsaftystyle mb-4 mt-1' />

                



                        {
                            nav === "saftyone" && <Saftyone />
                        }
                        {
                            nav === "saftytwo" && < Saftytwo />
                        }
                        {
                            nav === "saftythree" && < Saftythree />
                        }
                        {
                            nav === "saftyfour" && < Saftyfour />
                        }

             







                    {/* <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{ textAlign: 'start' }}>

                                <p className='saftytextheder'> Discord is a place dedicated to talking and hanging out with your friends, family and communities. Millions of diverse communities are on Discord, from small groups of old friends to huge servers where hundreds of thousands of people can connect over shared interests.
                                </p>
                                <p className='saftytextheder mt-3'>
                                    Discord isn’t a social media platform. There is no algorithm deciding what you should see, no endless scrolling, no news feed, no counting likes, no going viral. Instead, Discord is a place where everyone can be themselves and spend time with other people who share their interests and hobbies. Conversations on Discord are driven only by the people you choose and the topics you pick.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12 my-5" >
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <div className="" style={{ textAlign: 'start' }}>
                                <img className='img-fluid' src={img1} alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    )
}
