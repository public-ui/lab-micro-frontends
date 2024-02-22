import React from "react";
import {useState} from "react";
import { KolButton } from '@public-ui/react'

export default () => {
    const [counter, setCounter] = useState(0);

    return (<div>
        <h2>V2 micro frontend</h2>


        React adapter:
        <KolButton _label={`KolButton ${counter}`} _on={{onClick: () => setCounter(counter + 1)}} />

        <hr/>

        vanilla HTML:
        {/* @ts-ignore */}
        <kol-button-v2 _label={`KolButton ${counter}`}></kol-button-v2>
    </div>)
}
