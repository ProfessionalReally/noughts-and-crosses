import { GameLayout } from './GameLayout';
import { resetGame } from '@src/redux/actions/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@src/redux/store';

export const Game = () => {
	const dispatch = useDispatch<AppDispatch>();
	const handleClickReset = () => dispatch(resetGame());

	return <GameLayout onClickReset={handleClickReset} />;
};
