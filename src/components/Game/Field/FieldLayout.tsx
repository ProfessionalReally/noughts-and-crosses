import '@src/styles/components/field.scss';
import { Player } from '@src/types/types';
import { Cell } from './Cell/Cell';
import { FC } from 'react';

type PropsType = {
	field: (Player | '')[];
};

export const FieldLayout: FC<PropsType> = ({ field }) => {
	return (
		<section
			className={'field'}
			role='group'
			aria-label='Game board noughts and crosses'
		>
			{field.length > 0 &&
				field.map((item, index) => (
					<Cell item={item} key={index} index={index} />
				))}
		</section>
	);
};
