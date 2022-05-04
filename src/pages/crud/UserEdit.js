import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../login/useAuth'
import CrudNavigation from './CrudNavigation'
import Crudprofile from './Crudprofile'
import pr from '../img/profileimgicon.png'
import './crud.css'
import { useForm } from 'react-hook-form'
import { Spinner } from 'react-bootstrap'
export default function UserEdit() {
  const { user } = useAuth()
  const { id } = useParams()
  const [processing, setProcessing] = useState(false);

  const [single, setSingle] = useState({})

  useEffect(() => {
    fetch(`https://still-plateau-84079.herokuapp.com/facedata/${id}`)
      .then(res => res.json())
      .then(data => setSingle(data))

  }, [single, id])


  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    setProcessing(true)

    const url = `https://still-plateau-84079.herokuapp.com/facedata/${id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount >= 0) {
          alert('updated successfull')
          setProcessing(false)

        }
      })
  };













  return (
    <>
      <div className="">
        <CrudNavigation />
        <Crudprofile />
      </div>
      <div>

        <div style={{ backgroundColor: '#BA77EC' }} className='p-4'>
          <div className="col-lg-6 col-md-6 mx-auto">
            <div className="userbody">
              <div className="d-flex justify-content-start align-items-center  text-white ">


                {
                  user?.photoURL ? <div>
                    <img className='rounded-pill' style={{ height: '50px', width: '100%' }} src={user.photoURL} alt="" />
                  </div> : <div>
                    <img className='rounded-pill' style={{ height: '50px', width: '100%' }} src={pr} alt="" />
                  </div>
                }


                <div className='d-flex justify-content-center align-items-center mt-3  '>
                  <p className='fs-5 lead text-white ms-2'> {user.displayName} </p>
                  <p style={{ fontSize: '16px' }} className=' lead text-white ms-1'>{user?.metadata?.creationTime}</p>

                </div>


              </div>
              {
                single._id ?
                  <form className='aboutdata ' onSubmit={handleSubmit(onSubmit)}>



                    <div className='d-flex justify-content-start text-start'>
                      <div>
                        <img className='rounded me-4' style={{ height: '100%', width: '150px' }} src={`data:image/png;base64,${single.image}`}
                          alt="" />
                      </div>

                      <div className='w-100'>
                        <textarea defaultValue={single.desc}
                          {...register("desc")} style={{ background: 'transparent' }} class="form-control w-100  text-white fw-light " id="exampleFormControlTextarea1" rows="4"></textarea>
                        <textarea placeholder='Comment Box'
                          {...register("commant")} style={{ background: 'transparent' }} class="form-control   fw-light   w-100 mt-2 mx-auto" id="exampleFormControlTextarea1" rows="2"></textarea>


                        {
                          processing && <>

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
                        }

                        <div className='text-start'>
                          <button type='submit' className='crudbtn  my-3 '>
                            submit
                          </button>
                        </div>
                      </div>

                    </div>






                  </form> : <>
                    <h5 className='text-white'>Create Post first</h5>

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
              }




            </div>
          </div>
        </div>

      </div>
    </>




  )
}
