<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        

        <div class="bg-white overflow-x-auto mt-6">
            <div class="flex space-x-5">
                <div>
                    <img src="~assets/img/dashboard.svg" alt=""/>
                </div>

                <div>
                    <div class="text-3xl font-bold mb-5 mt-5">{{dashboardDetails.title}}</div>
                    <div>Director: {{dashboardDetails.director}}</div>
                    <div>Producer: {{dashboardDetails.producer}}</div>
                    <div>Release Date: {{$moment(dashboardDetails.release_date).format("DD/MM/YYYY")}}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'Dashboard Details',
    },
    data() {
        return {
            dashboardDetails: ''
        }
    },

    created() {
        this.getDashboardDetails();
    },

    methods: {
        async getDashboardDetails(){
            let f = new URLSearchParams(window.location.search);

            await this.$axios.$get("https://swapi.dev/api/films/"+f.get("id"))
            .then(response =>{
                this.dashboardDetails = response;
            })
        }
    },
}
</script>