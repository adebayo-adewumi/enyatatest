<template>
    <div class="flex-shrink-0 border-b-2 border-gray-100">
        <header class="px-6">
            <div class="flex justify-between items-center py-3">
                <div class="flex-1 text-gray-400 flex items-center">
                    <div class="flex items-center hidden space-x-2">
                        <span><img src="~assets/img/chevron_right.svg" alt=""/></span>

                        <span>Back</span>
                    </div>
                </div> 
                
                <div class="flex items-center space-x-3">
                    <button>
                        <img src="~assets/img/notifications.svg" class="h-5 w-5 fill-current text-gray-500" alt=""/> 
                        
                    </button>

                    <div class="ml-5 relative border-l-2 border-gray-200">
                        
                        <button class="relative flex items-center space-x-2 focus:outline-none pl-3">
                            <div><img src="~assets/img/account.svg" class="rounded-full h-7 w-7" alt=""/> </div>

                            <div class="flex justify-between space-x-10">
                                <span class="hidden xl:block ml-2 font-medium text-sm">John Doe</span>

                                <img src="~assets/img/ellipsis.svg" class="ml-1 h-5 w-5 fill-current text-gray-700" alt=""/>  
                            </div>                           
                            
                        </button> 
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>