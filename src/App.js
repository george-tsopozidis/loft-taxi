import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Profile } from "./Profile";
import "./App.css";

const PAGES = {
  home: <Home />,
  about: <About />,
  profile: <Profile />,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigatTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigatTo("home");
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigatTo("about");
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigatTo("profile");
                  }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
