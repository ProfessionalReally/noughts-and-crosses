import '@src/styles/components/cell.scss';
import { memo, useCallback, FC, ReactNode } from 'react';

type PropsType = {
	children: ReactNode;
	onClickCell: (index: number) => void;
	index: number;
	isWinning: boolean;
	isGameEnded: boolean;
};

export const CellLayout: FC<PropsType> = memo(
	({ children, onClickCell, index, isWinning, isGameEnded }) => {
		const isDisabled = !!children || isGameEnded;

		const onClick = useCallback(() => {
			onClickCell(index);
		}, [index, onClickCell]);

		return (
			<button
				onClick={onClick}
				disabled={isDisabled}
				className={`cell__button ${isWinning ? 'cell__button-win' : ''}`}
			>
				{children}
			</button>
		);
	},
);
