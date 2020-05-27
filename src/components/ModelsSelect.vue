<template>
    <div class="filter-container model-filter-container">
        <label v-for="(section, index) in notEmptySections" :key="section.id">
            Choose
            <span v-if="index === 0">brand</span>
            <span v-else-if="index === 1">{{notEmptySections[index-1].items.get(notEmptySections[index-1].state).name}} model</span>
            <span v-else>trim</span>:
            <alphabetical-select :options="section.items" :value="section.state"
                                 @input="value => rebuildSections(value, index)"/>
        </label>
    </div>
</template>

<script>
    import AlphabeticalSelect from "@/components/AlphabeticalSelect";
    import fetchAndCache from '@/fetchAndCache'
    import loadAll from "@/loadAll";

    export default {
        name: 'ModelsSelect',
        components: {AlphabeticalSelect},
        props: ['taxonomy', 'value'],

        data() {
            return {
                sections: [],
            };
        },

        computed: {
            loadedIDs() {
                return this.terms_tree.map(t => t.id)
            },

            notEmptySections() {
                const notEmptySections = []

                for (const section of this.sections) {
                    if (section.items.size < 1) {
                        return notEmptySections
                    }

                    notEmptySections.push(section)
                }

                return notEmptySections
            },

            lastValue() {
                let lastValue = 0
                for (const section of this.notEmptySections) {
                    if (section.state !== 0) {
                        lastValue = section.state
                    }
                }

                return lastValue
            }
        },

        methods: {
            async rebuildSections(value, sectionIndex) {
                const changedSection = this.sections[sectionIndex]
                changedSection.state = value

                this.sections.splice(sectionIndex + 1)

                if (value) {
                    const parent = changedSection.items.get(value)

                    const section = {
                        id: parent.id || 0,
                        items: await this.loadTerms(parent.id),
                        state: 0
                    }

                    this.sections.push(section)
                }
            },
            async loadTerm(id) {
                if (!id) {
                    return {}
                }


                /**
                 * Если запрашиваемый термин уже загружен – найти его и вернуть
                 * Эта оптимизация необходима при инициализации компонента
                 **/
                if (this.notEmptySections.length) {
                    for (const section of this.notEmptySections) {
                        if (section.items.has(id)) {
                            return section.items.get(id)
                        }
                    }
                }

                console.log(`loadTerm(${id})`)


                return fetchAndCache(
                    this.taxonomy._links['wp:items'][0].href + '/' + id,
                );
            },

            async loadTerms(parent = 0) {
                const terms = await loadAll(
                    this.taxonomy._links['wp:items'][0].href +
                    '?hide_empty=1&per_page=100&parent=' + parent
                    // + '&exclude=' + this.excludeIDs,
                );


                return new Map(terms.map(t => ([t.id, t])))
            },

            async setupInitialValue() {
                if (this.value) {
                    this.sections.push(...(await this.buildSectionFromChild(this.value)))
                } else {
                    this.sections.push(...(await this.buildSectionsFromParent(0)))

                }
            },

            async buildSectionFromChild(id) {
                if (!id) {
                    return []
                }

                const term = await this.loadTerm(id)

                if (term.parent === undefined) {
                    return []
                }

                const parent = await this.loadTerm(term.parent)


                const section = {
                    id: parent.id || 0,
                    items: await this.loadTerms(parent.id),
                    state: id
                }

                return [...(await this.buildSectionFromChild(parent.id)), section]
            },

            async buildSectionsFromParent(parentID) {
                const parent = await this.loadTerm(parentID)

                const section = {
                    id: parentID,
                    items: await this.loadTerms(parent.id),
                    state: 0
                }

                return [section]
            }


        },

        created() {
            this.setupInitialValue();
        },

        watch: {
            'sections': {
                deep: true,
                handler(value) {
                    let lastValue = 0
                    for (const section of this.notEmptySections) {
                        if (section.state !== 0) {
                            lastValue = section.state
                        }
                    }

                    console.log({lastValue})
                },
            },
        },
    };

</script>
