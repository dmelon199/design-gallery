
import React from 'react'


/* COMPONENTS */
import HomeHero from '../components/HomeHero';
import HomeCtas from '../components/HomeCtas';
import Slideshows from '../components/Slideshows';


class Home extends React.Component {
  render() {
        return (
          <div className="body-page">
            <HomeHero />
              <div className="body-content">
                <HomeCtas />
                <Slideshows />
              </div>
          </div>       
        );
  }
}

export default Home;