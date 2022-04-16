import React from 'react'
import background from '../img/discorsm.png'
import './Help.css'

export default function HelpHeder() {
    const myStyles = {
        background: `url(${background})`,
        height: '330px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };
    return (
        <div style={myStyles}className="" >
            <div className="d-flex justify-content-center align-items-center h-100 w-100 mx-autoh-100
           container">
                <div style={{ height: '100px', width: '600px' }} className="">
                    <h1 className='text-white mx-auto fs-1'>Help Center</h1>
                    <input type="text" placeholder='search' className='inputstyle' />
                </div>
            </div>
        </div>
    )
}
