import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as method from '../../utils';
import { PAPER, ROCK } from '../../constants';
import PlayerVsComputer from './PlayerVsComputer';

describe('<ComputerVsComputer />', () => {
  afterEach(cleanup);

  it('should call setmode func', () => {
    const setModeSpy = jest.fn();

    render(<PlayerVsComputer setMode={setModeSpy} />);
    const playButton = screen.getByTestId('test-play_again');
    userEvent.click(playButton);
    expect(setModeSpy).toHaveBeenCalled();
  });

  it('should call getRandomOption func', () => {
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: ROCK });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    expect(getRandomOptionMock).not.toHaveBeenCalled();
    const paperBtn = screen.getByTestId('test-paper_btn');
    userEvent.click(paperBtn);
    expect(getRandomOptionMock).toHaveBeenCalled();
    getRandomOptionMock.mockRestore();
  });

  it('should tie the game', () => {
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: PAPER, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId('test-paper_btn');
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Result: Tie');
    getRandomOptionMock.mockRestore();
  });

  it('should win Human', () => {
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: ROCK, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId('test-paper_btn');
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Result: Human win');
    getRandomOptionMock.mockRestore();
  });

  it('should win Computer', () => {
    const setModeSpy = jest.fn();
    const getRandomOptionMock = jest
      .spyOn(method, 'getRandomOption')
      .mockReturnValue({ value1: ROCK, value2: PAPER });
    render(<PlayerVsComputer setMode={setModeSpy} />);
    const paperBtn = screen.getByTestId('test-scissor_btn');
    userEvent.click(paperBtn);
    const gameResult = screen.getByTestId('game-result');
    expect(gameResult.textContent).toEqual('Result: Computer win');
    getRandomOptionMock.mockRestore();
  });
});
