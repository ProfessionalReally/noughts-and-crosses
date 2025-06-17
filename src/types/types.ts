export const Sign = {
	Cross: 'cross',
	Nought: 'nought',
} as const;

export const PlayerSign = {
	Cross: 'X',
	Nought: '0',
} as const;

export type Player = 'X' | '0';

export interface IGame {
	currentPlayer: Player;
	isGameEnded: boolean;
	isDraw: boolean;
	field: (Player | '')[];
	winningCombo: number[] | null;
}

export interface ISign {
	img: string;
	title: string;
}
