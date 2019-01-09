import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="app">
          <Nav />
          <main className="app-main">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
          </main>
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
