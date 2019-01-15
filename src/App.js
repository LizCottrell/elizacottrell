import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <main className="app-main">
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/work`} component={Work} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
