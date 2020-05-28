<template>
	<form style="width: 320px; padding: 25px;" action="https://somespeed.com/" target="_blank" id="app">
		<label>
			Search query:<br>
			<input type="search" name="s">
		</label>

		<models-select v-if="rawAllTaxonomies.models" :taxonomy="rawAllTaxonomies.models" :value="1945"/>
		<years-input  v-if="rawAllTaxonomies.years" :taxonomy="rawAllTaxonomies.years" :value="0" />
		<generation-select v-if="rawAllTaxonomies.generation" :taxonomy="rawAllTaxonomies.generation" v-model.number="selectedGeneration"/>
		<hr>
		<pre>
selectedModelId: 0
selectedYearTermId: {{selectedYearTermId}}
selectedGeneration: {{selectedGeneration}}
		</pre>
		<input type="submit">
	</form>
</template>

<script>
	import ModelsSelect from '@/components/ModelsSelect.vue';
	import fetchAndCache from "./fetchAndCache";
	import YearsInput from "@/components/YearsInput";
	import GenerationSelect from '@/components/GenerationSelect';


	export default {
		name: 'App',

		components: {
			GenerationSelect,
			YearsInput,
			ModelsSelect,
		},

		data() {
			return {
				rawAllTaxonomies: {},
				selectedYearTermId: 2000,
				selectedGeneration: 3381,
			};
		},

		async created() {
			const rawAllTaxonomies = await fetchAndCache('https://somespeed.com/wp-json/wp/v2/taxonomies?type=post');

			this.rawAllTaxonomies = {
				models: rawAllTaxonomies.models,
				years: rawAllTaxonomies.years,
				generation: rawAllTaxonomies.generation,
			};
		},
	};
</script>



