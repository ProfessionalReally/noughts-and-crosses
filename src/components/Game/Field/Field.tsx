import FieldLayout from "./FieldLayout.tsx";
import {useGame} from "../../../context/GameContext.tsx";

export default function Field() {
    const {field} = useGame();

    return (
        <FieldLayout field={field}/>
    )
}

