import '../../../../styles/components/cell.scss';
import React from "react";

type PropsType = {
    children: React.ReactNode;
}

export default function CellLayout({children}: PropsType) {
    return (
        <button className={'cell__button'}>
            {children}
        </button>
    );
}

