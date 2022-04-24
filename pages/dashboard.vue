<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
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
                    </tr>

                    <tr v-for="(f, index) in films" :key="index" class="border-b-2 border-gray-100">
                        <td class="px-6 py-3"><input type="checkbox" /></td>
                        <td class="px-6 py-3">{{f.title}}</td>
                        <td class="px-6 py-3">{{f.release_date}}</td>
                        <td class="px-6 py-3">{{f.director}}</td>
                        <td class="px-6 py-3">{{f.producer}}</td>
                        <td class="px-6 py-3">{{f.episode_id}}</td>
                        <td class="px-6 py-3"><a :href="f.characters[0]" />{{f.characters[0]}}</td>
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