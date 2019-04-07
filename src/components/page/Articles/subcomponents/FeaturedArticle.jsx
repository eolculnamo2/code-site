import React from 'react';
import PropTypes from 'prop-types';
import '../Articles.scss';

const FeaturedArticle = (props) => {
  const { data } = props;
  return (
    <div className="Articles__featured-box" key={data.name}>
      <div className="Articles__featured-content">
        <h3 className="Articles__featured-heading">
          <a href={data.link}>{data.name}</a>
        </h3>
        <p>{data.description}</p>
      </div>
      <img className="Articles__featured-img" src={data.image} alt={data.name} />
    </div>
  );
};

FeaturedArticle.defaultProps = {
  data: { name: '', description: '', image: '' },
};

FeaturedArticle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default FeaturedArticle;
