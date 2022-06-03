
import React from 'react'


/* COMPONENTS */
import HomeHero from '../components/HomeHero';
import Slideshows from '../components/Slideshows';


class Home extends React.Component {
  render() {
        return (
          <div className="body-page">
            <HomeHero />
              <div className="body-content">
                <Slideshows />
                <Slideshows />
                <Slideshows />
              </div>
          </div>       
        );
  }
}

export default Home;