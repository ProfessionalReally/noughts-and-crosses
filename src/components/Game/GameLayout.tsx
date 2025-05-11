import Information from "./Information/Information.tsx";
import Field from "./Field/Field.tsx";
import '../../styles/components/game.scss';

type PropsType = {
    onClickReset: () => void;
};

export default function GameLayout({onClickReset}: PropsType) {
    return (
        <main className={'game'}>
            <Information/>
            <Field/>
            <button
                className={'game__button-reset'}
                onClick={onClickReset}
            >
                Reset
            </button>
        </main>
    )
}

