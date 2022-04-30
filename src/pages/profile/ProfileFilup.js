import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../login/useAuth';

export default function ProfileFilup() {
    const { user } = useAuth()
    const [processing, setProcessing] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        setProcessing(true)

        const url = `https://still-plateau-84079.herokuapp.com
/user`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('See About Page')
                    setProcessing(false)
                }
            })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">

                <div className="col-md-6">
                    <div className="h-100 w-100 text-start">

                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                            <input {...register("displayName")} defaultValue={user?.displayName} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        </>


                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                            <input {...register("email")} defaultValue={user?.email} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        </>


                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Profession</label>

                            <input  {...register("profession")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        </>



                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Address</label>
                            <input  {...register("address")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        </>



                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Twitter Profile Link

                            </label>
                            <input  {...register("facebook")} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                        </>




                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 w-100 text-start">

                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white ' for="inputEmail4">Date Of Birth</label>

                            <input  {...register("date")} style={{ background: '#404EED' }} class="form-control  my-2 text-white fw-light" type='date' />
                        </>




                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Gender</label>

                            <input {...register("gender")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        </>



                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Website</label>

                            <input  {...register("website")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        </>




                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Instragam Profile Link
                            </label>

                            <input  {...register("insta")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        </>




                        <>
                            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link
                            </label>
                            <input  {...register("linke")} style={{ background: '#404EED' }} type="text" class="form-control  my-2 text-white fw-light" />
                        </>



                    </div>
                </div>

                <>
                    <label for="exampleFormControlTextarea1" class="form-label text-start text-white">Biography</label>
                    <textarea  {...register("bio")} style={{ background: '#404EED' }} class="form-control p-1 text-white fw-light" id="exampleFormControlTextarea1" rows="4"></textarea>
                </>


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
                <button type='submit' className='submitbtn my-3'>
                    submit
                </button>
            </div>
        </form>
    )
}
