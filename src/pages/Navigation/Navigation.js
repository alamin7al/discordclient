import React from 'react'
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { SiDiscord } from 'react-icons/si';
import './Navigation.css'
import useAuth from '../login/useAuth';
export default function Navigation() {
  const { user, logOut } = useAuth()
  const UserMenu = (
    <Image
      src={user.photoURL}
      alt="UserName profile image"
      roundedCircle
      style={{ height: '40px', width: '40px', }}
    />
  )

  console.log(user);
  return (
    <div style={{ background: '#3F4EEF' }}>
      <Navbar className='text-white mx-3 container' expand="lg">
        <NavLink className='text-white' to='/home'>
          <div className="d-flex justify-content-center align-items-center">
            <SiDiscord style={{ backgroundColor: '', }} className='display-5'></SiDiscord>
            <h3 className='ms-3 fs-5'>  Discord</h3>
          </div>

        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-white">
            <NavLink className='navbarstyle' to='/home'> Home</NavLink>
            <NavLink className='navbarstyle' to='/download'> Download</NavLink>
            <NavLink className='navbarstyle' to='/nitro'> Nitro</NavLink>
            <NavLink className='navbarstyle' to='/safty'> Safty</NavLink>
            <NavLink className='navbarstyle' to='/blog'> Blog</NavLink>
            <NavLink className='navbarstyle' to='/help'> Support</NavLink>
            <NavLink className='navbarstyle' to='/carer'> Carer</NavLink>

          </Nav>
          <Nav className="me-start">

          </Nav>
          {
            user?.email ?
              <NavDropdown className='' id="" title={UserMenu}>
                <NavLink className='w-25 h-25' to='/profile'>
                  <div className="profileedit text-center">
                    <p className='text-center m-0 logoutbtn'>MY Profile</p>
                    <button className='logoutbtn' onClick={logOut}>LogOut</button>
                  </div>
                </NavLink>
              </NavDropdown>

              : <Link className='text-dark text-decoration-none fs-5 text-dark' to='/login'>
                <button className='loginbtn'>
                  Login
                </button>
              </Link>
          }


        </Navbar.Collapse>

      </Navbar >
    </div >
  )
}
