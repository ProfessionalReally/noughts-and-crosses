import { CellLayout } from './CellLayout';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import { takeTurn } from '@src/redux/actions/actions';
import { memo, useCallback, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsGameEnded, selectWinningCombo } from '@src/redux/selectors';
import { AppDispatch } from '@src/redux/store';

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
	const winningCombo = useSelector(selectWinningCombo);
	const isGameEnded = useSelector(selectIsGameEnded);
	const dispatch = useDispatch<AppDispatch>();

	const sign = getSign(item);

	const handleTakeTurn = useCallback(
		(index: number) => {
			dispatch(takeTurn(index));
		},
		[dispatch],
	);

	return (
		<CellLayout
			onClickCell={handleTakeTurn}
			index={index}
			isWinning={!!winningCombo?.includes(index)}
			isGameEnded={isGameEnded}
		>
			{sign && <img src={sign.img} alt={sign.title} />}
		</CellLayout>
	);
});
