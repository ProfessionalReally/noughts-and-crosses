import { IGame, PlayerSign } from '@src/types/types';
import * as actions from '../actions/actionTypes';
import { getGameState, getNextPlayer } from '@src/redux/utils';
import { resetGame, takeTurn } from '@src/redux/actions/actions';

const initialState: IGame = {
	currentPlayer: PlayerSign.Cross,
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
	winningCombo: null,
};

type ActionType = ReturnType<typeof takeTurn> | ReturnType<typeof resetGame>;

export const gameReducer = (
	state: IGame = initialState,
	action: ActionType,
) => {
	switch (action.type) {
		case actions.TAKE_TURN:
			if (!state.isGameEnded && !state.field[action.payload]) {
				const newField = [...state.field];
				newField[action.payload] = state.currentPlayer;
				const { isGameEnded, isDraw, winningCombo } = getGameState(
					newField,
					state.currentPlayer,
				);
				return {
					...state,
					isGameEnded,
					isDraw,
					winningCombo,
					field: newField,
					currentPlayer: isGameEnded
						? state.currentPlayer
						: getNextPlayer(state.currentPlayer),
				};
			}
			return state;
		case actions.RESET_GAME:
			return initialState;
		default:
			return state;
	}
};
