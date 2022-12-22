import React, { FC, useEffect, useState } from 'react';
import { WELCOME_SCREEN } from '../../constants';
import { GAME_STATE, GetMatchResultType } from '../../types';
import { getMatch, getRandomOption } from '../../utils';

type ComputerVsComputerType = {
  setMode: (type: GAME_STATE) => void;
};

const ComputerVsComputer: FC<ComputerVsComputerType> = ({ setMode }) => {
  const [result, setResult] = useState<GetMatchResultType>();

  useEffect(() => {
    setTimeout(() => {
      getPlayerResults();
    }, 2000);
  }, []);

  const getPlayerResults = () => {
    const randomOptions = getRandomOption();
    const result: GetMatchResultType = getMatch(
      randomOptions.value1,
      randomOptions.value2,
      'Computer 1',
      'Computer 2',
    );
    setResult(result);
  };
  return (
    <>
      {result && (
        <>
          <h2>Computer 1 chooses {result.playerASelection}</h2>
          <h2>Computer 2 chooses {result.playerBSelection}</h2>
          <h2 data-testid='game-result'>{result.status}</h2>
        </>
      )}
      <div className='button-box'>
        <button data-testid='test-play_again' onClick={() => setMode(WELCOME_SCREEN)}>
          Play Again
        </button>
      </div>
    </>
  );
};

export default ComputerVsComputer;
