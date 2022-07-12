import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start footer' color='white'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Exotic Dollz Entertainment
              </h6>
              <p>
                <span>The hottest female exotic dancers for events across the metroplex.</span>
                
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-envelope me-3'></i>
                exoticdollzent@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> (972) 839-9690
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  )
}

export default Footer