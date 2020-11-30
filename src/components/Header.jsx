import React, { Component } from "react";
import { Header } from "./Header";

export class Header extends Component {
  goToProfile = () => {
    this.props.navigate("header")
  }




<header>
<nav>
  <ul>
    <li>
      <button
        onClick={() => {
          this.navigateTo("home");
        }}
      >
        Home
      </button>
    </li>
    <li>
      <button
        onClick={() => {
          this.navigateTo("map");
        }}
      >
        Map
      </button>
    </li>
    <li>
      <button
        onClick={() => {
          this.navigateTo("profile");
        }}
      >
        Profile
      </button>
    </li>
  </ul>
</nav>
</header>

export const Header = withAuth(Header);