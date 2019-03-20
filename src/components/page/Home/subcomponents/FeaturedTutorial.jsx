import React from 'react';
import PropTypes from 'prop-types';

const FeaturedTutorial = (props) => {
  const { data } = props;
  return (
    <div>
      { data }
    </div>
  );
};

FeaturedTutorial.defaultProps = {
  data: '',
};

FeaturedTutorial.propTypes = {
  data: PropTypes.string,
};

export default FeaturedTutorial;
