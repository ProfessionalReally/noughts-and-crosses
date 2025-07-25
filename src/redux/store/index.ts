import gameReducer from '@src/redux/reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		game: gameReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
