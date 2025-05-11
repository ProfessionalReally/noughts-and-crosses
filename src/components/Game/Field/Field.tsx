import FieldLayout from "./FieldLayout.tsx";
import {useGame} from "../../../context/GameContext.tsx";

export default function Field() {
    const {game} = useGame();

    return (
        <FieldLayout field={game.field}/>
    )
}

