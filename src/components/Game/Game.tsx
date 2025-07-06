import { GameLayout } from './GameLayout';
import { useAppDispatch } from '@src/redux/hooks';
import { resetGame } from '@src/redux/reducers';

export const Game = () => {
	const dispatch = useAppDispatch();
	const handleClickReset = () => dispatch(resetGame());

	return <GameLayout onClickReset={handleClickReset} />;
};
