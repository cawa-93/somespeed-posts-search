<template>
	<form style="width: 320px; padding: 25px;" action="https://somespeed.com/" target="_blank">
		<label>
			Search query:<br>
			<input type="search" name="s">
		</label>

		<models-select v-if="rawAllTaxonomies.models" :taxonomy="rawAllTaxonomies.models" :value="1945"/>

		<input type="submit">
	</form>
</template>

<script>
	import ModelsSelect from '@/components/ModelsSelect.vue';
	import fetchAndCache from "./fetchAndCache";


	export default {
		name: 'App',

		components: {
			ModelsSelect,
		},

		data() {
			return {
				rawAllTaxonomies: {},
			};
		},

		computed: {
			ready() {
				return !!this.rawAllTaxonomies;
			},
		},

		async created() {
			const rawAllTaxonomies = await fetchAndCache('https://somespeed.com/wp-json/wp/v2/taxonomies?type=post');

			this.rawAllTaxonomies = {
				models: rawAllTaxonomies.models,
			};
		},
	};
</script>


<style>
	:root {
		--header-color: #ffffff;
		--basic: #333333;
		--title: #000000;
		--accent: #0000ff;
		--primary: #0000ff;
		--secondary: #000000;
		--feedbasic: #333333;
		--pagebasic: #333333;
		--aside: #000000;
	}

	.has-basic-color {
		color: var(--basic);
	}

	.has-basic-background-color {
		background-color: var(--basic);
		color: var(--basic-text);
	}

	.has-title-color {
		color: var(--title);
	}

	.has-title-background-color {
		background-color: var(--title);
		color: var(--title-text);
	}

	.has-accent-color {
		color: var(--accent);
	}

	.has-accent-background-color {
		background-color: var(--accent);
		color: var(--accent-text);
	}

	.has-primary-color {
		color: var(--primary);
	}

	.has-primary-background-color {
		background-color: var(--primary);
		color: var(--primary-text);
	}

	.has-secondary-color {
		color: var(--secondary);
	}

	.has-secondary-background-color {
		background-color: var(--secondary);
		color: var(--secondary-text);
	}

	.has-feedbasic-color {
		color: var(--feedbasic);
	}

	.has-feedbasic-background-color {
		background-color: var(--feedbasic);
		color: var(--feedbasic-text);
	}

	.has-pagebasic-color {
		color: var(--pagebasic);
	}

	.has-pagebasic-background-color {
		background-color: var(--pagebasic);
		color: var(--pagebasic-text);
	}

	.has-aside-color {
		color: var(--aside);
	}

	.has-aside-background-color {
		background-color: var(--aside);
		color: var(--aside-text);
	}

	@import "https://somespeed.com/wp-content/themes/askio/css/parent-style.css?ver=1589282794";
	@import "https://somespeed.com/wp-content/themes/somespeed/style.css?ver=1589975844";
</style>
