import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="app-main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route
            render={function() {
              return <p>Not Found</p>;
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
