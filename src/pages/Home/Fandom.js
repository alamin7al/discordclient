import React from 'react'
import pic from '../img/home2.svg'
export default function Fandom() {
  return (
    <div  className='container d-flex justify-content-center align-items-center my-5 hwall'  >
    <div className='container h-100 w-100'>
        <div className="row h-100 w-100">
            <div className="col-md-7 d-flex justify-content-start align-items-center ">
                <img className='img-fluid' src={pic} alt="" />
            </div>
            <div className="col-md-5 d-flex justify-content-end align-items-center">
                <div className=" text-start">
                <h1 className=' my-4 discord-headline '>From few to a fandom</h1>
                   
                    <p style={{lineHeight:'1.8rem'}} >Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}
