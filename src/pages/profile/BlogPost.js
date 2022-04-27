import React, { useState } from 'react'
import useAuth from '../login/useAuth';
import './Blog.css'
export default function BlogPost() {
  const { user } = useAuth()
  const emailName = (user.email)
  const date = (user?.metadata?.creationTime)

  const [heding, setheding] = useState('');
  const [desc, setdesc] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('heding', heding);
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('email', emailName);
    formData.append('date', date);
    console.log(formData);
    fetch('http://localhost:5000/blogdata', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert(' added successfully')
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
