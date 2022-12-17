import React, { FC, useState } from "react";
import { PAPER, ROCK, SCISSOR, WELCOME_SCREEN } from "../../constants";
import {
  GAME_STATE,
  GetMatchResultType,
  PLAYER_SELECTION_TYPE,
} from "../../types";
import { getMatch, getRandomOption } from "../../utils";

type PlayerVsComputerType = {
  setMode: (type: GAME_STATE) => void;
};

const PlayerVsComputer: FC<PlayerVsComputerType> = ({ setMode }) => {
  const [result, setResult] = useState<GetMatchResultType>();

  const play = (option: PLAYER_SELECTION_TYPE) => {
    const Computer2Option = getRandomOption();
    const result = getMatch(option, Computer2Option, "Human", "Computer 2");
    setResult(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Paper Scissor Stone Game</h1>
        <h1>Player Vs Computer</h1>
      </header>
      {!result && (
        <>
          <h2>Choose Option from here</h2>
          <button onClick={() => play(PAPER)}>Paper</button>
          <button onClick={() => play(SCISSOR)}>Scissor</button>
          <button onClick={() => play(ROCK)}>Rock</button>
        </>
      )}

      {result && (
        <>
          <h2>Human chooses {result.playerASelection}</h2>
          <h2>Computer 2 chooses {result.playerBSelection}</h2>
          <h2>Result: {result.status}</h2>
        </>
      )}
      <button onClick={() => setMode(WELCOME_SCREEN)}>Play Again</button>
    </div>
  );
};

export default PlayerVsComputer;
