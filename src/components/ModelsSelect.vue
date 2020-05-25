<template>
	<div class="filter-container model-filter-container">
		<term-select
			label="Select brand:"
			:terms="terms"
			:loadChildTerms="loadChildTerms"
			v-model="selectedTerm"
			:key="0"></term-select>
		<!--			any-text="Any brand"-->
		<input v-if="selectedTerm" type="hidden" :name="this.taxonomy.slug" :value="selectedTerm.slug">
	</div>
</template>

<script>
	import TermSelect from '@/components/TermSelect.vue';


	export default {
		name: 'ModelsSelect',
		components: {TermSelect},
		props: ['taxonomy', 'value'],

		data() {
			return {
				terms: [],
				selectedTerm: null,
			};
		},

		methods: {
			async loadChildTerms(parent = 0) {
				const promise = fetch(
					this.taxonomy._links['wp:items'][0].href +
					'?hide_empty=1&per_page=100&parent=' + parent,
				);

				let parentTerm;
				if (parent) {
					parentTerm = this.terms.find(t => t.id === parent);
				}

				const resp = await promise;
				let terms = await resp.json();
				if (parentTerm) {
					terms = terms.map(t => {
						t.brand = parentTerm.name;
						return t;
					});
				}
				return terms;
			},
		},

		created() {
			this.loadChildTerms().then(terms => {
				this.terms = terms;

				if (this.value) {
					for (const term of this.terms) {
					console.log({value: this.value, term: term.id})
						if (term.id === this.value || term.slug === this.value) {
							this.$set(this, 'selectedTerm', term);
							break;
						}
					}
				}
			});
		},

	  watch: {
			'selectedTerm.id': {
				handler(value) {
					this.$emit('input', value)
				}
			}
	  }
	};
</script>
