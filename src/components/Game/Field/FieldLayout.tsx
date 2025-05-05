import '../../../styles/components/field.scss';
import cross from '../../../assets/cross.png';
import nought from '../../../assets/nought.png';

export default function FieldLayout() {
    return (
        <section
            className={'field'}
            role="group"
            aria-label="Game board noughts and crosses"
        >
            <button className={'field__button'}>
                <img src={cross} alt={'cross'}/>
            </button>
            <button className={'field__button'}>
                <img src={nought} alt={'nought'}/>
            </button>
            <button className={'field__button'}>
                <img src={nought} alt={'nought'}/>
            </button>
            <button className={'field__button'}>
                <img src={cross} alt={'cross'}/>
            </button>
            <button className={'field__button'}>
                <img src={nought} alt={'nought'}/>
            </button>
            <button className={'field__button'}>

            </button>
            <button className={'field__button'}>
                <img src={nought} alt={'nought'}/>
            </button>
            <button className={'field__button'}>
                <img src={cross} alt={'cross'}/>
            </button>
            <button className={'field__button'}>
                <img src={cross} alt={'cross'}/>
            </button>
        </section>
    )
}

