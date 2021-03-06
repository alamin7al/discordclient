import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import useAuth from '../login/useAuth';
import './Blog.css'
export default function BlogPost() {
  const { user } = useAuth()
  const email = (user.email)
  const date = (user?.metadata?.creationTime)
  const [processing, setProcessing] = useState(false);

  const [heding, setheding] = useState('');
  const [desc, setdesc] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = e => {
    setProcessing(true)

    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('heding', heding);
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('email', email);
    formData.append('date', date);
    console.log(formData);
    fetch('https://still-plateau-84079.herokuapp.com/blogdata', {
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
    <div>
      <form onSubmit={handleSubmit}>
        <div class="cards mb-3" style={{ maxWidth: '100%' }}>
          <div class="row g-0">

            <div class="col-md-12  text-start">
              <label className='my-2 fw-lighter text-uppercase text-white d-block text-start ' for="inputEmail4">Image Upload</label>
              <input
                className='text-start rounded-2 '

                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
              />
            </div>
            <div class="col-md-12">
              <div class="card-body text-start">
                <>
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
                  <input onChange={e => setheding(e.target.value)} style={{ background: '#404EED' }} type="text" class="form-control my-2 text-white fw-light" />
                </>
                <>
                  <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Description</label>

                  <textarea onChange={e => setdesc(e.target.value)} style={{ background: '#404EED' }} type="text" class="form-control  text-white" id="exampleFormControlTextarea1" rows="6">

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
                  <button type='submit' className='submitbtn my-3'>
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
