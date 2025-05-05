import Information from "./Information/Information.tsx";
import Field from "./Field/Field.tsx";
import '../../styles/components/game.scss';

export default function GameLayout() {
    return (
        <main className={'game'}>
            <Information/>
            <Field/>
            <button className={'game__button-reset'}>Reset</button>
        </main>
    )
}

