import React, {createContext, useContext, useState} from "react";
import {IGame, Player, PlayerSign} from "../types/types.ts";
import {WIN_PATTERNS} from "../constants/constants.ts";

type GameContextType = {
    game: IGame;
    resetGame: () => void;
    takeTurn: (index: number) => void;
}

type GameContextProviderProps = {
    children: React.ReactNode;
};

const GameContext = createContext<GameContextType | null>(null);

const initialState: IGame = {
    currentPlayer: PlayerSign.Cross,
    isGameEnded: false,
    isDraw: false,
    field: Array(9).fill(''),
    winningCombo: null,
};

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within GameProvider');
    }
    return context;
};

export const GameProvider = ({children}: GameContextProviderProps) => {
    const [game, setGame] = useState<IGame>(initialState);

    const checkWinGame = (field: (Player | '')[]): number[] | null => {
        let winningCombo: number[] | null = null;

        WIN_PATTERNS.some((combo) => {
            const isWinning = combo.every((index) => field[index] === game.currentPlayer)
            if (isWinning) {
                winningCombo = combo;
                return true;
            }
            return false;
        })

        return winningCombo
    };

    const checkDrawGame = (field: (Player | '')[]) => {
        return field.every((cell) => {
            return cell !== ''
        })
    };

    const takeTurn = (index: number) => {
        if (!game.isGameEnded && !game.field[index]) {
            const newField = [...game.field];
            newField[index] = game.currentPlayer;

            const winningCombo = checkWinGame(newField);
            if (winningCombo) {
                setGame(prev => ({...prev, isGameEnded: true, field: newField, winningCombo}));
            } else if (checkDrawGame(newField)) {
                setGame(prev => ({...prev, isDraw: true, field: newField}));
            } else {
                const newCurrentPlayer = game.currentPlayer === PlayerSign.Cross
                    ? PlayerSign.Nought
                    : PlayerSign.Cross;
                setGame(prev => ({...prev, currentPlayer: newCurrentPlayer, field: newField}));
            }
        }
    }

    const resetGame = () => {
        setGame(initialState)
    }

    return (
        <GameContext.Provider value={{game, resetGame, takeTurn}}>
            {children}
        </GameContext.Provider>
    )
}

