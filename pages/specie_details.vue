<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        

        <div class="bg-white overflow-x-auto mt-6">
            <div class="flex space-x-5">
                <div>
                    <img src="~assets/img/specie.svg" alt=""/>
                </div>

                <div>
                    <div class="text-3xl font-bold mb-5 mt-5">{{specieDetails.name}}</div>
                    <div>Designer: {{specieDetails.designation}}</div>
                    <div>Language: {{specieDetails.language}}</div>
                    <div>Eye Colors: {{specieDetails.eye_colors}}</div>
                    <div>Average Lifespan: {{specieDetails.average_lifespan}}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Species Details',
    },
    data() {
        return {
            specieDetails: ''
        }
    },

    created() {
        this.getSpecieDetails();
    },

    methods: {
        async getSpecieDetails(){
            let p = new URLSearchParams(window.location.search);

            await this.$axios.$get("https://swapi.dev/api/species/"+p.get("id"))
            .then(response =>{
                this.specieDetails = response;
            })
        }
    },
}
</script>