import React, {createContext, useContext, useState} from "react";
import {IGame} from "../types/types.ts";

type GameContextProviderProps = {
    children: React.ReactNode;
};

const GameContext = createContext<IGame | null>(null);

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within GameProvider');
    }
    return context;
};

export const GameProvider = ({children}: GameContextProviderProps) => {
    const [game] = useState<IGame>({
        currentPlayer: 'X',
        isGameEnded: false,
        isDraw: false,
        field: Array(9).fill(''),
    });

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    )
}

