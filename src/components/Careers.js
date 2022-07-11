import React from 'react'
import JotformEmbed from 'react-jotform-embed';
import TopImage from './TopImage';
import image from '../assets/background.jpg';
import './Careers.css';

const Careers = () => {
  return (
    <div className='careers'>
      <TopImage image={image} title='Careers'/>
      <JotformEmbed src='https://form.jotform.com/221912325119045'/>
    </div>
  )
}

export default Careers