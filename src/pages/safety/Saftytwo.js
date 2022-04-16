import React from 'react'
import img1 from '../img/dy1.png'

export default function Saftytwo() {
    return (
        <div className='row'>
            <h1 className='saftyheder mb-5'>HELPING YOUR TEEN STAY SAFE ON DISCORD
            </h1>
            <div className="col-md-12 col-lg-6 col-sm-12 my-1" >
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                    <div className="" style={{ textAlign: 'start' }}>

                        <p className='saftytextheder'> As a parent, we encourage you to spend some time reviewing and discussing your teen’s settings so that you can customize their Discord experience. More details on all our privacy and security tools can be found here.
                            Over the years, Discord has designed tools to protect our users from inappropriate content or unwanted contact. Knowing how to use these tools will give you full control of your Discord experience and will help you avoid unwanted experiences
                        </p>
                        <p className='saftytextheder mt-3'>
                            We spend a lot of time in this process because we believe the context in which something is posted is important and can change the meaning entirely, like whether something’s said in jest between friends or is instead plain harassment. We might ask the reporting user for more information to help our investigation. </p>
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
