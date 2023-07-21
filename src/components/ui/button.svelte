<button class="text-lg px-6 py-2 group border overflow-hidden relative font-medium border-gray-500 rounded-full ">
    <slot/>
    <div class="bg-black text-white absolute opacity rounded-full  scale-50 flex items-center justify-center left-1/2 top-full group-hover:opacity-100 transition-all group-hover:top-0 group-hover:scale-100 w-full h-full  -translate-x-1/2">
        <slot/>
    </div>
</button>