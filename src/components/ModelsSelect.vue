<template>
	<div class="hello">
		<term-select label="Brands" any-text="Any brand" :terms="terms" :loadChildTerms="loadChildTerms" v-model="selectedTerm" :key="0"></term-select>
		<input v-if="selectedTerm" type="hidden" :name="this.taxonomy.slug" :value="selectedTerm.slug">
	</div>
</template>

<script>
	import TermSelect from '@/components/TermSelect.vue';


	export default {
		name: 'TaxonomySelect',
		components: {TermSelect},
		props: {
			taxonomy: Object,
		},

		data() {
			return {
				terms: [],
				selectedTerm: null,
			};
		},

		methods: {
			async loadChildTerms(parent = 0) {
				const resp = await fetch(
					this.taxonomy._links['wp:items'][0].href +
					'?hide_empty=1&per_page=100&parent=' + parent,
				);

				return resp.json();
			},
		},

		created() {
			this.loadChildTerms().then(terms => this.terms = terms)
		},

		watch: {
			// selectedBrands(value) {
			// 	this.loadModels(value);
			// },
		},
	};
</script>
