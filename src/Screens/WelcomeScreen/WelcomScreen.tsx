import React, { FC } from "react";
import { COMPUTER_VS_COMPUTER, PLAYER_VS_COMPUTER } from "../../constants";
import { GAME_STATE } from "../../types";

type WelcomScreenType = {
  setMode: (type: GAME_STATE) => void;
};

const WelcomScreen: FC<WelcomScreenType> = ({ setMode }) => {
  return (
    <div className="App" data-testid="welcome_screen">
      <header className="App-header">
        <h1>Paper Scissor Stone Game</h1>
        <h1>Choose Option here</h1>
      </header>
      <button
        data-testid="test-playerVsComp"
        onClick={() => setMode(PLAYER_VS_COMPUTER)}
      >
        Player Vs Computer
      </button>
      <button
        data-testid="test-compVsComp"
        onClick={() => setMode(COMPUTER_VS_COMPUTER)}
      >
        Computer Vs Computer
      </button>
    </div>
  );
};

export default WelcomScreen;
