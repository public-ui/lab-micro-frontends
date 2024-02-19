import React from "react";
import {useState} from "react";

export default () => {
    const [counter, setCounter] = useState(0);

    return (<div>
        <h2>V2 micro frontend</h2>

        {/* @ts-ignore */}
        <kol-button-v2 _label={`KolButton ${counter}`} _on={{onClick: () => setCounter(counter + 1)}}></kol-button-v2>
    </div>)
}
