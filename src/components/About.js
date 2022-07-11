import React from 'react'
import TopImage from './TopImage';
import image from '../assets/lips.jpg';
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <TopImage image={image} title='About Us' />
      <div className='about-us-container'>
        <p>Exotic Dollz and Entertainmnet</p> <p>is proud to offer Dallas with the sexiest and hottest female exotic dancers and topless/nude waitresses</p>
        <p>We offer Bachelor Parties - Boat Parties - Golf Outings - Poker Parties - Sporting Events - Going Away Parties - Divorce Parties - Office Parties - Holiday Parties - Birthday Parties or any kind of event you may have.</p>
        <p>We have party packages available that will leave you worry free for the entire evening. Shows may include topless/nude waitresses, single girl strips, single girl fantasy shows, 2 and 3 girl fantasy shows, slip and slide, feed the kitty and an assortment of party tricks that you and your guests will never forget.</p>
        <p>We have years of experience in the business, so rest assured we know what our clients LIKE and WANT!! Do not be fooled by other agencies claiming to be the biggest. GO BIG OR GO HOME we are the best! Our girls are classy and friendly and will make sure that your party is a success!!</p>
      </div>
    </div>
  )
}

export default About