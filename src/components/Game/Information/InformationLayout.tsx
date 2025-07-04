import { Component, ReactNode } from 'react';

type InformationLayoutProps = {
	children: ReactNode;
};

export class InformationLayout extends Component<InformationLayoutProps> {
	render() {
		const { children } = this.props;

		return (
			<section
				className={
					'mt-[50px] flex flex-col items-center justify-center gap-10'
				}
			>
				<h1 className={'text-6xl font-bold text-white'}>
					<span className={'text-accent-main'}>Noughts </span>
					and
					<span className={'text-accent-secondary'}> Crosses</span>
				</h1>
				{children}
			</section>
		);
	}
}
