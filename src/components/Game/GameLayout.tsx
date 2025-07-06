import { Information } from '@src/components/Game/Information/Information';
import { Field } from '@src/components/Game/Field/Field';
import '@src/styles/components/game.scss';
import { FC } from 'react';

type PropsType = {
	onClickReset: () => void;
};

export const GameLayout: FC<PropsType> = ({ onClickReset }) => {
	return (
		<main className={'game'}>
			<Information />
			<Field />
			<button className={'game__button-reset'} onClick={onClickReset}>
				Reset
			</button>
		</main>
	);
};
