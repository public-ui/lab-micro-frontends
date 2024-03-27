<template>
	<ul>
		<li>
			<KolButton _label="vueButtonV2" _variant="primary" />
		</li>
		<li>
			<KolLink _href="#vue-link" _label="vueLinkV2" />
		</li>
	</ul>
</template>

<script lang="ts">
import { KolButton, KolLink } from '@public-ui/vue';

export default {
	components: {
		KolButton,
		KolLink,
	},
	setup() {
		return {};
	},
};
</script>
