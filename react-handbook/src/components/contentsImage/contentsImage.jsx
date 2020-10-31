import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ContentsImage = memo((props) => {
  const { imageSrc } = props;

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={imageSrc} />
      {imageSrc}
    </>
  );
});

ContentsImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default ContentsImage;
