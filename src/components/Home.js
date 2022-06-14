import React from 'react'
import Carousel from './Carousel'
import './Home.css'
import TopImage from './TopImage'
import image from '../assets/whitebackground.jpg'


const Home = () => {
  return (
    <div className='home-container'>
      <TopImage image={image} className='top'/>
        <div className='intro'>
          <p>
            Welcome To Exotic Dollz Entertainment
          </p>
          <p>
            The most exciting exotic entertainment for events in Texas and Oklahoma. Exotic Dollz Entertainment provides the best exotic entertainment for all types of party events.
          </p>
        </div>
        <div className='second-title'>
          <p>We Specialize in...</p>
          <div className='carousel-contain'>
            <Carousel />
          </div>
        </div>
    </div>
  )
}

export default Home