import '../../../styles/components/information.scss';
import React from "react";

type PropsType = {
    children: React.ReactNode;
}

export default function InformationLayout({children}: PropsType) {
    return (
        <section className={'information'}>
            <h1 className={'information__title'}>
                <span className={'information__text--nought'}>Noughts </span>
                and
                <span className={'information__text--cross'}> Crosses</span>
            </h1>
            {children}
        </section>
    )
}

