import React from 'react';
import PropTypes from 'prop-types';

const FeaturedArticle = (props) => {
  const { test } = props;
  return (
    <div>
      {test}
    </div>
  );
};

FeaturedArticle.defaultProps = {
  test: '',
};

FeaturedArticle.propTypes = {
  test: PropTypes.string,
};

export default FeaturedArticle;
