import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './contentsDate.css';

const ContentsDate = memo((props) => {
  const { date } = props;

  return (
    <>
      <div className="ContentsDateBox">
        <span className="ContentsDateText">{ date }</span>
      </div>
    </>
  );
});

ContentsDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ContentsDate;
