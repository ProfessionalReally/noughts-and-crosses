import '@src/styles/components/field.scss';
import { Player } from '@src/types/types';
import { Cell } from './Cell/Cell';
import { memo } from 'react';

export const FieldLayout = memo(
	({ field }: { field: (Player | '')[] }) => {
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
	},
	(prevProps, nextProps) => {
		return (
			JSON.stringify(prevProps.field) === JSON.stringify(nextProps.field)
		);
	},
);
