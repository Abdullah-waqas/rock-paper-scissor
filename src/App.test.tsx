import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { COMPUTER_VS_COMPUTER, PLAYER_VS_COMPUTER, WELCOME_SCREEN } from "./constants";

describe("Should render <App />", () => {
  afterEach(cleanup);

  it("should render welcome screen", () => {
    React.useState = jest.fn().mockReturnValue([WELCOME_SCREEN, {}]);
    render(<App />);
    const welcomeHdng = screen.getByTestId("welcome_screen");
    expect(welcomeHdng).toBeInTheDocument()
  });

  it("should render Player vs Computer screen", async() => {
    React.useState = jest.fn().mockReturnValue([PLAYER_VS_COMPUTER, {}]);
    render(<App />);
    const headerElement = await screen.findByTestId("test-header_text");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Player Vs Computer");
  });

  it("should render Computer vs Computer screen", async() => {
    React.useState = jest.fn().mockReturnValue([COMPUTER_VS_COMPUTER, {}]);
    render(<App />);
    const headerElement = await screen.findByTestId("test-header_text");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Computer Vs Computer");
  });
})
