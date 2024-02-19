import React from "react";
import {KolButton} from "@public-ui/react";
import {useState} from "react";

export default () => {
    const [counter, setCounter] = useState(0);

    return (<div>
        <h2>V2 micro frontend</h2>

        <KolButton _label={`KolButton ${counter}`} _on={{onClick: () => setCounter(counter + 1)}}></KolButton>
    </div>)
}
