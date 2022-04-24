<template>
  <div class="bg-gray-200">
        <div class="flex md:min-h-screen flex-col md:flex-row">
          <div class="w-full md:w-2/5 h-96 px-10 md:h-auto md:min-h-screen relative bg-blue-1000">
                <div class="mt-72 w-full text-center">
                    <img src="~assets/img/starwarslogo-big.svg" class="w-full" alt=""/>
                </div>
          </div>

          <div class="w-full md:w-4/5 bg-white md:min-h-screen ">
            <div class="flex items-center justify-center h-full p-12">
                <div class="mt-6 w-full max-w-sm border-gray-200 border px-12 py-10 rounded-lg">
                    
                    <h2 class="font-semibold text-gray-900 text-lg leading-tight mb-3">Login</h2>
                    <div class="text-sm text-gray-400">Kindly enter your details to log in </div> 
                    
                    <form action="#" method="POST" data-vv-scope="signIn" class="w-full">
                        <div class="mt-8">
                            <div>
                                <input id="email" name="email" type="email" placeholder="Email" data-vv-as="email" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white mt-3 border-gray-400 focus:ring-indigo-500"> 
                                <p class="text-red-500 text-xs italic my-2" style="display: none;"></p> <!---->
                            </div> 
                                
                            <div>
                                <div class="relative mt-3">
                                    <input id="password" name="password" type="password" placeholder="Password" data-vv-as="password" class="bg-white text w-full focus:outline-none px-3 py-3 rounded text-gray-900 border focus:bg-white border-gray-400 focus:ring-indigo-500">  <div class="absolute inset-y-0 right-0 flex items-center px-2 pr-3 text-gray-700 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye h-4 w-4">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path> 
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>
                                </div> 
                                
                                <p class="text-red-500 text-xs italic my-2" style="display: none;"></p>
                            </div> 
                                
                        </div> 
                            
                        <div class="mt-6">
                            <div>
                                <button type="submit" class="focus:outline-none focus:shadow-outline bg-indigo-600 hover:bg-indigo-600 px-4 py-3 text-white w-full md:flex-1 rounded border-b-2 border-indigo-600 font-semibold mt-4">
                                    <span>Log in</span>
                                </button> 
                                
                                <p class="text-indigo-600 text-sm text-center mt-2 mb-20">
                                    <a href="/password/reset" class="font-semibold hover:underline">Forgot your password?</a>
                                </p> 
                                
                                <p class="text-sm text-center mt-3">
                                    <span class="mr-1">
                                        <a href="/signup" class="text-gray-900 underline font-bold">Privacy Policy</a>
                                    </span>

                                    <span class="text-gray-400">and</span> 

                                    <span class="ml-1">
                                        <a href="/signup" class="text-black underline font-bold">Terms of services</a>
									</span>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    layout: 'custom'
}
</script>