import { Information } from '@src/components/Game/Information/Information';
import { Field } from '@src/components/Game/Field/Field';
import { PureComponent } from 'react';

type PropsType = {
	onClickReset: () => void;
};

export class GameLayout extends PureComponent<PropsType> {
	render() {
		const { onClickReset } = this.props;
		return (
			<main
				className={
					'flex flex-col content-center items-center gap-[25px]'
				}
			>
				<Information />
				<Field />
				<button className={'btn btn-reset'} onClick={onClickReset}>
					Reset
				</button>
			</main>
		);
	}
}
