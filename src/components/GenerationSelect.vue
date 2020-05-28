<template>
    <label>
        Choose generation:
        <select v-if="sortedOptions.length" :value="value" @input="$emit('input', $event.target.value)">
            <option :value="0">Any</option>
            <option v-for="option in sortedOptions" :key="option.id" :value="option.id">{{option.name}}</option>
        </select>
    </label>
</template>

<script>
    import loadAll from '@/loadAll';

    export default {
        name: 'GenerationSelect',
        props: ['taxonomy', 'value'],
        data() {
            return {
                terms: [],
            }
        },

        computed: {
            sortedOptions() {
                return [...this.terms]
                    .sort((a, b) => {
                        const aNum = parseInt(a.name);
                        const bNum = parseInt(b.name);

                        return bNum - aNum;
                    });
            }
        },

        methods: {
            async loadAllTerms() {
                this.terms.push(...await loadAll(this.taxonomy._links['wp:items'][0].href + '?hide_empty=1&per_page=100'))
            },
        },

        created() {
            this.loadAllTerms()
        },
    }
</script>

<style scoped>

</style>
