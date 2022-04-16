import React from 'react'
import img1 from '../img/dy4.png'

export default function Saftythree() {
    return (
        <div className='row'>
            <h1 className='saftyheder mb-5'>DISCORD SAFETY
                CENTER
            </h1>
            <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="" style={{ textAlign: 'start' }}>

                        <p className='saftytextheder'>When we receive a report from a Discord user, the Trust & Safety team looks through the available evidence and gathers as much information as possible. This investigation is centered around the reported messages, but can expand if the evidence shows that there’s a bigger violation. For example, if the entire server is dedicated to bad behavior, or if the behavior appears to be part of a wider pattern.

                            We spend a lot of time in this proces
                        </p>
                        <p className='saftytextheder mt-3'>
                            We might ask the reporting user for more information to help our investigation.

                            Responding to user reports is an important part of Trust & Safety’s work, but we know there is also violating content on Discord that might go unreported. This is where we get proactive. Our goal is to stop bad actors and their activity before  </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 my-5" >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="" style={{ textAlign: 'start' }}>
                    <img className='' style={{height:'300px',width:'100%'}} src={img1} alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}
