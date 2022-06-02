
import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";


/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';



/* PAGES */
import Home from "./pages/Home";
import GroupPages from "./pages/GroupPages";
import SplashPages from "./pages/SplashPages";
import PreownedPages from "./pages/PreownedPages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'user'
    };
  }
  componentDidMount(){
    window.SPAUTH
      .appId('localhost')
      .login()
      .then((user) => {
        this.setState({user: user.username})
    }); 
  }
  render() {
    return (
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grouppages" element={<GroupPages />} />
          <Route path="/splashpages" element={<SplashPages />} />
          <Route path="/preownedpages" element={<PreownedPages />} />
        </Routes>
        <Footer user={this.state.user} />
      </div>
    );
  }
}

export default App;
