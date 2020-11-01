import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './contentsText.css';

const ContentsText = memo((props) => {
  const { value } = props;

  return (
    <>
      <div className="ContentsTextBox">
        <span
          className="ContentsTextValue"
          dangerouslySetInnerHTML={{
            __html: value.replace(new RegExp('\n', 'g'), '<br/>'),
          }}
        />
      </div>
    </>
  );
});

ContentsText.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ContentsText;
