import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Toggle extends PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <>
        <span
          className="toggleBtn"
          tabIndex="0"
          role="button"
          aria-pressed="false"
          aria-label="hello"
          onClick={onClick}
          onKeyDown={onClick}
        >
          <i className="fas fa-bars" />
        </span>
      </>
    );
  }
}

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
