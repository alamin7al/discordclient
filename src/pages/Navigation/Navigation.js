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

      roundedCircle
      style={{ height: '40px', width: '40px', }}
    />
  )


  return (
    <div style={{ background: '#3F4EEF' }} >
      <div className="">
        <Navbar className='text-white container' expand="lg">
          <NavLink className='text-white' to='/home'>
            <div className="d-flex justify-content-center align-items-center">
              <SiDiscord style={{ backgroundColor: '', }} className='display-5'></SiDiscord>
              <h3 className='ms-3 fs-5'>  Discord</h3>
            </div>

          </NavLink>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=''>
            <Nav className="mx-auto text-white">
              <NavLink className='navbarstyle' to='/home'> Home</NavLink>
              <NavLink className='navbarstyle' to='/download'> Download</NavLink>
              <NavLink className='navbarstyle' to='/nitro'> Nitro</NavLink>
              <NavLink className='navbarstyle' to='/safty'> Safty</NavLink>
              <NavLink className='navbarstyle' to='/blog'> Blog</NavLink>
              <NavLink className='navbarstyle' to='/help'> Support</NavLink>
              <NavLink className='navbarstyle' to='/carer'> Carer</NavLink>                <NavLink className='navbarstyle' to='/crypto'> Crypto</NavLink>

            </Nav>
            <Nav className="">
              {
                user?.email ?
                  <div>
                    {
                      user?.photoURL ? <NavDropdown className='' id="" title={UserMenu}>
                        <NavLink className='w-25 h-25' to='/profile'>
                          <div className="profileedit text-center">
                            <p className='text-center m-0 logoutbtn'>MY Profile</p>
                            <Link to='/'>

                              <button className='logoutbtn' onClick={logOut}>LogOut</button>
                            </Link>
                          </div>
                        </NavLink>
                      </NavDropdown> : <NavDropdown className='logout' id="" title='logout'>
                        <NavLink className='w-25 h-25' to='/profile'>
                          <div className="profileedit text-center">
                            <p className='text-center m-0 logoutbtn'>MY Profile</p>
                            <Link to='/'>

                              <button className='logoutbtn' onClick={logOut}>LogOut</button>
                            </Link>
                          </div>
                        </NavLink>
                      </NavDropdown>
                    }
                  </div>

                  : <Link className='text-dark text-decoration-none fs-5 text-dark' to='/login'>
                    <button className='btnheder'>
                      Login
                    </button>
                  </Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      </div >
    </div>
  )
}
