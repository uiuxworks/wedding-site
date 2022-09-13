    <script>
            import { OnMount } from 'fractils'
        	import { fade,fly } from 'svelte/transition';
    </script>
    <OnMount>
        <div in:fly={{ y: 100, duration: 1000 }} class="mx-auto max-w-[500px] h-[700px] bg-gray-200 h-full w-full relative">
            <div class="bg-pink-100 h-full w-full">
                <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <div class="bg-cover bg-center h-full" style="background-image: url('./imgHD.png')"></div>
            </div>
            <div class="absolute inset-x-0 bottom-0">
                <div class="bg-gray-50">
                    dsds
                </div>
            </div>
        </div>
    </OnMount>
