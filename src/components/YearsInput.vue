<template>
    <label class="filter-container year-filter-container" v-if="flatYears.length">
        Choose year:
        <input list="years-list" type="number" :min="minYear" :max="maxYear" placeholder="2000" v-model="selectedYear">
        <datalist id="years-list">
            <option v-for="year in flatYears" :key="year" :value="year"></option>
        </datalist>
    </label>
</template>

<script>
    import loadAll from '@/loadAll';

    export default {
        name: 'YearsInput',

        props: ['taxonomy', 'value'],

        data() {
            return {
                terms: [],
                selectedYear: ''
            }
        },

        computed: {
            flatYears() {
                return this
                    .terms
                    .map(t => parseInt(t.slug, 10))
                    .filter(y => !isNaN(y))
                    .sort((a, b) => a-b)
            },
            minYear() {
                if (this.flatYears.length) {
                    return Math.min(...this.flatYears)
                }

                return 1900
            },
            maxYear() {
                if (this.flatYears.length) {
                    return Math.max(...this.flatYears)
                }

                return (new Date).getFullYear()
            },
            selectedTermId() {
                const term = this.terms.find(t => t.slug === this.selectedYear)
                return term ? term.id : 0
            },
        },

        methods: {
            async loadAllTerms() {
                this.terms.push(...await loadAll(this.taxonomy._links['wp:items'][0].href + '?hide_empty=1&per_page=100'))
            },
        },

        async created() {
            await this.loadAllTerms()
            this.$emit('ready', true)
        },

        watch: {
            selectedYear() {
                this.$emit('input', this.selectedTermId)
            }
        }
    }
</script>

<style scoped>

</style>
