import React from 'react';
import PropTypes from 'prop-types';

const ForwardAndBack = (props) => {
  const { forwardLink, backwardLink } = props;
  return (
    <div className="Tutorial__split-items">
      <a
        href={backwardLink}
        style={{ display: backwardLink !== '/' ? 'block' : 'none' }}
      >
        <button
          className="Tutorial__nav-btns"
          type="button"
        >
          Last Step
        </button>
      </a>
      <a href={forwardLink} className="Tutorial__next-btn">
        <button
          className="Tutorial__nav-btns"
          type="button"
        >
          Next Step
        </button>
      </a>
    </div>
  );
};

ForwardAndBack.defaultProps = {
  forwardLink: '/',
  backwardLink: '/',
};

ForwardAndBack.propTypes = {
  forwardLink: PropTypes.string,
  backwardLink: PropTypes.string,
};

export default ForwardAndBack;
