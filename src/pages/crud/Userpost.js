
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import useAuth from '../login/useAuth';
import './crud.css'
export default function Userpost() {


  const { user } = useAuth()
  const email = (user.email)
  const date = (user?.metadata?.creationTime)
  const [processing, setProcessing] = useState(false);

  const [desc, setdesc] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = e => {
    setProcessing(true)

    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();

    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('email', email);
    formData.append('date', date);
    console.log(formData);
    fetch('http://localhost:5000/facedata', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert(' added successfully')
          setProcessing(false)

        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  return (
    <div className='bor'>
       <form onSubmit={handleSubmit} >
        <div id='bor' class="cards mb-3" style={{ maxWidth: '100%' }}>
          <div class="row g-0 ">

            <div class="col-md-12  text-start ms-3">
              <label className='my-2 fw-lighter text-uppercase text-white d-block text-start ' for="inputEmail4">Image Upload</label>
              <input
                className='text-start rounded-2 '
                style={{ background: '#BA77EC' }}
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
              />
            </div>
            <div class="col-md-12">
              <div class="card-body text-start">
             
                <>
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Whats On Your Mind *</label>

                  <textarea placeholder='Whats On Your Mind' onChange={e => setdesc(e.target.value)} style={{ background: '#BA77EC',color:'#fff' }} type="text" class="form-control fs-3   text-white" id="exampleFormControlTextarea1" rows="3">

                  </textarea>
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
                  <button type='submit' className='crudbtn my-3'>
                    submit
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
