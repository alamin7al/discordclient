import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../login/useAuth'
import CrudNavigation from './CrudNavigation'
import Crudprofile from './Crudprofile'
import pr from '../img/profileimgicon.png'
import './crud.css'
export default function UserEdit() {
  const { user } = useAuth()
  const { id } = useParams()


  const [single, setSingle] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5000/facedata/${id}`)
      .then(res => res.json())
      .then(data => setSingle(data))

  }, [single, id])

  console.log(single);





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

              <div className='d-flex justify-content-start'>
                <img className='rounded' style={{ height: '90px', width: 'auto' }} src={`data:image/png;base64,${single.image}`}
                  alt="" />
                <p style={{ color: '#fff', fontWeight: '400', lineHeight: '1.625' }} className='my-4 saftytext ms-3 mb-5'>
                  {single.desc}
                </p>
              </div>
              {/* <h3 style={{ fontWeight: '500' }} className='principleText my-4'>We’re determined to make sure that Discord will </h3> */}






            </div>
          </div>
        </div>

      </div>
    </>




  )
}
