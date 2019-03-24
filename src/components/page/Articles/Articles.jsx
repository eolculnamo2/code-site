import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FeaturedArticle from './subcomponents/FeaturedArticle';
import awardImg from '../../../../dist/assets/award.png';
import './Articles.scss';

const Articles = (props) => {
  const { featuredArticles } = props;
  return (
    <>
      <div className="Articles__heading-wrap">
        <h1 className="Global__page-width Articles__heading">Articles</h1>
      </div>
      <div className="Global__page-width Articles__body-wrap">
        <div className="Articles__horizontal-center">
          <img
            alt="featured"
            className="Articles__cat-icon"
            src={awardImg}
          />
          <h2 className="Articles__category-heading">Featured Articles</h2>
        </div>
        {featuredArticles.map(x => <FeaturedArticle data={x} key={x.name} />)}
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
