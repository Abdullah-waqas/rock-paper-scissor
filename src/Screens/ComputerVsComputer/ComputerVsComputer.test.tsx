import React from 'react';
import { act, cleanup, render, screen } from '@testing-library/react';
import ComputerVsComputer from './ComputerVsComputer';
import userEvent from '@testing-library/user-event';
import * as method from '../../utils';
import { PAPER, ROCK, SCISSOR } from '../../constants';

describe('<ComputerVsComputer />', () => {
  afterEach(cleanup);

  it('should call setmode func', () => {
    const setModeSpy = jest.fn();

    render(<ComputerVsComputer setMode={setModeSpy} />);
    const playButton = screen.getByTestId('test-play_again');
    userEvent.click(playButton);
    expect(setModeSpy).toHaveBeenCalled();
  });

  it('should call getRandomOption func', () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getRandomOptionMock).toHaveBeenCalled();
    jest.useRealTimers();
    getRandomOptionMock.mockRestore();
  });

  it('should tie the game', () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: PAPER });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Tie');
    jest.useRealTimers();
    getRandomOptionMock.mockRestore();
  });

  it('should win computer 1', () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Computer 1 win');
    jest.useRealTimers();
    getRandomOptionMock.mockRestore();
  });

  it('should win computer 2', () => {
    jest.useFakeTimers();
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: SCISSOR });
    render(<ComputerVsComputer setMode={setModeSpy} />);
    act(() => {
      jest.runAllTimers();
    });
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Computer 2 win');
    jest.useRealTimers();
    getRandomOptionMock.mockRestore();
  });
});
