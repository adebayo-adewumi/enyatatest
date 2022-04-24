<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        <div class="md:flex">
            <div class="w-full md:w-5/6 ">                            
                <span class="text-sm text-gray-400">People</span>
            </div>         
        </div>

        <div class="bg-white rounded shadow overflow-x-auto mt-6">
            <table class="w-full whitespace-no-wrap">

                <tbody>
                    <tr class="text-left text-gray-400 border-b-2 border-gray-100">
                        <th class="px-6 py-3"><input type="checkbox" /></th>
                        <th class="px-6 py-3 font-medium">Name</th>
                        <th class="px-6 py-3 font-medium">Birth year</th>
                        <th class="px-6 py-3 font-medium">Gender</th>
                        <th class="px-6 py-3 font-medium">Hair color</th>
                        <th class="px-6 py-3 font-medium">Height</th>
                        <th class="px-6 py-3 font-medium">Created</th>
                    </tr>

                    <tr v-for="(p, index) in people" :key="index" class="border-b-2 border-gray-100">
                        <td class="px-6 py-3"><input type="checkbox" /></td>
                        <td class="px-6 py-3">{{p.name}}</td>
                        <td class="px-6 py-3">{{p.birth_year}}</td>
                        <td class="px-6 py-3">{{p.gender}}</td>
                        <td class="px-6 py-3">{{p.hair_color}}</td>
                        <td class="px-6 py-3">{{p.height}}</td>
                        <td class="px-6 py-3">{{p.created}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'People',
    },
    data() {
        return {
            people: ''
        }
    },

    created() {
        this.getPeople();
    },

    methods: {
        async getPeople(){
            await this.$axios.$get("https://swapi.dev/api/people/")
            .then(response =>{
                this.people = response.results;
            })
        }
    },
}
</script>