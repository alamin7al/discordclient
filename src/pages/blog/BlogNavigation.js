import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SiDiscord } from 'react-icons/si';
import BlogNavbarBackground from './BlogNavbarBackground';

export default function BlogNavigation() {
    return (
        <div style={{ background: '#404EED' }}>
            <Navbar className='text-white mx-3' expand="lg">

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
                    <Nav className="me-end">

                    </Nav>
                    <button className='btnheder'>Open Discord</button>

                </Navbar.Collapse>

            </Navbar>
            <BlogNavbarBackground />
        </div>
    )
}
