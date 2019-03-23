import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Articles.scss';

const Articles = (props) => {
  const { featuredArticles } = props;
  return (
    <>
      <div className="Articles__heading-wrap">
        <h1 className="Global__page-width Articles__heading">Articles</h1>
      </div>
      <div className="Global__page-width Articles__body-wrap">
        <h2 className="Articles__category-heading">Featured</h2>
        {featuredArticles.map(x => (
          <div className="Articles__featured-box" key={x.name}>
            <div className="Articles__featured-content">
              <h3 className="Articles__featured-heading">{x.name}</h3>
              <p>{x.description}</p>
            </div>
            <img src={x.image} alt={x.name} />
          </div>
        ))}
        
      </div>
    </>
  );
};

Articles.defaultProps = {
  featuredArticles: [],
};

Articles.propTypes = {
  featuredArticles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};

const mapStateToProps = state => ({
  featuredArticles: state.featuredArticles,
});

export default connect(mapStateToProps)(Articles);
