import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './contentsTitle.css';

const ContentsTitle = memo((props) => {
  const { text } = props;

  return (
    <>
      <div className="ContentsTitleBox">
        <span className="ContentsTitleText">{ text }</span>
      </div>
    </>
  );
});

ContentsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ContentsTitle;
