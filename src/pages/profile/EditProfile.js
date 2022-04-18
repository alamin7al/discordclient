import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../login/useAuth';

export default function EditProfile() {

  const { user } = useAuth()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.email = user.email

    fetch('https://still-plateau-84079.herokuapp.com/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('We recived your order.');

        }
      })

    const url = `https://still-plateau-84079.herokuapp.com/user`
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
          alert('updated SuccessFully')

        }
      })

  };

  const [singleuser, setSingleUser] = useState([])
  useEffect(() => {
    fetch(`https://still-plateau-84079.herokuapp.com/useremail?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setSingleUser(data))
  }, [user?.email])




  if (singleuser.length === 0) {
    return (

        <>
            <div className="">
               <h1 className='text-white lead '>Loading.........</h1>
            </div>



        </>
    )
}










  return (
    <div >
      <form className='aboutdata ' onSubmit={handleSubmit(onSubmit)}>
    


        {
          singleuser?.length ?


            <>
              {
                singleuser.slice(0, 1).map(s =>
                  <div className="row">

                    <div className="col-md-6">
                      <div className="h-100 w-100 text-start">
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                        <input {...register("displayName")} defaultValue={user.displayName} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Profession</label>
                        <input defaultValue={s?.profession} {...register("profession")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Address</label>
                        <input defaultValue={s?.address} {...register("address")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Twitter Profile Link

                        </label>
                        <input defaultValue={s?.facebook} {...register("facebook")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Facebook Profile Link

                        </label>
                        <input style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />

                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="h-100 w-100 text-start">
                        <label className='my-1 fw-lighter text-uppercase text-white ' for="inputEmail4">Date Of Birth</label>
                        <input defaultValue={s?.date} {...register("date")} style={{ background: '#404EED' }} class="form-control  my-2 text-white fw-light" type='date' />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Gender</label>
                        <input defaultValue={s?.gender} {...register("gender")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Website</label>
                        <input defaultValue={s?.website} {...register("website")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Instragam Profile Link

                        </label>
                        <input defaultValue={s?.insta} {...register("insta")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link

                        </label>
                        <input defaultValue={s?.linke} {...register("linke")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />

                      </div>
                    </div>
                    <label for="exampleFormControlTextarea1" class="form-label text-start text-white">Biography</label>
                    <textarea defaultValue={s?.bio} {...register("bio")} style={{ background: '#404EED' }} class="form-control p-1 text-white fw-light" id="exampleFormControlTextarea1" rows="4"></textarea>

                    <button type='submit' className='submitbtn my-3'>
                      submit
                    </button>
                  </div>
                )
              }
            </>

            : <div className="row">

              <div className="col-md-6">
                <div className="h-100 w-100 text-start">
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                  <input {...register("displayName")} defaultValue={user.displayName} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Profession</label>
                  <input {...register("profession")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Address</label>
                  <input {...register("address")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Twitter Profile Link

                  </label>
                  <input {...register("facebook")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Facebook Profile Link

                  </label>
                  <input style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />

                </div>
              </div>
              <div className="col-md-6">
                <div className="h-100 w-100 text-start">
                  <label className='my-1 fw-lighter text-uppercase text-white ' for="inputEmail4">Date Of Birth</label>
                  <input {...register("date")} style={{ background: '#404EED' }} class="form-control  my-2 text-white fw-light" type='date' />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Gender</label>
                  <input {...register("gender")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Website</label>
                  <input {...register("website")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Instragam Profile Link

                  </label>
                  <input {...register("insta")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link

                  </label>
                  <input {...register("linke")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />

                </div>
              </div>
              <label for="exampleFormControlTextarea1" class="form-label text-start text-white">Biography</label>
              <textarea {...register("bio")} style={{ background: '#404EED' }} class="form-control ms-3" id="exampleFormControlTextarea1" rows="4"></textarea>

              <button type='submit' className='submitbtn my-3'>
                submit
              </button>
            </div>
        }
      </form >
    </div >
  )
}
