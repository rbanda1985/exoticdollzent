import React from 'react'

const ImageBanner = ({image}) => {
  return (
    <div className='bg-image'>
      <img src={image} className='img-fluid' alt='' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'>Can you see me?</p>
        </div>
      </div>
    </div>
  )
}

export default ImageBanner;