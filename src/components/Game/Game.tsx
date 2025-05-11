import GameLayout from "./GameLayout.tsx";
import {useGame} from "../../context/GameContext.tsx";

export default function Game() {
    const {resetGame} = useGame();

    const handleClickReset = () =>  {
        resetGame();
    }

    return (
        <GameLayout onClickReset={handleClickReset}/>
    )
}

