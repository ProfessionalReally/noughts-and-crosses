import '../../../styles/components/information.scss';

export default function InformationLayout() {
    return (
        <section className={'information'}>
            <h1 className={'information__title'}>
                <span className={'information__text--nought'}>Noughts </span>
                and
                <span className={'information__text--cross'}> Crosses</span>
            </h1>
        </section>
    )
}

