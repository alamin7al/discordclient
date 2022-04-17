import React from 'react'

export default function EditProfile() {
  return (
    <div >
      <div  className="row">
        <div className="col-md-6">
          <div className="h-100 w-100 text-start">
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Name</label>
            <input style={{background:'#404EED'}} type="text" class="form-control my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Profession</label>
            <input style={{background:'#404EED'}} type="text" class="form-control my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Address</label>
            <input style={{background:'#404EED'}}   type="text" class="form-control my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Twitter Profile Link

            </label>
            <input style={{background:'#404EED'}} type="text" class="form-control my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Facebook Profile Link

            </label>
            <input style={{background:'#404EED'}} type="text" class="form-control my-2 text-white fw-light" />

          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 w-100 text-start">
            <label className='my-1 fw-lighter text-uppercase text-white ' for="inputEmail4">Date Of Birth</label>
            <input style={{background:'#404EED'}} class="form-control  my-2 text-white fw-light" type='date' />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Gender</label>
            <input style={{background:'#404EED'}} type="text" class="form-control  my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Website</label>
            <input style={{background:'#404EED'}} type="text" class="form-control  my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link

            </label>
            <input style={{background:'#404EED'}} type="text" class="form-control  my-2 text-white fw-light" />
            <label className='my-1 fw-lighter text-uppercase text-white' for="inputEmail4">Linkedin Profile Link

            </label>
            <input style={{background:'#404EED'}} type="text" class="form-control  my-2 text-white fw-light" />



          </div>
        </div>
        <label for="exampleFormControlTextarea1" class="form-label text-start text-white">Biography</label>
        <textarea style={{background:'#404EED'}} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
 
        <button type='submit' className='submitbtn '>
          submit
        </button>

      </div>
    </div>
  )
}
