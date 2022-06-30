import React from 'react'
import './Home.css'
import TopImage from './TopImage'
import image from '../assets/whitebackground.jpg'
import Card from './Card'
import cards from '../cardData';


const Home = () => {
  return (
    <div className='home-container'>
      <TopImage image={image} title='Let your fantasies run wild' classname='image-container'/>
        <div className='intro'>
          <p>
            Welcome To Exotic Dollz Entertainment
          </p>
          <p>
            The most exciting exotic entertainment for events in Texas and Oklahoma. Exotic Dollz Entertainment provides the best exotic entertainment for all types of party events.
          </p>
        </div>
    
        <div className='cards'>
            {
              cards.map(card => (
              <Card key={card.image} 
              image={card.image} 
              alt={card.alt} 
              title={card.title} 
              textOne={card.textOne}
              textTwo={card.textTwo}
              button={card.button} 
              link={card.link} 
              styling={card.className}
              />)
              )}
          </div>
    </div>
  )
}

export default Home