<template>
	<div>
		<label>
			{{label}}
			<alphabetical-select id="brands-select"
			                     :options="terms"
			                     v-model="selectedTerm"
			                     :anyText="anyText"/>
		</label>


		<term-select v-if="selectedTerm && selectedTerm.childTerms && selectedTerm.childTerms.length > 1"
		             :label="'Select ' + (selectedTerm.brand || '') + ' ' + selectedTerm.name + ' '+(selectedTerm.parent ? 'trim' : 'model')+':'"
		             :terms="selectedTerm.childTerms"
		             :load-child-terms="loadChildTerms"
		             v-model="selectedChild"
		             @input="emit"
		             :key="selectedTerm.id"></term-select>
		<!--		             :any-text="'Any ' +selectedTerm.name + ' '+(selectedTerm.parent ? 'trim' : 'model')+''"-->
	</div>
</template>

<script>
	import AlphabeticalSelect from '@/components/AlphabeticalSelect.vue';


	export default {
		name: 'TermSelect',
		components: {AlphabeticalSelect},

		props: ['terms', 'label', 'loadChildTerms', 'value', 'anyText'],

		data() {
			return {
				selectedTerm: null,
				selectedChild: null,
			};
		},

		methods: {
			emit() {
				// console.log({
				// 	label: this.label,
				// 	selectedTerm: this.selectedTerm,
				// 	selectedChild: this.selectedChild,
				// });
				this.$emit('input', (this.selectedChild && this.selectedTerm) ? this.selectedChild : this.selectedTerm);
			},
		},

		watch: {
			'selectedTerm.id': {
				immediate: true,
				handler: async function() {
					this.selectedChild = null;

					this.emit()

					if (this.selectedTerm && this.selectedTerm.childTerms === undefined) {
						this.$set(this.selectedTerm, 'childTerms', await this.loadChildTerms(this.selectedTerm.id));
					}

				},
			},
		},
	};
</script>

<style scoped>

</style>
