import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Social from "./layouts/Social";
import Navigation from "./layouts/Navigation";
import ArticleArea from "./layouts/ArticleArea";
import Footer from "./layouts/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="bg_pic">
            <header>
              <Header />
            </header>
            <main>
              <aside>
                <Social />
              </aside>
              <section>
                <Navigation />
              </section>
              <article>
                <ArticleArea />
              </article>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
