import { RootState } from '@src/redux/store';

export const selectCurrentPlayer = (state: RootState) => state.currentPlayer;
export const selectField = (state: RootState) => state.field;
export const selectIsGameEnded = (state: RootState) => state.isGameEnded;
export const selectIsDraw = (state: RootState) => state.isDraw;
export const selectWinningCombo = (state: RootState) => state.winningCombo;
