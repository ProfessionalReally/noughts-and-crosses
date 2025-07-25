import { InformationLayout } from './InformationLayout';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { memo } from 'react';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from '@src/redux/selectors';
import { useAppSelector } from '@src/redux/hooks';

const getSign = (item: Player): ISign => {
	if (item === PlayerSign.Cross) return { img: cross, title: Sign.Cross };
	return { img: nought, title: Sign.Nought };
};

const getStatusMarkup = ({
	currentPlayer,
	isDraw,
	isGameEnded,
}: {
	currentPlayer: Player;
	isDraw: boolean;
	isGameEnded: boolean;
}) => {
	if (isDraw) return <p className={'information__status'}>It's a Draw!</p>;

	const sign = getSign(currentPlayer);
	const img = <img src={sign.img} alt={sign.title} />;

	return (
		<p className={'information__status'}>
			{isGameEnded ? 'Congratulations: ' : 'Player '}
			{img}
			{isGameEnded ? ' Win' : ' turn:'}
		</p>
	);
};

export const Information = () => {
	const currentPlayer = useAppSelector(selectCurrentPlayer);
	const isGameEnded = useAppSelector(selectIsGameEnded);
	const isDraw = useAppSelector(selectIsDraw);

	const MemoizedStatusMarkup = memo(() =>
		getStatusMarkup({ currentPlayer, isDraw, isGameEnded }),
	);

	return (
		<InformationLayout>
			<MemoizedStatusMarkup />
		</InformationLayout>
	);
};
