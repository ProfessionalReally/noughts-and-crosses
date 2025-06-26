import { Player, PlayerSign } from '@src/types/types';
import { WIN_PATTERNS } from '@src/constants/constants';

const checkWinGame = (
	field: (Player | '')[],
	currentPlayer: Player,
): number[] | null => {
	let winningCombo: number[] | null = null;

	WIN_PATTERNS.some((combo) => {
		const isWinning = combo.every(
			(index) => field[index] === currentPlayer,
		);
		if (isWinning) {
			winningCombo = combo;
			return true;
		}
		return false;
	});

	return winningCombo;
};

const checkDrawGame = (field: (Player | '')[]) => {
	return field.every((cell) => {
		return cell !== '';
	});
};

export const getGameState = (
	field: (Player | '')[],
	currentPlayer: Player,
): {
	isGameEnded: boolean;
	isDraw: boolean;
	winningCombo: number[] | null;
} => {
	const winningCombo = checkWinGame(field, currentPlayer);
	return {
		isGameEnded: !!winningCombo,
		isDraw: !winningCombo && checkDrawGame(field),
		winningCombo,
	};
};

export const getNextPlayer = (currentPlayer: Player): Player => {
	return currentPlayer === PlayerSign.Cross
		? PlayerSign.Nought
		: PlayerSign.Cross;
};
