import React from 'react';
import PropTypes from 'prop-types';

const FeaturedTutorial = (props) => {
  const { data } = props;
  return (
    <div className="Home__featured-tut-wrap">
      <a href={data.link}>
        <h3 className="Global__no-m Home__featured-tut-name">{data.name}</h3>
      </a>
      <p className="Global__no-m">{data.description}</p>
    </div>
  );
};

FeaturedTutorial.defaultProps = {
  data: { name: '', description: '' },
};

FeaturedTutorial.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default FeaturedTutorial;
