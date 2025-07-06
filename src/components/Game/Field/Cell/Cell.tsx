import { CellLayout } from './CellLayout';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import { memo, useCallback, FC } from 'react';
import { selectIsGameEnded, selectWinningCombo } from '@src/redux/selectors';
import { useAppDispatch, useAppSelector } from '@src/redux/hooks';
import { takeTurn } from '@src/redux/reducers';

type PropsType = {
	item: Player | '';
	index: number;
};

const getSign = (item: Player | ''): ISign | null => {
	switch (item) {
		case PlayerSign.Cross:
			return { img: cross, title: Sign.Cross };
		case PlayerSign.Nought:
			return { img: nought, title: Sign.Nought };
		default:
			return null;
	}
};

export const Cell: FC<PropsType> = memo(({ item, index }) => {
	const winningCombo = useAppSelector(selectWinningCombo);
	const isGameEnded = useAppSelector(selectIsGameEnded);
	const dispatch = useAppDispatch();

	const sign = getSign(item);

	const handleTakeTurn = useCallback(() => {
		dispatch(takeTurn(index));
	}, [dispatch, index]);

	return (
		<CellLayout
			onClick={handleTakeTurn}
			isWinning={!!winningCombo?.includes(index)}
			isGameEnded={isGameEnded}
		>
			{sign && <img src={sign.img} alt={sign.title} />}
		</CellLayout>
	);
});
