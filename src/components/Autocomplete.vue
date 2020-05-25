<template>
	<div class="autocomplete-container">
		<div class="autocomplete-values">
			<span v-for="term in selectedOptionsNames" :key="term.id" @click="removeValue(term.id)">{{term.name}}</span>

			<input type="text" v-model="searchStr" class="autocomplete-input" :disabled="disabled">
		</div>

		<ul class="autocomplete-list" :hidden="searchStr.length < 1" >
			<template v-if="filteredOptions.length" >


			<li class="autocomplete-item"
			    @click="selectValue(option.id)"
			    v-for="option in filteredOptions"
			    :key="option.id"
			    v-html="(option.highlightedName || option.name) + ' ('+option.count+')'"></li>
			</template>
			<li v-else class="autocomplete-item nothing-found">
				Nothing found
			</li>
		</ul>
		<select :name="name" v-model="value" multiple hidden class="autocomplete-select"  :disabled="disabled">
			<option class="autocomplete-item"
			        v-for="option in options"
			        :key="option.id"
			        :value="option.id"
			></option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'Autocomplete',
		props: {
			options: {
				type: Array,
				default: () => [],
			},
			name: String,
			disabled: Boolean,
			value: {
				default: () => [],
			},
		},
		data() {
			return {
				searchStr: '',
			};
		},

		computed: {
			searchRegExp() {
				return new RegExp(this.searchStr, 'i');
			},

			filteredOptions() {

				const options = [];

				// if (this.searchStr.length < 1) {
				// 	return this.options;
				// }

				this.options.forEach(option => {
					const match = option.name.match(this.searchRegExp);

					if (match) {
						option.highlightedName = option.name.replace(this.searchRegExp, '<b>' + match[0] + '</b>');

						options.push(option);
					} else {
						delete option.highlightedName;
					}

				});

				return options;
			},

			selectedOptionsNames() {
				return this.value.map(id => this.options.find(o => o.id === id));
			},
		},

		methods: {
			selectValue(id) {
				this.searchStr = '';
				const tmpSet = new Set(this.value);
				tmpSet.add(id);
				this.$emit('input', [...tmpSet]);
			},

			removeValue(id) {
				const tmpSet = new Set(this.value);
				tmpSet.delete(id);
				this.$emit('input', [...tmpSet]);
			},
		},

	};
</script>

<style scoped>
	.autocomplete-container {
		display: block;
		position: relative;
		border: 2px inset ThreeDLightShadow;


		/*outline: 2px solid tomato;*/
	}

	.autocomplete-list {
		position: absolute;
		top: 100%;
		margin: 0;
		padding: 0;
		left: 0;
		width: 100%;
		/*display: none;*/
		background: white;
		list-style: none;
		z-index: 1;

		/*outline: 2px solid tomato;*/
	}

	.autocomplete-values {
		display: flex;
		flex-wrap: wrap;
	}
	.autocomplete-values span {
		cursor: pointer;
	}


	.autocomplete-values input {
		max-width: 100%;
		min-width: 20px;
		flex-grow: 1;
		border: none;
	}

	/*.autocomplete-container:focus-within .autocomplete-list {*/
	/*	display: block;*/
	/*}*/
</style>
