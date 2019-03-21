import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeaturedTutorial from './subcomponents/FeaturedTutorial';
import FeaturedArticle from './subcomponents/FeaturedArticle';
import HomeHero from '../../../../dist/assets/home-hero.png';
import './Home.scss';

const Home = (props) => {
  const { featuredArticles, featuredTutorials } = props;
  return (
    <>
      <div className="Home__hero-wrap">
        <img
          alt="coding JS is life"
          className="Home__hero-img"
          src={HomeHero}
        />
        <h1 className="Home__hero-text">JavaScript === Life</h1>
      </div>
      <div className="Global__page-width Home__featured-wrap">
        <div>
          <h2 className="Home__featured-heading">Featured Tutorials</h2>
          {featuredTutorials.map(x => <FeaturedTutorial data={x} key={x.name} />)}
        </div>
        <div>
          <h2 className="Home__featured-heading">Featured Articles</h2>
          {featuredArticles.map(x => <FeaturedArticle data={x} key={x.name} />)}
        </div>
      </div>
    </>
  );
};

Home.defaultProps = {
  featuredArticles: [],
  featuredTutorials: [],
};

Home.propTypes = {
  featuredArticles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  featuredTutorials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};


const mapStateToProps = state => ({
  featuredArticles: state.featuredArticles,
  featuredTutorials: state.featuredTutorials,
});

export default connect(mapStateToProps)(Home);
