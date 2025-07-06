import '@src/styles/components/cell.scss';
import { memo, FC, ReactNode } from 'react';

type PropsType = {
	children: ReactNode;
	onClick: () => void;
	isWinning: boolean;
	isGameEnded: boolean;
};

export const CellLayout: FC<PropsType> = memo(
	({ children, onClick, isWinning, isGameEnded }) => {
		const isDisabled = !!children || isGameEnded;

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
