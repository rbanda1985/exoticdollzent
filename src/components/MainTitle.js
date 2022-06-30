import React from 'react'
import PropTypes from 'prop-types';
import './MainTitle.css';

const MainTitle = ({title, description}) => {
  return (
    <div className='main-title-container'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}


MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}


export default MainTitle