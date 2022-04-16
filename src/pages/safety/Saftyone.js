import React from 'react'
import img1 from '../img/safty.svg'

export default function Saftyone() {
    return (
        <div className='row'>
            <h1 className='saftyheder mb-5'>DISCORD SAFETY
                CENTER
            </h1>
            <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
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
            </div>
        </div>
    )
}
