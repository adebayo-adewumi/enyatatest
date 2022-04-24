<template>
    <main class="p-6 flex-1 overflow-y-auto relative">
        

        <div class="bg-white overflow-x-auto mt-6">
            <div class="flex space-x-5">
                <div>
                    <img src="~assets/img/people.svg" alt=""/>
                </div>

                <div>
                    <div class="text-3xl font-bold mb-5 mt-5">{{peopleDetails.name}}</div>
                    <div>Gender: {{peopleDetails.gender}}</div>
                    <div>Year of birth: {{peopleDetails.birth_year}}</div>
                    <div>Skin Color: {{peopleDetails.skin_color}}</div>
                    <div>Height: {{peopleDetails.average_height}}</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    head: {
        title: 'People Details',
    },
    data() {
        return {
            peopleDetails: ''
        }
    },

    created() {
        this.getPeopleDetails();
    },

    methods: {
        async getPeopleDetails(){
            let p = new URLSearchParams(window.location.search);

            await this.$axios.$get("https://swapi.dev/api/people/"+p.get("id"))
            .then(response =>{
                this.peopleDetails = response;
            })
        }
    },
}
</script>