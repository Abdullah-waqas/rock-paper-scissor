import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';
import { COMPUTER_VS_COMPUTER, HEADER_TEXT, PLAYER_VS_COMPUTER, WELCOME_SCREEN } from './constants';

describe('Should render <App />', () => {
  afterEach(cleanup);

  it('should render welcome screen', () => {
    React.useState = jest.fn().mockReturnValue([WELCOME_SCREEN, {}]);
    render(<App />);
    const headerElement = screen.getByTestId('test-header_text');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(HEADER_TEXT.WELCOME_SCREEN);
  });

  it('should render Player vs Computer screen', () => {
    React.useState = jest.fn().mockReturnValue([PLAYER_VS_COMPUTER, {}]);
    render(<App />);
    const headerElement = screen.getByTestId('test-header_text');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(HEADER_TEXT.PLAYER_VS_COMPUTER);
  });

  it('should render Computer vs Computer screen', () => {
    React.useState = jest.fn().mockReturnValue([COMPUTER_VS_COMPUTER, {}]);
    render(<App />);
    const headerElement = screen.getByTestId('test-header_text');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(HEADER_TEXT.COMPUTER_VS_COMPUTER);
  });
});
