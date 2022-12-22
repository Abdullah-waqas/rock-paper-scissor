import { OPTIONS_LIST, PAPER, ROCK, SCISSOR } from './constants';
import { GetMatchResultType, GetRandomOptionType, PLAYER_SELECTION_TYPE } from './types';

export function getRandomOption(): GetRandomOptionType {
  return {
    value1: OPTIONS_LIST[Math.floor(Math.random() * OPTIONS_LIST.length)],
    value2: OPTIONS_LIST[Math.floor(Math.random() * OPTIONS_LIST.length)],
  };
}

function generateStatus(
  result: string,
  playerA: PLAYER_SELECTION_TYPE,
  playerB: PLAYER_SELECTION_TYPE,
): GetMatchResultType {
  return {
    status: result,
    playerASelection: playerA,
    playerBSelection: playerB,
  };
}

export function getMatch(
  playerASelection: PLAYER_SELECTION_TYPE,
  playerBSelection: PLAYER_SELECTION_TYPE,
  playerAName: string,
  playerBName: string,
): GetMatchResultType {
  if (playerASelection === playerBSelection) {
    return generateStatus('Tie', playerASelection, playerBSelection);
  } else {
    if (playerASelection === PAPER && playerBSelection === ROCK) {
      return generateStatus(`${playerAName} win`, playerASelection, playerBSelection);
    } else if (playerASelection === ROCK && playerBSelection === SCISSOR) {
      return generateStatus(`${playerAName} win`, playerASelection, playerBSelection);
    } else if (playerASelection === SCISSOR && playerBSelection === PAPER) {
      return generateStatus(`${playerAName} win`, playerASelection, playerBSelection);
    } else {
      return {
        status: `${playerBName} win`,
        playerASelection: playerASelection,
        playerBSelection: playerBSelection,
      };
    }
  }
}
