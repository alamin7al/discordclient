import React from 'react'
import img1 from '../img/dy3.png'

export default function Saftyfour() {
    return (
        <div className='row'>
            <h1 className='saftyheder mb-5'>FOUR STEPS TO A SUPER SAFE ACCOUNT
            </h1>
            <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="" style={{ textAlign: 'start' }}>

                        <p className='saftytextheder'> If it happened in a Direct Message or contacting the moderators doesn’t help, fill out the Report Form.

                            Please make sure to fill in all fields on the form. Providing a concise summary of the issue and including relevant message links will help us respond to your request quickly.

                            You’ll get an email confirming your report, and we’ll send another email when we’ve investigated the situation.`
                        </p>
                        <p className='saftytextheder mt-3'>
                            If the violation happened on a server, you should first reach out to the server’s moderators, who may be able to respond immediately and help resolve your concerns. In addition, please remember that you always have the ability to block any users that you don’t want to interact with anymore.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="" style={{ textAlign: 'start' }}>
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
