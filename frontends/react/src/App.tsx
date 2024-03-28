import { KolButton, KolLink } from '@public-ui/react';

function App() {
	return (
		<ul>
			<li>
				<KolButton _label="reactButtonV2" _variant="primary" />
			</li>
			<li>
				<KolLink _href="#react-link" _label="reactLinkV2" />
			</li>
		</ul>
	);
}

export default App;
