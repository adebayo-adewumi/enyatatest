<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        <div class="md:flex">
            <div class="w-full md:w-5/6 ">                            
                <span class="text-sm text-gray-400">Starships</span>
            </div>         
        </div>

        <div class="bg-white rounded shadow overflow-x-auto mt-6">
            <table class="w-full whitespace-no-wrap">

                <tbody>
                    <tr class="text-left text-gray-400 border-b-2 border-gray-100">
                        <th class="px-6 py-3"><input type="checkbox" /></th>
                        <th class="px-6 py-3 font-medium">Name</th>
                        <th class="px-6 py-3 font-medium">Model</th>
                        <th class="px-6 py-3 font-medium">Class</th>
                        <th class="px-6 py-3 font-medium">Passenger</th>
                        <th class="px-6 py-3 font-medium">Length</th>
                        <th class="px-6 py-3 font-medium">Character</th>
                        <th class="px-6 py-3 font-medium"></th>
                    </tr>

                    <tr v-for="(starship, index) in starships" :key="index" class="border-b-2 border-gray-100">
                        <td class="px-6 py-3"><input type="checkbox" /></td>
                        <td class="px-6 py-3">{{starship.name}}</td>
                        <td class="px-6 py-3">{{starship.model}}</td>
                        <td class="px-6 py-3">{{starship.starship_class}}</td>
                        <td class="px-6 py-3">{{starship.passengers}}</td>
                        <td class="px-6 py-3">{{starship["length"]}}</td>
                        <td class="px-6 py-3">{{starship.films[0]}}</td>
                        <td class="px-6 py-3"><NuxtLink :to='`/starship_details?id=${index + 1}`'>View</NuxtLink></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Starships',
    },
    data() {
        return {
            starships: ''
        }
    },

    created() {
        this.getStarships();
    },

    methods: {
        async getStarships(){
            await this.$axios.$get("https://swapi.dev/api/starships/")
            .then(response =>{
                this.starships = response.results;
            })
        }
    },
}
</script>