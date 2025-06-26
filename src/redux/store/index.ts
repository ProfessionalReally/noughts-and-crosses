import { createStore } from 'redux';
import { gameReducer } from '@src/redux/reducers';
import type { IGame } from '@src/types/types.ts';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(gameReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState> & {
	game: IGame;
};
export type AppDispatch = typeof store.dispatch;
