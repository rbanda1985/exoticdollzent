import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import imageData from '../data';
import './Carousel.css'

const Carousel = () => {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        {
          imageData.map((data, index) => <MDBCarouselItem key={index} item={data} className={index === 0 ? 'active' : ''}>
            <MDBCarouselElement src={data.image} alt={data.alt} />
            <MDBCarouselCaption>
              <h5 className={data.className}>{data.label}</h5>
            </MDBCarouselCaption>
          </MDBCarouselItem>)
        }
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default Carousel