import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import useAuth from '../login/useAuth'


export default function About() {
  const { user } = useAuth()

  const [singleuser, setSingleUser] = useState([])
  useEffect(() => {
    
    fetch(`http://localhost:5000/useremail?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setSingleUser(data)
      
      )
  }, [user?.email])

  // if (singleuser.length === 0) {
  //   <h3 className='text-white display-3'>loading...</h3>
  // }


  return (
    <>
      {
        singleuser.length === 0 ? <div style={{ marginTop: '10px' }}>
          <>
            <h5 className='text-white'>Create your profile first</h5>

            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </>
        </div> : ''
      }



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
