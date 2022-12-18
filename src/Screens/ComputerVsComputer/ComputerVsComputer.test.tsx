import { act, cleanup, render, screen } from "@testing-library/react";
import ComputerVsComputer from "./ComputerVsComputer";
import userEvent from "@testing-library/user-event";
import * as method from "../../utils";
import { PAPER, ROCK, SCISSOR } from "../../constants";

describe("<ComputerVsComputer />", () => {
  afterEach(cleanup);

  it("should render Computer Vs Computer component", () => {
    const setModeSpy = jest.fn();
    render(<ComputerVsComputer setMode={setModeSpy} />);
    const headerElement = screen.getByTestId("test-header_text");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Computer Vs Computer");
  });

  it("should call setmode func", async () => {
    const setModeSpy = jest.fn();

    render(<ComputerVsComputer setMode={setModeSpy} />);
    const playButton = screen.getByTestId("test-play_again");
    userEvent.click(playButton);
    expect(setModeSpy).toHaveBeenCalled();
  });

  it("should call getRandomOption func", async () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    const getRandomOptionMethodSpy = jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getRandomOptionMethodSpy).toHaveBeenCalled()
    jest.useRealTimers();
  });

  it("should tie the game", async () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: PAPER });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Tie");
    jest.useRealTimers();
  });

  it("should win computer 1", async () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Computer 1 win");
    jest.useRealTimers();
  });

  it("should win computer 2", async () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    jest
      .spyOn(method, "getRandomOption")
      .mockReturnValue({ value1: PAPER, value2: SCISSOR });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId("game-result");
    expect(gameResult.textContent).toEqual("Computer 2 win");
    jest.useRealTimers();
  });
});
