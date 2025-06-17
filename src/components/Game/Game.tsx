import { GameLayout } from './GameLayout';
import { store } from '@src/redux/store';
import { resetGame } from '@src/redux/actions/actions';

export const Game = () => {
	const handleClickReset = () => store.dispatch(resetGame());

	return <GameLayout onClickReset={handleClickReset} />;
};
