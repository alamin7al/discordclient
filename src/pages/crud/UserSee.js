import React, { useEffect, useState } from 'react'
import useAuth from '../login/useAuth'
import './crud.css'
import pr from '../img/profileimgicon.png'
import { NavDropdown, NavLink, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function UserSee() {
  const { user } = useAuth()


  const [facedata, setfacedata] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/facedata`
    fetch(url)
      .then(res => res.json())
      .then(data => setfacedata(data))
  }, [])

  const handleDeleted = (id) => {
    const procces = window.confirm('Are You Sure, You Want To Delet')
    if (procces) {
      fetch(`http://localhost:5000/facedata/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount >= 0) {
            alert('deleted SuccessFully ')
            const rstrongainignData = facedata.filter(x => x._id !== id)
            setfacedata(rstrongainignData)
          }

        })
    }
  }



  return (
    <div>
      <div className="">
        <div className="row">
          {
            facedata.length === 0 ? <div style={{ marginTop: '10px' }}>
              <>
                <h5 className='text-white'>Add Blog</h5>

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





          {
            facedata.map((s, i) => <>
              <div key={i} className="col-lg-6 col-md-6 mx-auto">
                <div className="userbody">
                  <div className="d-flex justify-content-center align-items-center  text-white ">


                    {
                      user?.photoURL ? <div>
                        <img className='rounded-pill' style={{ height: '50px', width: '100%' }} src={user.photoURL} alt="" />
                      </div> : <div>
                        <img className='rounded-pill' style={{ height: '50px', width: '100%' }} src={pr} alt="" />
                      </div>
                    }


                    <div className='d-flex justify-content-center align-items-center mt-3  '>
                      <p style={{ fontSize: '15px' }} className='lead text-white ms-2'> {user.displayName} </p>
                      <p style={{ fontSize: '14px' }} className=' lead text-white ms-1'>{user?.metadata?.creationTime}</p>

                      <NavDropdown style={{ backgroundColor: 'transparent!important' }} className='' id="" title={'...'}>
                        <NavLink style={{ height: '100%', width: '100%', backgroundColor: 'transparent!important' }} className='' to='/profile'>
                          <div style={{ backgroundColor: 'transparent!important' }} className="profileedit text-center">
                            <Link className='mx-auto text-white ' to={`/useredit/${s._id}`}>
                              Edit
                            </Link>
                            <button style={{ border: '0', outline: '0', backgroundColor: 'transparent' }} onClick={() => handleDeleted(s._id)} className='border-0 outline-0 mx-auto text-white mt-2'>Delete</button>
                          </div>
                        </NavLink>
                      </NavDropdown>
                    </div>
                  </div>
                  <div className='d-flex justify-content-start'>
                    <img className='rounded' style={{ height: '90px', width: 'auto' }} src={`data:image/png;base64,${s.image}`}
                      alt="" />
                    <p style={{ color: '#fff', fontWeight: '400', lineHeight: '1.625' }} className=' saftytext ms-3 mb-5'>
                      {s.desc}
                    </p>
                  </div>
                  {s.commant && <>
                    <hr />
                    <div className="text-start">
                      <label className='my-1 fw-lighter text-uppercase text-white text-start' for="inputEmail4">Comment Area
                      </label>
                      <button
                      disabled
                      style={{ background: 'transparent',height:'50px' }} class="form-control   fw-light   w-100 mt-2 text-white text-start"  >

                        {s.commant}
                        
                      </button>
                    </div>
                  </>}





                </div>
              </div>
            </>)
          }

        </div>
      </div>
    </div>
  )
}
