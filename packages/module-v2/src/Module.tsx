import React, { useState } from 'react';
import { KolButton, KolLinkGroup } from '@public-ui/react';
import { KoliBri } from 'kolibri-v2-provider';

export default () => {
	const toaster = KoliBri.ToasterService.getInstance(document);
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>V1 micro frontend</h2>

			<KolButton _label={`KolButton ${counter}`} _on={{ onClick: () => setCounter(counter + 1) }}></KolButton>
			<KolButton
				_label="Trigger toast"
				_on={{
					onClick: () => {
						toaster.enqueue({
							label: 'Toast label',
							type: 'info',
						});
					},
				}}
			/>

			<KolLinkGroup _label="Link Group" _links={[{ _label: 'One link', _href: 'https://example.com' }]}></KolLinkGroup>
		</div>
	);
};
