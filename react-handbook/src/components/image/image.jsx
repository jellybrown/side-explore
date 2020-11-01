import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Image = memo((props) => {
  const { imageSrc } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={imageSrc} />
      {imageSrc}
    </>
  );
});

Image.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default Image;
