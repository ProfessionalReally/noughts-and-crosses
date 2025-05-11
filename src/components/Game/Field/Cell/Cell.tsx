import CellLayout from "./CellLayout.tsx";
import cross from '../../../../assets/cross.png';
import nought from '../../../../assets/nought.png';
import {ISign, Player, PlayerSign, Sign} from "../../../../types/types.ts";
import {useGame} from "../../../../context/GameContext.tsx";

type PropsType = {
    item: Player | '';
    index: number;
};

const getSign = (item: Player | ''): ISign | null => {
    if (item === PlayerSign.Cross) {
        return {img: cross, title: Sign.Cross};
    } else if (item === PlayerSign.Nought) {
        return {img: nought, title: Sign.Nought};
    }
    return null;
}

export default function Cell({item, index}: PropsType) {
    const {takeTurn, game} = useGame();
    const sign = getSign(item);

    return (
        <CellLayout
            onClickCell={takeTurn}
            index={index}
            isWinning={game.winningCombo?.includes(index) || false}
            isGameEnded={game.isGameEnded}
        >
            {sign && <img src={sign.img} alt={sign.title}/>}
        </CellLayout>
    )
}

