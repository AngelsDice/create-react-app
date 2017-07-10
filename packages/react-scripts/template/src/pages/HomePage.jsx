import React from 'react';
import ReactGA from 'react-ga';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Angels Dice - Home';
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div id="home-page" className="container">
        Welcome to your Angels Dice site
      </div>
    );
  }
}

export default HomePage;
