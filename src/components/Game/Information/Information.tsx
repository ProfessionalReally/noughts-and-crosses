import { InformationLayout } from './InformationLayout';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { Component } from 'react';
import { connect } from 'react-redux';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from '@src/redux/selectors';
import { RootState } from '@src/redux/store';

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
	if (isDraw)
		return (
			<p className={'text-6xl font-medium text-white'}>It's a Draw!</p>
		);

	const sign = getSign(currentPlayer);
	const img = (
		<img
			src={sign.img}
			alt={sign.title}
			className={'pointer-events-none h-[50px] w-[50px]'}
		/>
	);

	return (
		<p className={'flex gap-4 text-6xl font-medium text-white'}>
			{isGameEnded ? 'Congratulations:' : 'Player'}
			{img}
			{isGameEnded ? 'Win' : 'turn:'}
		</p>
	);
};

type InformationProps = {
	currentPlayer: Player;
	isDraw: boolean;
	isGameEnded: boolean;
};

export class InformationComponent extends Component<InformationProps> {
	render() {
		const { currentPlayer, isDraw, isGameEnded } = this.props;

		return (
			<InformationLayout>
				{getStatusMarkup({ currentPlayer, isDraw, isGameEnded })}
			</InformationLayout>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	currentPlayer: selectCurrentPlayer(state),
	isDraw: selectIsDraw(state),
	isGameEnded: selectIsGameEnded(state),
});

export const Information = connect(mapStateToProps)(InformationComponent);
