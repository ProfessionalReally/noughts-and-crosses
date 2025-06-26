import * as actions from './actionTypes';

export const takeTurn = (index: number) =>
	({
		type: actions.TAKE_TURN,
		payload: index,
	}) as const;

export const resetGame = () =>
	({
		type: actions.RESET_GAME,
	}) as const;
