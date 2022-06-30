import React from 'react'
import './ImageBanner.css'
import PropTypes from 'prop-types'; 

const ImageBanner = ({image, textOne}) => {
  return (
    <div className='bg-image'>
      <img src={image} className='img-fluid' alt='' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100 banner-text'>
          <p className='text-white mb-0 image-title'>{textOne}</p>
        </div>
      </div>
    </div>
  )
}


ImageBanner.propTypes = {
  image: PropTypes.string.isRequired,
  textOne: PropTypes.string.isRequired
}


export default ImageBanner;