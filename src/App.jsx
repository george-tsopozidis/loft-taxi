import React from "react";
import { ProfileWithAuth } from "./pages/Profile";
import { HomeWithAuth } from "./pages/Home";
import { Map } from "./pages/Map";
import { withAuth } from "./pages/AuthContext";
import { Header } from "./components/Header";
import PropTypes from 'prop-types';
import "./App.css";

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: "home" });
    }
  };

  render() {
    return (
      <>
        <Header />
        <main data-testid="container">
          <section>
            {PAGES[this.state.currentPage]({ navigate: this.navigateTo })}
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
