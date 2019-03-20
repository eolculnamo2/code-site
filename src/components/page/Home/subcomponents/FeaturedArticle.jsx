import React from 'react';
import PropTypes from 'prop-types';

const FeaturedArticle = (props) => {
  const { data } = props;
  return (
    <div>
      { data.name }
    </div>
  );
};

FeaturedArticle.defaultProps = {
  data: { name: '', description: '' },
};

FeaturedArticle.propTypes = {
  data: PropTypes.shape({ name: '', description: '' }),
};

export default FeaturedArticle;
