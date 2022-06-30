import React from 'react'
import './PartyPackages.css'
import image from '../assets/partypackage.jpg'
import TopImage from './TopImage'
import MainTitle from './MainTitle'
import Card from './Card';
import partyCards from '../partyCards'

const PartyPackages = () => {
  return (
    <div className='party-container'>
      <TopImage image={image} title='Party Packages' classname='party-image-container'/>
      <MainTitle title='Party Strippers' description='Make your celebration sexier, and more entertaining by hiring our hot female strippers. These lovely ladies will make your night memorable for years to come. Our exotic dancers will make any occasion an unforgettable experience. The best part is our female strippers come to you. Celebrate your party with the wildist girls in town! We can totally customize your experience to make sure it goes exactly the way you want. Why spend hundreds of thousands of dollars at the strip club, when you can have the girls come to you. Make it rain and they will do more, because they are making more. These girls will entertain you and your guests as they come to you ready for sexy fun!'/>
      <div className='party-links'>
        {
          partyCards.map(partyCard => <Card 
            key={partyCard.image} 
            image={partyCard.image}
            alt={partyCard.alt}
            title={partyCard.title}
            textOne={partyCard.textOne}
            textTwo={partyCard.textTwo}
            button={partyCard.button}
            link={partyCard.link}
            styling={partyCard.className}
            />)
        }
      </div>
    </div>
  )
}

export default PartyPackages