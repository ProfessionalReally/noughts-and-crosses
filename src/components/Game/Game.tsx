import { GameLayout } from './GameLayout';
import { resetGame } from '@src/redux/actions/actions';
import { connect } from 'react-redux';
import { AppDispatch } from '@src/redux/store';
import { Component } from 'react';

type GameComponentProps = ReturnType<typeof mapDispatchToProps>;

export class GameComponent extends Component<GameComponentProps> {
	render() {
		const { handleClickReset } = this.props;
		
		return <GameLayout onClickReset={handleClickReset} />;
	}
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	handleClickReset: () => dispatch(resetGame()),
});

export const Game = connect(null, mapDispatchToProps)(GameComponent);
