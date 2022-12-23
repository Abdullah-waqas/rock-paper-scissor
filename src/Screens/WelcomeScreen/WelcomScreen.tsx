import React, { FC } from "react";
import { COMPUTER_VS_COMPUTER, PLAYER_VS_COMPUTER } from '../../constants';
import { GAME_STATE } from '../../types';

type WelcomScreenType = {
  setMode: (type: GAME_STATE) => void;
};

const WelcomScreen: FC<WelcomScreenType> = ({ setMode }) => {
  return (
    <>
      <div className='button-box'>
        <button data-testid='test-playerVsComp' onClick={() => setMode(PLAYER_VS_COMPUTER)}>
          Player Vs Computer
        </button>
        <button data-testid='test-compVsComp' onClick={() => setMode(COMPUTER_VS_COMPUTER)}>
          Computer Vs Computer
        </button>
      </div>
    </>
  );
};

export default WelcomScreen;
