import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeaturedTutorial from './subcomponents/FeaturedTutorial';
import HomeHero from '../../../../assets/home-hero.png';
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
      <div className="Home__featured-wrap">
        <div>
          <h2>Featured Tutorials</h2>
          {featuredTutorials.map(x => <FeaturedTutorial data={x} key={x.test} />)}
        </div>
        <div>
          <h2>Featured Articles</h2>
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
  featuredArticles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  featuredTutorials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};


const mapStateToProps = state => ({
  featuredArticles: state.featuredArticles,
  featuredTutorials: state.featuredTutorials,
});

export default connect(mapStateToProps)(Home);
