import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as method from "../../utils";
import { PAPER, ROCK } from "../../constants";
import PlayerVsComputer from "./PlayerVsComputer";

describe("<ComputerVsComputer />", () => {
  afterEach(cleanup);

  it("should render Player Vs Computer component", () => {
    const setModeSpy = jest.fn();
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const headerElement = screen.getByTestId("test-header_text");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Player Vs Computer");
  });

  it("should call setmode func", async () => {
    const setModeSpy = jest.fn();

    render(<PlayerVsComputer setMode={setModeSpy} />);
    const playButton = screen.getByTestId("test-play_again");
    userEvent.click(playButton);
    expect(setModeSpy).toHaveBeenCalled();
  });

  it("should call getRandomOption func", async () => {
    const setModeSpy = jest.fn();
    const getRandomOptionMethodSpy = jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    expect(getRandomOptionMethodSpy).not.toHaveBeenCalled();
    const paperBtn = screen.getByTestId("test-paper_btn");
    userEvent.click(paperBtn);
    expect(getRandomOptionMethodSpy).toHaveBeenCalled();
  });

  it("should tie the game", async () => {
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId("test-paper_btn");
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Result: Tie");
  });

  it("should win Human", async () => {
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: ROCK, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId("test-paper_btn");
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Result: Human win");
  });

  it("should win Computer", async () => {
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: ROCK, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId("test-scissor_btn");
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Result: Computer win");
  });
});
