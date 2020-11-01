import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './contentsImage.css';

const Image = memo((props) => {
  const { imageSrc } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="ContentsImage" src={imageSrc} />
    </>
  );
});

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Image;
