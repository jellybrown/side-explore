import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './date.css';

const Date = memo((props) => {
  const { date } = props;

  return (
    <>
      <div className="ContentsDateBox">
        <span className="ContentsDateText">{ date }</span>
      </div>
    </>
  );
});

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
