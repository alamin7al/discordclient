import React from 'react'
import '../Footer/Footer.css'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { BsDiscord } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='' style={{ backgroundColor: '#23272A', height: '100%' }}>

      <div className="container h-100 ">
        <div className="row h-100 " >
          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 d-flex justify-content-start align-items-center text-white text-start mt-5 ">
            <div className="">
              <h1 className='imagine mt-5 '>IMAGINE <br /> A PLACE</h1>
              <h4 className='my-4'>English, USA ^</h4>
              <div class="icon-styles d-flex">
                <a href=""> <i class="fab fa-github fa-2x"></i> </a>
                <a href=""> <i class="fab fa-facebook fa-2x"></i> </a>
                <a href=""> <i class="fab fa-instagram fa-2x"></i> </a>
                <a href=""> <i class="fab fa-twitter fa-2x"></i> </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center text-white text-start mt-5 mt-5">
            <div className="product">
              <h4>Product</h4>
              <p>Download</p>
              <p>Nitro</p>
              <p>Status</p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-6 d-flex justify-content-center align-items-center text-white text-start mt-5">
            <div className="product">
              <h4>Company</h4>
              <p>About</p>
              <p>Jobs</p>
              <p>Bralging</p>
              {/* <p>Newsroom</p> */}
            </div>
          </div>
          <div className="col-lg-2  col-sm-6 col-xs-6 d-flex justify-content-center align-items-center text-white text-start mt-5">
            <div className="product">
              <h4>Resourcsx</h4>
              <p>College</p>
              <p>Support</p>
              <p>Safety</p>
              {/* <p>Blog</p>
              <p>Feedback</p>
              <p>Developers</p>
              <p>StreamKit</p> */}
            </div>
          </div>
          <div className="col-lg-2  col-sm-12 col-xs-6  d-flex justify-content-center align-items-center text-white text-start mt-5 ">
            <div className="product ">
              <h4>Polices</h4>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookie Settings</p>
              {/* <p>Guidelines</p>
              <p>Acknowledgements</p>
              <p>Moderation</p> */}
            </div>

          </div>
          <hr className='text-white mt-5' />
        </div>
      
      </div>
      <div style={{ background: '#23272A' }}>
          <Navbar className='text-white mx-3 d-flex justify-content-between align-items-center ' expand="lg">

            <div className="d-flex justify-content-center align-items-center my-3">
              <BsDiscord style={{ background: '', }} className='display-5'></BsDiscord>
              <h3 >  Discord</h3>
            </div>
        
   
             
              <Nav className="me-end">
              <button className='footerbtn'>Sign Up</button>
              </Nav>
        
          </Navbar>
        </div>
    </div>
  )
}
