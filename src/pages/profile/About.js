import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../login/useAuth'


export default function About() {
  const { user } = useAuth()


  const [singleuser, setSingleUser] = useState([])
  useEffect(() => {
    fetch(`https://still-plateau-84079.herokuapp.com/useremail?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setSingleUser(data)

      )
  }, [user?.email])
  console.log(singleuser);

  // if (singleuser.length === 0) {
  //   <h3 className='text-white display-3'>loading...</h3>
  // }


  return (
    <>
      {/* {
          singleuser.length === 0 ? <h4 className='display-6 text-white'>Loading...</h4> : ''
        }
      */}
   

        <div className='  aboutdata w-100 h-100 '>
          {
            singleuser.slice(0, 1).map(s => 
            <div className="my-4 w-100 h-100 text-white ">

              <div key={s._id} className="d-flex ">
                <h1 className='fw-lighter text-uppercase'>Name </h1>
                <h1 className='fw-lighter text-uppercase'> <em className='fw-bold'> {user.displayName}</em> </h1>
              </div>
              <div className="d-flex">
                <h1 className='fw-lighter text-uppercase'>Email </h1>
                <h1 className='fw-lighter text-uppercase'><em> {user.email} </em> </h1>
              </div>
              <div className="d-flex">
                <h1 className='fw-lighter text-uppercase'>Profession </h1>
                <h1 className='fw-lighter text-uppercase'><em> {s.profession} </em> </h1>
              </div>
              <div className="d-flex">
                <h1 className='fw-lighter text-uppercase'>Gender </h1>
                <h1 className='fw-lighter text-uppercase text-start'><em>{s.gender}</em> </h1>
              </div>
              <div className="d-flex">
                <h1 className='fw-lighter text-uppercase'>Address </h1>
                <h1 className='fw-lighter text-uppercase text-start'><em>{s.address}</em> </h1>

              </div>
              <div className="d-flex ">
                <h1 className='fw-lighter text-uppercase'>Website </h1>
                <h1 className='fw-lighter text-uppercase text-start'><em className='' style={{ fontSize: '16px' }}>{s.website}</em> </h1>
              </div>
              <div className="d-flex justify-content-start align-items-center borderbootomstyle">
                <h1 className='fw-lighter text-uppercase'>Biography </h1>

                <textarea style={{ background: '#404EED' }} class="form-control ms-3 text-white" id="exampleFormControlTextarea1" rows="6">
                  {s.bio}
                </textarea>



              </div>

            </div>)
          }
        </div>
      


    </>
  )
}
