<template>
    <div class="fixed z-30 inset-y-0 left-0 w-64 px-8 py-4 bg-blue-1000 border-r overflow-y-auto lg:inset-auto lg:static lg:translate-x-0 -translate-x-full ease-in transition-medium">
        <div class="-mx-3 pl-3 flex items-center justify-between pt-5">
            <img src="~assets/img/starwarslogo-big.svg" alt="" class="w-24 mx-auto"/>

            <button class="block text-gray-600 hover:text-gray-800 lg:hidden">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                    <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"></path>
                </svg>
            </button>             
        </div> 
             
        <nav>   
            <div class="mt-12">
                <NuxtLink to="/dashboard" class="-mx-3 px-3 py-2 flex items-center justify-between text-sm font-medium rounded hover:bg-blue-700 mb-16" :class="[currentRoute === '/dashboard' ? 'bg-blue-700' : '']">
                    <span class="inline-flex items-center">
                        <img src="~assets/img/grid.svg" class="h-6 w-6 transition-all ease-out transition-medium" alt=""/> 
                        
                        <span class="ml-4 text-white">Overviews</span>
                    </span>
                </NuxtLink>

                <NuxtLink to="/starships" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg hover:bg-blue-700" :class="[currentRoute === '/starships' ? 'bg-blue-700' : '']">
                    <span class="inline-flex items-center">
                        <img src="~assets/img/recblue.svg" class="h-6 w-6 transition-all ease-out transition-medium" alt=""/> 
                        
                        <span class="ml-4 text-white">Starships</span>
                    </span>
                </NuxtLink>

                <NuxtLink to="/people" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg hover:bg-blue-700" :class="[currentRoute === '/people' ? 'bg-blue-700' : '']">
                    <span class="inline-flex items-center">
                        <img src="~assets/img/recpink.svg" class="h-6 w-6 transition-all ease-out transition-medium" alt=""/> 
                        
                        <span class="ml-4 text-white">People</span>
                    </span>
                </NuxtLink>

                <NuxtLink to="/species" class="-mx-3 px-3 py-2 mb-2 flex items-center justify-between text-sm font-medium rounded-lg hover:bg-blue-700" :class="[currentRoute === '/species' ? 'bg-blue-700' : '']">
                    <span class="inline-flex items-center">
                        <img src="~assets/img/recyellow.svg" class="h-6 w-6 transition-all ease-out transition-medium" alt=""/> 
                        
                        <span class="ml-4 text-white">Species</span>
                    </span>
                </NuxtLink>
            </div>                 
        </nav> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentRoute: '',
        }
    },

    created(){
      this.currentRoute = this.$router.currentRoute.path;
    },
}
</script>