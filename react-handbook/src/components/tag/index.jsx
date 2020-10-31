import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import './tag.css';
import PropTypes from 'prop-types';

library.add(faJs);

const Tag = memo((props) => {
  const fab = 'fab';
  const { name, icon } = props;

  return (
    <>
      <div className="TagBox">
        <FontAwesomeIcon icon={[fab, icon]} size="6x" />
        {name}
      </div>
    </>
  );
});

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Tag;
