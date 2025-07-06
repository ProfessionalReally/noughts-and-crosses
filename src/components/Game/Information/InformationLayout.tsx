import '@src/styles/components/information.scss';
import { FC, ReactNode } from 'react';

type PropsType = {
	children: ReactNode;
};

export const InformationLayout: FC<PropsType> = ({ children }) => {
	return (
		<section className={'information'}>
			<h1 className={'information__title'}>
				<span className={'information__text--nought'}>Noughts </span>
				and
				<span className={'information__text--cross'}> Crosses</span>
			</h1>
			{children}
		</section>
	);
};
