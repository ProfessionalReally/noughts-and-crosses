import '../../../../styles/components/cell.scss';
import React from "react";
import {IGame} from "../../../../types/types.ts";

type PropsType = {
    children: React.ReactNode;
    onClickCell: (index: number) => void;
    index: number;
    isWinning: boolean;
    isGameEnded: IGame['isGameEnded'];
}

export default function CellLayout({children, onClickCell, index, isWinning, isGameEnded}: PropsType) {
    const isDisabled = !!children || isGameEnded;

    return (
        <button
            onClick={() => onClickCell(index)}
            disabled={isDisabled}
            className={`cell__button ${isWinning ? 'cell__button-win' : ''}`}
        >
            {children}
        </button>
    );
}

