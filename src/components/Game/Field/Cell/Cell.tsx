import CellLayout from "./CellLayout.tsx";
import cross from '../../../../assets/cross.png';
import nought from '../../../../assets/nought.png';
import {ISign, Player, PlayerSign, Sign} from "../../../../types/types.ts";

type PropsType = {
    item: Player | '';
};

const getSign = ({item}: PropsType): ISign | null => {
    if (item === PlayerSign.Cross) {
        return {img: cross, title: Sign.Cross};
    } else if (item === PlayerSign.Nought) {
        return {img: nought, title: Sign.Nought};
    }
    return null;
}

export default function Cell({item}: PropsType) {
    const sign = getSign({ item });

    return (
        <CellLayout>
            {sign && <img src={sign.img} alt={sign.title}/>}
        </CellLayout>
    )
}

