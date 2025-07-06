import { RootState } from '@src/redux/store';

export const selectCurrentPlayer = (state: RootState) =>
	state.game.currentPlayer;
export const selectField = (state: RootState) => state.game.field;
export const selectIsGameEnded = (state: RootState) => state.game.isGameEnded;
export const selectIsDraw = (state: RootState) => state.game.isDraw;
export const selectWinningCombo = (state: RootState) => state.game.winningCombo;
