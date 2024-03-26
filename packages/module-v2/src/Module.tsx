import React from 'react';
import { useState } from 'react';
import { KolButton, KolLinkGroup } from '@public-ui/react';

export default () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>V2 micro frontend</h2>

			<KolButton _label={`KolButton ${counter}`} _on={{ onClick: () => setCounter(counter + 1) }} />

			<KolLinkGroup _label="Link Group" _links={[{ _label: 'One link', _href: 'https://example.com' }]}></KolLinkGroup>
		</div>
	);
};
