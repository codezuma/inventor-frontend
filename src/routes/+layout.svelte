<script>
	import Navbar from '../components/navbar.svelte';
import './styles.css';
</script>

<Navbar />
<section class="relative">
	<section class="grid -z-[1] grid-cols-12 absolute [&>*:nth-child(5n)]:border-r-2  [&>*:nth-child(5n)]:border-r-gray-200   h-full w-full top-0">
		{#each Array(12) as _, index (index)}
		<div class="col-span-1  border-r-2 border-gray-100 first:border-gray-200  h-full"></div>
	    {/each}
	</section>
	<slot />
</section>