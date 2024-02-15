import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {registerKolibri as registerKolibriV1} from "kolibri-v1-provider";
import {registerKolibri as registerKolibriV2} from "kolibri-v2-provider";

(async () => {
    await registerKolibriV1();
    // await registerKolibriV2();

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
})();
