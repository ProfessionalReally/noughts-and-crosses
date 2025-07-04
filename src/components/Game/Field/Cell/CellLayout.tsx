import { ReactNode, PureComponent } from 'react';

type PropsType = {
	children: ReactNode;
	onClickCell: (index: number) => void;
	index: number;
	isWinning: boolean;
	isGameEnded: boolean;
};

export class CellLayout extends PureComponent<PropsType> {
	render() {
		const { children, onClickCell, index, isWinning, isGameEnded } =
			this.props;

		const isDisabled = !!children || isGameEnded;

		const onClick = () => {
			onClickCell(index);
		};

		return (
			<button
				onClick={onClick}
				disabled={isDisabled}
				className={`btn btn-cell ${isWinning ? 'btn-cell-win' : ''}`}
			>
				{children}
			</button>
		);
	}
}
