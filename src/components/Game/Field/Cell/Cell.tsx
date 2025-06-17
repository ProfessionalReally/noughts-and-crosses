import { CellLayout } from './CellLayout';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import { useReduxSelector } from '@src/hooks/useReduxSelector';
import { store } from '@src/redux/store';
import { takeTurn } from '@src/redux/actions/actions';
import { memo, useCallback, FC } from 'react';

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
	const { winningCombo, isGameEnded } = useReduxSelector((state) => state);
	const sign = getSign(item);

	const handleTakeTurn = useCallback(
		(index: number) => {
			store.dispatch(takeTurn(index));
		},
		[store, takeTurn, index],
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
