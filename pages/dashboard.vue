<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        <div class="grid grid-cols-4 gap-4 mb-16">
            <div class="p-5 rounded-lg shadow-md border">
                <div class="flex justify-between mb-6 items-center">
                    <div class="font-bold">Films</div>
                    <div>
                        <img src="~assets/img/recgreen.svg" alt="" width="17"/>
                    </div>
                </div>

                <div class="font-bold">200</div>
                <div class="text-xs text-green-500">20 More than than yesterday</div>
            </div>

            <div class="p-5 rounded-lg shadow-md border">
                <div class="flex justify-between mb-6 items-center">
                    <div class="font-bold">Starship</div>
                    <div>
                        <img src="~assets/img/recblue.svg" alt=""/>
                    </div>
                </div>

                <div class="font-bold">200</div>
                <div class="text-xs text-green-500">20 More than than yesterday</div>
            </div>

            <div class="p-5 rounded-lg shadow-md border">
                <div class="flex justify-between mb-6 items-center">
                    <div class="font-bold">People</div>
                    <div>
                        <img src="~assets/img/recpink.svg" alt=""/>
                    </div>
                </div>

                <div class="font-bold">200</div>
                <div class="text-xs text-green-500">20 More than than yesterday</div>
            </div>

            <div class="p-5 rounded-lg shadow-md border">
                <div class="flex justify-between mb-6 items-center">
                    <div class="font-bold">Species</div>
                    <div>
                        <img src="~assets/img/recyellow.svg" alt=""/>
                    </div>
                </div>

                <div class="font-bold">200</div>
                <div class="text-xs text-green-500">20 More than than yesterday</div>
            </div>
        </div>

        <div class="md:flex">
            <div class="w-full md:w-5/6 ">                            
                <span class="text-sm text-gray-400">Films</span>
            </div>         
        </div>

        <div class="bg-white rounded shadow overflow-x-auto mt-6">
            <table class="w-full whitespace-no-wrap">

                <tbody>
                    <tr class="text-left text-gray-400 border-b-2 border-gray-100">
                        <th class="px-6 py-3"><input type="checkbox" /></th>
                        <th class="px-6 py-3 font-medium">Film Title</th>
                        <th class="px-6 py-3 font-medium">Release Date</th>
                        <th class="px-6 py-3 font-medium">Director</th>
                        <th class="px-6 py-3 font-medium">Producer</th>
                        <th class="px-6 py-3 font-medium">Episode ID</th>
                        <th class="px-6 py-3 font-medium">Character</th>
                        <th class="px-6 py-3 font-medium"></th>
                    </tr>

                    <tr v-for="(f, index) in films" :key="index" class="border-b-2 border-gray-100 cursor-pointer hover:bg-gray-100">
                        <td class="px-6 py-3"><input type="checkbox" /></td>
                        <td class="px-6 py-3">{{f.title}}</td>
                        <td class="px-6 py-3">{{f.release_date}}</td>
                        <td class="px-6 py-3">{{f.director}}</td>
                        <td class="px-6 py-3">{{f.producer}}</td>
                        <td class="px-6 py-3">{{f.episode_id}}</td>
                        <td class="px-6 py-3"><a :href="f.characters[0]" />{{f.characters[0]}}</td>
                        <td class="px-6 py-3"><NuxtLink :to='`/dashboard_details?id=${index + 1}`'>View</NuxtLink></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Films',
    },
    data() {
        return {
            films: ''
        }
    },

    created() {
        this.getFilms();
    },

    methods: {
        async getFilms(){
            await this.$axios.$get("https://swapi.dev/api/films/")
            .then(response =>{
                this.films = response.results;
            })
        }
    },
}
</script>