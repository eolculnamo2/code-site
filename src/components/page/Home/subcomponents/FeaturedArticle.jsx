import React from 'react';
import PropTypes from 'prop-types';

const FeaturedArticle = (props) => {
  const { data } = props;
  return (
    <div className="Home__featured-art-wrap">
      <h3 className="Global__no-m Home__featured-tut-name">{data.name}</h3>
      <div className="Home__featured-art-body">
        <div>{data.description}</div>
        <img
          alt={data.name}
          className="Home__featured-art-img"
          src={data.image}
        />
      </div>
    </div>
  );
};

FeaturedArticle.defaultProps = {
  data: { name: '', description: '', image: '' },
};

FeaturedArticle.propTypes = {
  data: PropTypes.shape({ name: '', description: '', image: '' }),
};

export default FeaturedArticle;
