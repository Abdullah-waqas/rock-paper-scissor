export type PLAYER_VS_COMPUTER = 'PLAYER_VS_COMPUTER';
export type COMPUTER_VS_COMPUTER = 'COMPUTER_VS_COMPUTER';
export type WELCOME_SCREEN = 'WELCOME_SCREEN';
export type GAME_STATE = PLAYER_VS_COMPUTER | COMPUTER_VS_COMPUTER | WELCOME_SCREEN;

export type ROCK = 'ROCK';
export type PAPER = 'PAPER';
export type SCISSOR = 'SCISSOR';
export type PLAYER_SELECTION_TYPE = ROCK | PAPER | SCISSOR;

export interface GetMatchResultType {
  status: string;
  playerASelection: PLAYER_SELECTION_TYPE;
  playerBSelection: PLAYER_SELECTION_TYPE;
}

export interface GetRandomOptionType {
  value1: PLAYER_SELECTION_TYPE;
  value2: PLAYER_SELECTION_TYPE;
}
