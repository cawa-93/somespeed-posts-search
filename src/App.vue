<template>
	<form style="width: 320px; padding: 25px;" action="https://somespeed.com/" target="_blank" id="app">
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

		async created() {
			const rawAllTaxonomies = await fetchAndCache('https://somespeed.com/wp-json/wp/v2/taxonomies?type=post');

			this.rawAllTaxonomies = {
				models: rawAllTaxonomies.models,
			};
		},
	};
</script>



