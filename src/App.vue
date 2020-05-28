<template>
    <form style="width: 320px; padding: 25px;" action="https://somespeed.com/" target="_blank" id="app">
        <label>
            Search query:<br>
            <input type="search" name="s">
        </label>

        <models-select v-if="rawAllTaxonomies.models"
                       v-show="rawAllTaxonomies.models.ready"
                       :taxonomy="rawAllTaxonomies.models" :value="0"
                       @ready="v => rawAllTaxonomies.models.ready = v"/>

        <loading-skeleton v-if="!rawAllTaxonomies.models || !rawAllTaxonomies.models.ready"/>


        <years-input v-if="rawAllTaxonomies.years" v-show="rawAllTaxonomies.years.ready"
                     :taxonomy="rawAllTaxonomies.years" :value="2000" @ready="v => rawAllTaxonomies.years.ready = v"/>
        <loading-skeleton v-if="!rawAllTaxonomies.years || !rawAllTaxonomies.years.ready"/>


        <generation-select v-if="rawAllTaxonomies.generation" v-show="rawAllTaxonomies.generation.ready"
                           @ready="v => rawAllTaxonomies.generation.ready = v" :taxonomy="rawAllTaxonomies.generation"
                           v-model.number="selectedGeneration"/>
        <loading-skeleton v-if="!rawAllTaxonomies.generation || !rawAllTaxonomies.generation.ready"/>


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
    import fetchAndCache from './fetchAndCache';
    import YearsInput from '@/components/YearsInput';
    import GenerationSelect from '@/components/GenerationSelect';
    import LoadingSkeleton from '@/components/LoadingSkeleton';


    export default {
        name: 'App',

        components: {
            LoadingSkeleton,
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


            rawAllTaxonomies.models.ready = false
            rawAllTaxonomies.years.ready = false
            rawAllTaxonomies.generation.ready = false


            this.rawAllTaxonomies = {
                models: rawAllTaxonomies.models,
                years: rawAllTaxonomies.years,
                generation: rawAllTaxonomies.generation,
            };
        },
    };
</script>



