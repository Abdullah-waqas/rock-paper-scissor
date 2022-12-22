import React, { FC, useState } from 'react';
import { PAPER, ROCK, SCISSOR, WELCOME_SCREEN } from '../../constants';
import { GAME_STATE, GetMatchResultType, PLAYER_SELECTION_TYPE } from '../../types';
import { getMatch, getRandomOption } from '../../utils';

type PlayerVsComputerType = {
  setMode: (type: GAME_STATE) => void;
};

const PlayerVsComputer: FC<PlayerVsComputerType> = ({ setMode }) => {
  const [result, setResult] = useState<GetMatchResultType>();

  const play = (option: PLAYER_SELECTION_TYPE) => {
    const randomOptions = getRandomOption();
    const result = getMatch(option, randomOptions.value1, 'Human', 'Computer');
    setResult(result);
  };

  return (
    <>
      <div className='button-box'>
        {!result && (
          <>
            <h2>Choose Option from here</h2>
            <button data-testid='test-paper_btn' onClick={() => play(PAPER)}>
              Paper
            </button>
            <button data-testid='test-scissor_btn' onClick={() => play(SCISSOR)}>
              Scissor
            </button>
            <button data-testid='test-rock_btn' onClick={() => play(ROCK)}>
              Rock
            </button>
          </>
        )}
        {result && (
          <>
            <h2>Human chooses {result.playerASelection}</h2>
            <h2>Computer chooses {result.playerBSelection}</h2>
            <h2 data-testid='game-result'>Result: {result.status}</h2>
          </>
        )}
        <button data-testid='test-play_again' onClick={() => setMode(WELCOME_SCREEN)}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default PlayerVsComputer;
