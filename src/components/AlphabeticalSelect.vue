<template>
	<div>
		<select @input="emit" :value="(value === null || value === 0) ? 0 : value.id">
			<option :value="0">{{anyText}}</option>
			<option v-for="option in sortedOptions" :key="option.id" :value="option.id">{{option.name}}</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'AlphabeticalSelect',
		props: {
			options: {
				type: Array,
			},
			value: {
				default: 0,
			},
			anyText: {
				default: 'Any',
				type: String
			},
		},

		computed: {
			sortedOptions() {
				return [...this.options].sort((a, b) => a.name < b.name ? -1 : a.name === b.name ? 0 : 1);
			},

		},

		methods: {
			emit(event) {
				this.$emit('input', this.sortedOptions.find(
					option => option.id === parseInt(event.target.value),
				) || null);
			},
		},
	};
</script>

<style scoped>

</style>
