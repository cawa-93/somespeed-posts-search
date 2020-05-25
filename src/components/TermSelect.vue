<template>
	<div>
		<label>
			{{label}}
			<alphabetical-select id="brands-select"
			                     :options="terms"
			                     :value="value"
			                     @input="(e, p) => $emit('input', p)"
			                     :anyText="anyText"/>
		</label>


		<term-select v-if="value && childTerms && childTerms.length > 1"
		             :label="'Select ' + (value.brand || '') + ' ' + value.name + ' '+(value.parent ? 'trim' : 'model')+':'"
		             :terms="childTerms"
		             :load-child-terms="loadChildTerms"
		             v-model="selectedChild"
		             @input="emit"
		             :key="value.id"></term-select>
		<!--		             :any-text="'Any ' +value.name + ' '+(value.parent ? 'trim' : 'model')+''"-->
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
				childTerms: null,
				selectedChild: null,
			};
		},

		methods: {
			emit() {
				// console.log({
				// 	label: this.label,
				// 	value: this.value,
				// 	selectedChild: this.selectedChild,
				// });
				this.$emit('input', (this.selectedChild && this.value) ? this.selectedChild : this.value);
			},
		},

		watch: {
			'value.id': {
				immediate: true,
				handler: async function() {
					this.selectedChild = null;

					this.emit()

					if (this.value && this.childTerms === undefined) {
						this.$set(this, 'childTerms', await this.loadChildTerms(this.value.id));
					}

				},
			},
		},
	};
</script>

<style scoped>

</style>
