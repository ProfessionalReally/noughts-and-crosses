export enum Sign {
    Cross = 'cross',
    Nought = 'nought',
}

export enum PlayerSign {
    Cross = 'X',
    Nought = '0',
}

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
