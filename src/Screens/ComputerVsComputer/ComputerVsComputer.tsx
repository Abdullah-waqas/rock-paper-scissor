import React, { FC } from "react";
import { WELCOME_SCREEN } from "../../constants";
import { GAME_STATE, GetMatchResultType } from "../../types";
import { getMatch, getRandomOption } from "../../utils";

type ComputerVsComputerType = {
  setMode: (type: GAME_STATE) => void;
};

const ComputerVsComputer: FC<ComputerVsComputerType> = ({ setMode }) => {
  const computer1Option = getRandomOption();
  const Computer2Option = getRandomOption();
  const result: GetMatchResultType = getMatch(
    computer1Option,
    Computer2Option,
    "Computer 1",
    "Computer 2"
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paper Scissor Stone Game</h1>
        <h1>Computer Vs Computer</h1>
      </header>
      <h2>Computer 1 chooses {result.playerASelection}</h2>
      <h2>Computer 2 chooses {result.playerBSelection}</h2>
      <h2>{result.status}</h2>
      <button onClick={() => setMode(WELCOME_SCREEN)}>Play Again</button>
    </div>
  );
};

export default ComputerVsComputer;
