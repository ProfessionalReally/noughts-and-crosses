import { CellLayout } from './CellLayout';
import cross from '@src/assets/cross.png';
import nought from '@src/assets/nought.png';
import { ISign, Player, PlayerSign, Sign } from '@src/types/types';
import { takeTurn } from '@src/redux/actions/actions';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectIsGameEnded, selectWinningCombo } from '@src/redux/selectors';
import { AppDispatch, RootState } from '@src/redux/store';

type PropsType = {
	item: Player | '';
	index: number;
} & ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

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

export class CellComponent extends Component<PropsType> {
	render() {
		const { item, index, handleTakeTurn, winningCombo, isGameEnded } =
			this.props;
		const sign = getSign(item);

		return (
			<CellLayout
				onClickCell={handleTakeTurn}
				index={index}
				isWinning={!!winningCombo?.includes(index)}
				isGameEnded={isGameEnded}
			>
				{sign && (
					<img
						src={sign.img}
						alt={sign.title}
						className={'pointer-events-none h-auto w-full p-11'}
					/>
				)}
			</CellLayout>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	winningCombo: selectWinningCombo(state),
	isGameEnded: selectIsGameEnded(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	handleTakeTurn: (index: number) => dispatch(takeTurn(index)),
});

export const Cell = connect(mapStateToProps, mapDispatchToProps)(CellComponent);
