<template>
    <div>
        <label v-if="terms && terms.length > 0">
            {{selectedTerm}}
            <alphabetical-select
                    id="brands-select"
                    :options="terms"
                    v-model="selectedTerm"
                    :anyText="anyText"/>
        </label>

{{childTerms.length}}
        <!--        <term-select v-if="selectedTerm && selectedTerm.childTerms && selectedTerm.childTerms.length > 1"-->
        <!--                     :label="'Select ' + (selectedTerm.brand || '') + ' ' + selectedTerm.name + ' '+(selectedTerm.parent ? 'trim' : 'model')+':'"-->
        <!--                     :terms="selectedTerm.childTerms"-->
        <!--                     :load-child-terms="loadChildTerms"-->
        <!--                     v-model="selectedChild"-->
        <!--                     @input="emit"-->
        <!--                     :key="selectedTerm.id"></term-select>-->
        <!--		             :any-text="'Any ' +selectedTerm.name + ' '+(selectedTerm.parent ? 'trim' : 'model')+''"-->
        <!--        {{taxonomy}}-->
    </div>

</template>

<script>
    import AlphabeticalSelect from '@/components/AlphabeticalSelect.vue';


    export default {
        name: 'TermSelect',
        components: {AlphabeticalSelect},

        // inject: ['taxonomy'],

        props: ['tree', 'parent', 'label', 'loadChildTerms', 'value', 'anyText'],

        data() {
            return {
                selectedTerm: 0,
                selectedChild: 0,
            };
        },

        computed: {
            // selectedTerm() {
            //     return this.terms.find(t => t.slug === this.value);
            // },

            childTerms() {
                if (!this.selectedTerm) {
                    return []
                }

                return this.tree.filter(t => t.parent === this.selectedTerm)
            },

            terms() {
                if (!this.tree || this.tree.length === 0) {
                    return []
                }
                return this.tree.filter(t => t.parent === this.parent)
            }
        },

        methods: {
            init() {
                // console.log('Init', {
                //     terms: this.terms,
                //     value: this.value,
                // });
                if (Array.isArray(this.terms) && this.terms.length > 0 && this.value) {
                    const selectedTerm = this.terms.find(t => t.id === this.value);
                    if (selectedTerm) {
                        this.$set(this, 'selectedTerm', selectedTerm.id)
                    }
                }
            },
            emit() {
                // console.log({
                // 	label: this.label,
                // 	selectedTerm: this.selectedTerm,
                // 	selectedChild: this.selectedChild,
                // });
                // this.$emit('input', (this.selectedChild && this.selectedTerm) ? this.selectedChild : this.selectedTerm);
            },
        },

        // created() {
        //     this.init()
        // },

        watch: {
            terms: {
                immediate: true,
                handler: function () {
                    this.init();
                },
            },
            // terms: {
            //     immediate: true,
            //     handler: function () {
            //         this.init();
            //     },
            // },
            'selectedTerm': {
                immediate: true,
                handler: async function () {

                    this.selectedChild = 0;

                    // this.emit();

                    // if (this.selectedTerm && this.selectedTerm.childTerms === undefined) {
                    //     this.$set(this.selectedTerm, 'childTerms', await this.loadChildTerms(this.selectedTerm.id));
                    // }

                    this.loadChildTerms(this.selectedTerm)

                },
            },
        },
    };
</script>

<style scoped>

</style>
