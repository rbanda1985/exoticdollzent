import React from "react";
import PropTypes from 'prop-types'
import './TopImage.css';

const TopImage = ({image, title, classname}) => {
  return (
    <>
      <div className="text-center d-flex justify-content-center align-items-center">
        <div className={classname === 'image-container' ? 'image-container bg-image' : 'party-image-container bg-image'} style={{flex: "1" }}>
          <img
            src={image}
            className="img-fluid shadow-4"
            id="back-image"
            alt="home"
            style={{ width: "100%" }}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          ></div>
        </div>
        <p className="fade-in-text display-2">
          {title}
        </p>
      </div>
    </>
  );
};

TopImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired
}

export default TopImage;