import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({image, alt, title, textOne, textTwo, link, button, styling}) => {
  return(
  <MDBCard style={{ maxWidth: '50em'}} id={styling} className='h-100'> 
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={image} alt={alt} fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className='cardTitle'>{title}</MDBCardTitle>
            <MDBCardText className='textOne'>
              {textOne}
            </MDBCardText>
            <MDBCardText>
              {textTwo}
            </MDBCardText>
            <div className='buttonContainer'>
            <MDBBtn className='cardButton' href={link}>{button}</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  styling: PropTypes.string.isRequired
}

export default Card