<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        

        <div class="bg-white overflow-x-auto mt-6">
            <div class="flex space-x-5">
                <div>
                    <img src="~assets/img/starship.svg" alt=""/>
                </div>

                <div>
                    <div class="text-3xl font-bold mb-5 mt-5">{{starshipDetails.name}}</div>
                    <div>Model: {{starshipDetails.model}}</div>
                    <div>Passenger: {{starshipDetails.passengers}}</div>
                    <div>Pilot: {{starshipDetails.pilots.length}}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Starship Details',
    },
    data() {
        return {
            starshipDetails: ''
        }
    },

    created() {
        this.getStarshipDetails();
    },

    methods: {
        async getStarshipDetails(){
            let s = new URLSearchParams(window.location.search);

            await this.$axios.$get("https://swapi.dev/api/starships/"+s.get("id"))
            .then(response =>{
                this.starshipDetails = response;
            })
        }
    },
}
</script>