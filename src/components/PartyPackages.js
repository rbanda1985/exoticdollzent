import React from 'react'
import ImageBanner from './ImageBanner'
import './PartyPackages.css'
import image from '../assets/partypackage.jpg'

const PartyPackages = () => {
  return (
    <div className='party-container'>
      <ImageBanner image={image} textOne='Party Packages' />
    </div>
  )
}

export default PartyPackages