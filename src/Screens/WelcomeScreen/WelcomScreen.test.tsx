import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { COMPUTER_VS_COMPUTER, PLAYER_VS_COMPUTER } from '../../constants';
import WelcomScreen from './WelcomScreen';

describe('<WelcomeScreen />', () => {
  afterEach(cleanup);

  it('should call playerVsComp func', () => {
    const setModeSpy = jest.fn();

    render(<WelcomScreen setMode={setModeSpy} />);
    const playerVsCompBtn = screen.getByTestId('test-playerVsComp');
    userEvent.click(playerVsCompBtn);
    expect(setModeSpy).toHaveBeenCalledWith(PLAYER_VS_COMPUTER);
  });

  it('should call compVsComp func', () => {
    const setModeSpy = jest.fn();

    render(<WelcomScreen setMode={setModeSpy} />);
    const playerVsCompBtn = screen.getByTestId('test-compVsComp');
    userEvent.click(playerVsCompBtn);
    expect(setModeSpy).toHaveBeenCalledWith(COMPUTER_VS_COMPUTER);
  });
});
