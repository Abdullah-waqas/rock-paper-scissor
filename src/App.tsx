import React, { useMemo, useState } from "react";
import "./App.css";

import ComputerVsComputer from "./Screens/ComputerVsComputer/ComputerVsComputer";
import {
  COMPUTER_VS_COMPUTER,
  PLAYER_VS_COMPUTER,
  WELCOME_SCREEN,
} from "./constants";
import PlayerVsComputer from "./Screens/PlayerVsComputer/PlayerVsComputer";
import { GAME_STATE } from "./types";
import WelcomScreen from "./Screens/WelcomeScreen/WelcomScreen";

function App() {
  const [mode, setMode] = useState<GAME_STATE>(WELCOME_SCREEN);

  const SCREENS = {
    [WELCOME_SCREEN]: <WelcomScreen setMode={setMode} />,
    [PLAYER_VS_COMPUTER]: <PlayerVsComputer setMode={setMode} />,
    [COMPUTER_VS_COMPUTER]: <ComputerVsComputer setMode={setMode} />,
  };

  return SCREENS[mode];
}

export default App;
