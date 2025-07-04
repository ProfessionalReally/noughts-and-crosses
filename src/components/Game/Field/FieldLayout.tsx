import { Player } from '@src/types/types';
import { Cell } from './Cell/Cell';
import { Component } from 'react';

type FieldLayoutProps = {
	field: (Player | '')[];
};

export class FieldLayout extends Component<FieldLayoutProps> {
	render() {
		const { field } = this.props;
		return (
			<section
				className={
					'grid grid-cols-[repeat(3,180px)] grid-rows-[repeat(3,180px)]'
				}
				role='group'
				aria-label='Game board noughts and crosses'
			>
				{field.length > 0 &&
					field.map((item, index) => (
						<Cell item={item} key={index} index={index} />
					))}
			</section>
		);
	}
}
