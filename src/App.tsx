import React from 'react';
import './App.css';

import ComputerVsComputer from './Screens/ComputerVsComputer/ComputerVsComputer';
import { COMPUTER_VS_COMPUTER, HEADER_TEXT, PLAYER_VS_COMPUTER, WELCOME_SCREEN } from './constants';
import PlayerVsComputer from './Screens/PlayerVsComputer/PlayerVsComputer';
import { GAME_STATE } from './types';
import WelcomScreen from './Screens/WelcomeScreen/WelcomScreen';

function App() {
  const [mode, setMode] = React.useState<GAME_STATE>(WELCOME_SCREEN);

  const SCREENS = {
    [WELCOME_SCREEN]: <WelcomScreen setMode={setMode} />,
    [PLAYER_VS_COMPUTER]: <PlayerVsComputer setMode={setMode} />,
    [COMPUTER_VS_COMPUTER]: <ComputerVsComputer setMode={setMode} />,
  };

  return (
    <>
      <header className='App-header'>
        <h1>Paper Scissor Stone Game</h1>
        <h2 data-testid='test-header_text'>{HEADER_TEXT[mode]}</h2>
      </header>
      {SCREENS[mode]}
    </>
  );
}

export default App;
