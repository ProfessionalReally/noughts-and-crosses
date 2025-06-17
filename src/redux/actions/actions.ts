import * as actions from './actionTypes';

export const takeTurn = (index: number) => ({
	type: actions.TAKE_TURN,
	payload: index,
});

export const resetGame = () => ({
	type: actions.RESET_GAME,
});

