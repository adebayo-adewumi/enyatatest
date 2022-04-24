<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        <div class="md:flex">
            <div class="w-full md:w-5/6 ">                            
                <span class="text-sm text-gray-400">Species</span>
            </div>         
        </div>

        <div class="bg-white rounded shadow overflow-x-auto mt-6">
            <table class="w-full whitespace-no-wrap">

                <tbody>
                    <tr class="text-left text-gray-400 border-b-2 border-gray-100">
                        <th class="px-6 py-3"><input type="checkbox" /></th>
                        <th class="px-6 py-3 font-medium">Name</th>
                        <th class="px-6 py-3 font-medium">Classification</th>
                        <th class="px-6 py-3 font-medium">Eye colors</th>
                        <th class="px-6 py-3 font-medium">Hair color</th>
                        <th class="px-6 py-3 font-medium">Height</th>
                        <th class="px-6 py-3 font-medium">Created</th>
                    </tr>

                    <tr v-for="(specie, index) in species" :key="index" class="hover:bg-gray-100 cursor-pointer border-b-2 border-gray-100">
                        <td class="px-6 py-3"><input type="checkbox" /></td>
                        <td class="px-6 py-3">{{specie.name}}</td>
                        <td class="px-6 py-3">{{specie.classification}}</td>
                        <td class="px-6 py-3">{{specie.eye_colors}}</td>
                        <td class="px-6 py-3">{{specie.hair_colors}}</td>
                        <td class="px-6 py-3">{{specie.average_height}}</td>
                        <td class="px-6 py-3">{{$moment(specie.created).format("DD/MM/YYYY")}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Species',
    },
    data() {
        return {
            species: ''
        }
    },

    created() {
        this.getSpecies();
    },

    methods: {
        async getSpecies(){
            await this.$axios.$get("https://swapi.dev/api/species/")
            .then(response =>{
                this.species = response.results;

                console.log(this.species);
            })
        }
    },
}
</script>