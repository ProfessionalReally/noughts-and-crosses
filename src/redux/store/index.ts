import { createStore } from 'redux';
import { gameReducer } from '@src/redux/reducers';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__?: any;
	}
}

export const store = createStore(
	gameReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
