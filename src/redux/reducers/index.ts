import { IGame, Player, PlayerSign } from '@src/types/types';
import { WIN_PATTERNS } from '@src/constants/constants';
import * as actions from '../actions/actionTypes';

const initialState: IGame = {
	currentPlayer: PlayerSign.Cross,
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
	winningCombo: null,
};

type ActionType = {
	type: string;
	payload?: any;
};

const checkWinGame = (
	field: (Player | '')[],
	currentPlayer: Player,
): number[] | null => {
	let winningCombo: number[] | null = null;

	WIN_PATTERNS.some((combo) => {
		const isWinning = combo.every(
			(index) => field[index] === currentPlayer,
		);
		if (isWinning) {
			winningCombo = combo;
			return true;
		}
		return false;
	});

	return winningCombo;
};

const checkDrawGame = (field: (Player | '')[]) => {
	return field.every((cell) => {
		return cell !== '';
	});
};

const getGameState = (
	field: (Player | '')[],
	currentPlayer: Player,
): {
	isGameEnded: boolean;
	isDraw: boolean;
	winningCombo: number[] | null;
} => {
	const winningCombo = checkWinGame(field, currentPlayer);
	return {
		isGameEnded: !!winningCombo,
		isDraw: !winningCombo && checkDrawGame(field),
		winningCombo,
	};
};

const getNextPlayer = (currentPlayer: Player): Player => {
	return currentPlayer === PlayerSign.Cross
		? PlayerSign.Nought
		: PlayerSign.Cross;
};

export const gameReducer = (
	state: IGame = initialState,
	{ type, payload }: ActionType,
) => {
	switch (type) {
		case actions.TAKE_TURN:
			if (!state.isGameEnded && !state.field[payload]) {
				const newField = [...state.field];
				newField[payload] = state.currentPlayer;
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
					currentPlayer: getNextPlayer(state.currentPlayer),
				};
			}
			return state;
		case actions.RESET_GAME:
			return initialState;
		default:
			return state;
	}
};
