<template>
	<div>
		<select @input="emit" :value="value">

			<option :value="0">{{anyText}}</option>
			<optgroup v-for="group in groups" :key="group.label" :label="group.label">
				<option v-for="option in group.items" :key="option.id" :value="option.id">{{option.name}}</option>
			</optgroup>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'AlphabeticalSelect',
		props: {
			options: {
				type: Map,
			},

			value: {
				default: 0,
			},
			anyText: {
				default: 'Any',
				type: String,
			},
		},

		computed: {
			sortedOptions() {
				return [...this.options]
						.map((p) => p[1])
						.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() === b.name.toUpperCase() ? 0 : 1);
			},
			groups() {
				const groups = [];

				this.sortedOptions.forEach(option => {
					const letter = option.name.charAt(0).toUpperCase();
					if (!groups[groups.length - 1] || groups[groups.length - 1].label !== letter) {
						groups.push({
							label: letter,
							items: [],
						});
					}

					groups[groups.length - 1].items.push(option);
				});

				return groups;
			},

		},

		methods: {
			emit(event) {
				this.$emit('input', parseInt(event.target.value));
			},
		},
	};
</script>

<style scoped>

</style>
