import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import './contentsCategory.css';
import PropTypes from 'prop-types';

library.add(faJs);

const ContentsCategory = memo((props) => {
  const fab = 'fab';
  const { name, icon } = props;

  return (
    <>
      <div className="ContentsCategoryBox">
        <FontAwesomeIcon className="ContentsCategorySymbol" icon={[fab, icon]} size="2x" />
        <span className="ContentsCategoryText">{name}</span>
      </div>
    </>
  );
});

ContentsCategory.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ContentsCategory;
