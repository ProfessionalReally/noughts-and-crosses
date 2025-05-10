import '../../../styles/components/field.scss';
import { IGame } from "../../../types/types.ts";
import Cell from "./Cell/Cell.tsx";

type PropsType = Pick<IGame, 'field'>;

export default function FieldLayout({field}: PropsType) {
    return (
        <section
            className={'field'}
            role="group"
            aria-label="Game board noughts and crosses"
        >
            {field.length > 0 && field.map((item, index) => {
                return <Cell item={item} key={index}/>
            })}
        </section>
    )
}

