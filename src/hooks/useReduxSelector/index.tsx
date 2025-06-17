import { useEffect, useState } from 'react';
import { RootState, store } from '@src/redux/store';

export function useReduxSelector<T>(selector: (state: RootState) => T): T {
	const [selectedState, setSelectedState] = useState(() =>
		selector(store.getState()),
	);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setSelectedState(selector(store.getState()));
		});
		return unsubscribe;
	}, [selector]);

	return selectedState;
}
