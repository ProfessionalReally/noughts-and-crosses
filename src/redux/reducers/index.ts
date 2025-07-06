import { IGame, PlayerSign } from '@src/types/types';
import { getGameState, getNextPlayer } from '@src/redux/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IGame = {
	currentPlayer: PlayerSign.Cross,
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
	winningCombo: null,
};

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		takeTurn(state, action: PayloadAction<number>) {
			if (!state.isGameEnded && !state.field[action.payload]) {
				state.field[action.payload] = state.currentPlayer;
				const { isGameEnded, isDraw, winningCombo } = getGameState(
					state.field,
					state.currentPlayer,
				);
				state.isGameEnded = isGameEnded;
				state.isDraw = isDraw;
				state.winningCombo = winningCombo;
				state.currentPlayer = isGameEnded
					? state.currentPlayer
					: getNextPlayer(state.currentPlayer);
			}
		},
		resetGame() {
			return initialState;
		},
	},
});

export const { takeTurn, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
