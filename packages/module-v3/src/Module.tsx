import React from 'react';
import { useState } from 'react';
import { KolButton, KolLink } from '@public-ui/react';

export default () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>V3 micro frontend</h2>

			<KolButton _label={`KolButton ${counter}`} _on={{ onClick: () => setCounter(counter + 1) }} />

			<KolLink _label="Single Link" _href={'https://example.com'} />
		</div>
	);
};
