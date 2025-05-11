import InformationLayout from "./InformationLayout.tsx";
import {useGame} from "../../../context/GameContext.tsx";
import {
    IGame,
    ISign,
    Player,
    PlayerSign,
    Sign
} from "../../../types/types.ts";
import cross from "../../../assets/cross.png";
import nought from "../../../assets/nought.png";
import React from "react";

type GameStatus = {
    currentPlayer: IGame['currentPlayer'];
    isDraw: IGame['isDraw'];
    isGameEnded: IGame["isGameEnded"];
}

const getSign = (item: Player): ISign => {
    if (item === PlayerSign.Cross) {
        return {img: cross, title: Sign.Cross};
    } else {
        return {img: nought, title: Sign.Nought};
    }
}

const getStatusMarkup = ({currentPlayer, isDraw, isGameEnded}: GameStatus) => {
    if (isDraw) {
        return <p className={'information__status'}>It's a Draw!</p>
    } else if (!isDraw) {
        const sign = getSign(currentPlayer);
        const img = <img src={sign.img} alt={sign.title}/>;
        if (isGameEnded) {
            return (
                <p className={'information__status'}>
                    Congratulations: {img} Win
                </p>
            )
        } else {
            return (
                <p className={'information__status'}>
                    Player {img} turn:
                </p>
            )
        }
    }
    return null;
}

export default function Information() {
    const {game} = useGame();
    const {currentPlayer, isDraw, isGameEnded} = game;

    const ContentComponent = React.memo(() => {
        return getStatusMarkup({currentPlayer, isDraw, isGameEnded});
    });

    return (
        <InformationLayout>
            <ContentComponent/>
        </InformationLayout>
    )
}

