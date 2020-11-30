import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/Home", () => ({ HomeWithAuth: () => <div>Home content</div>,}));
jest.mock("./pages/Map", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./pages/Profile", () => ({ ProfileWithAuth: () => <div>Profile content</div>,}));
jest.mock("./component/Header", () => ({ Header: () => <div>Header</div>, }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Home content");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App isLoggedIn />);
      fireEvent.click(getByText("Map"));
      expect(container.innerHTML).toMatch("Map content");
      fireEvent.click(getByText("Profile"));
      expect(container.innerHTML).toMatch("Profile content");
    });
  });
});
