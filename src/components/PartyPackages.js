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
      <h2 className='package-price-title'>Package Prices</h2>
      <div className='price-list'>
        <div className='price-list-one'>
          <ul>
            <li>Topless Waitress - $200</li>
            <li>Single Strip Show - $250 (60 Min)</li>
            <li>Single Erotic Show - $350 (60 Min)</li>
            <li>2 Girl Fantasy Show - $450 (60 Min)</li>
            <li>2 Girl Lesbian Show - $650 (60 - 90 Min)</li>
          </ul>
        </div>
        <div className='price-list-two'>
          <ul>
            <li>3 Girl Fantasy Show - $750 (60 - 90 Min)</li>
            <li>3 Girl Lesbian Show - $900 (60 - 90 Min)</li>
            <li>Tits and Toast Pack - $500</li>
            <li>Boobs and Bacon Pack - $1000</li>
          </ul>
        </div>
      </div>
      <div className='disclaimer-container'>
        <p>ALL BOOKINGS REQUIRE A 50% BOOKING FEE, THAT CAN BE PAID ONLINE WITH A DEBIT OR CREDIT CARD, CASHAPP, ZELLE, OR APPLE PAY. THE BALANCE OF THE REMAINDING 50% MUST BE PAID TO THE ENTERTAINERS UPON ARRIVEL. ANY PARTY OVER 50 MILES FROM THE LOCAL METRO AREA, PLEASE CALL FOR A CUSTOM INVOICE.</p>
        <p>All shows can be customized to your specific needs. Most parties can last longer than their allotted time frames if the entertainers are tipped and treated with respect.</p>
      </div>
    </div>
  )
}

export default PartyPackages