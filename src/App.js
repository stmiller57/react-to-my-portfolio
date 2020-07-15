import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
