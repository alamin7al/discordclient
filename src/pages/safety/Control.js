import React from 'react'

export default function Control() {
    return (
        <div className="my-5">
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center align-items-center my-5">
                        <div style={{ height: '', width: '100%' }}>
                            <h1 style={{ color: '#23272A' }} className=' saftyheder my-4'> Controlling Your Experience
                            </h1>
                            <p style={{ color: '#23272A', lineHeight: '1.625' }} className='saftytext'> These resources will help you learn how you can create the best Discord experience for you. We cover everything from account tips, to server management, to how to report problems directly to our Trust and Safety team.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                        <div>
                            <p className='control-text my-4'>Four steps to a super safe account</p>
                            <p className='control-text my-4'>Four steps to a super safe server</p>
                            <p className='control-text my-4'>Role of administrators and moderators on Discord</p>
                            <p className='control-text my-4'>Reporting problems to Discord</p>
                            <p className='control-text my-4'>Mental health on Discord</p>
                            <p className='control-text my-4'>Age-Restricted Content on Discord</p>
                            <p className='control-text my-4'>Tips against spam and hacking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
