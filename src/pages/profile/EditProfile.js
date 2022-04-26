import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../login/useAuth';
import Navigation from '../Navigation/Navigation';
// import UserProfile from './UserProfile';
import './Profile.css'
import Deshbordgo from './Deshbordgo';
export default function EditProfile() {
  const { id } = useParams()
  const { user } = useAuth()


  const { register, handleSubmit, watch, setFocus, formState: { errors } } = useForm();



  const onSubmit = data => {
    console.log(data);
    const url = `https://still-plateau-84079.herokuapp.com/singleuser/${id}`
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
          alert('update')
        }
      })
  };


  const [single, setSingle] = useState({})

  useEffect(() => {
    fetch(`https://still-plateau-84079.herokuapp.com/singleuser/${id}`)
      .then(res => res.json())
      .then(data => setSingle(data))
  }, [single, id])

  React.useEffect(() => {
    setFocus("address");
    setFocus("displayName");
    setFocus("email");
    setFocus("profession");
    setFocus("bio");
    setFocus("linke");
    setFocus("insta");
    setFocus("website");
    setFocus("gender");
    setFocus("date");
    setFocus("facebook");
    setFocus("address");
    setFocus("profession");
  }, [setFocus]);
  return (
    <>
      <Navigation />
      <Deshbordgo />
      <div style={{ backgroundColor: '#404EED' }}>
        <div className='container'>
          <form className='aboutdata ' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="h-100 w-100 text-start">
                  {user.displayName &&
                    <>
                      <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                      <input {...register("displayName")} defaultValue={user?.displayName} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                    </>
                  }
                  {user.email &&
                    <>
                      <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                      <input {...register("email")} defaultValue={user?.email} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                    </>
                  }

                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Profession</label>

                    <input defaultValue={single?.profession} {...register("profession")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  </>



                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Address</label>
                    <input defaultValue={single?.address} {...register("address")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  </>



                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Twitter Profile Link

                    </label>
                    <input defaultValue={single?.facebook} {...register("facebook")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  </>



                  {/* <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Facebook Profile Link
                    </label>

                    <input style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  </> */}

                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 w-100 text-start">

                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white ' for="inputEmail4">Date Of Birth</label>

                    <input defaultValue={single?.date} {...register("date")} style={{ background: '#404EED' }} class="form-control  my-2 text-white fw-light" type='date' />
                  </>




                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Gender</label>

                    <input defaultValue={single?.gender} {...register("gender")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  </>



                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Website</label>

                    <input defaultValue={single?.website} {...register("website")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  </>




                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Instragam Profile Link
                    </label>

                    <input defaultValue={single?.insta} {...register("insta")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  </>




                  <>
                    <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link
                    </label>
                    <input defaultValue={single?.linke} {...register("linke")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  </>



                </div>
              </div>

              <>
                <label for="exampleFormControlTextarea1" class="form-label text-start text-white">Biography</label>
                <textarea defaultValue={single?.bio} {...register("bio")} style={{ background: '#404EED' }} class="form-control p-1 text-white fw-light" id="exampleFormControlTextarea1" rows="4"></textarea>
              </>



              <button type='submit' className='submitbtn my-3'>
                submit
              </button>
            </div>



          </form >
        </div >
      </div >

    </>
  )
}
