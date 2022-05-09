import React, { useState } from 'react'
import './Navbar.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);
  
  return (
    <MDBNavbar expand='lg' dark bgColor='dark' className='navbar-style'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarCenteredExample'
          aria-controls='navbarCenteredExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}
          
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Party Packages
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Book Now
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='navbar-item'>
              <MDBNavbarLink active aria-current='page' href='#'>
                Careers
              </MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Navbar