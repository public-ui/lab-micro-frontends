import React from 'react';
import { Module as ModuleV1 } from 'module-v1';
import { Module as ModuleV2 } from 'module-v2';

function App() {
	return (
		<>
			{/*<kol-button _label="kol-button"></kol-button>*/}
			<h1>Micro Frontends</h1>
			<ModuleV1 />
			<ModuleV2 />
		</>
	);
}

export default App;
