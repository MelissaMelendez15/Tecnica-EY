import React from 'react'

import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './Navbar.css'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='navbar-main'>
        <Nav>
           <Nav.Link>
              <Link to="/" className='navbar-main'><p>Imagen</p></Link>
           </Nav.Link>
        </Nav>
    </Navbar>
    )
}


export default Navigation