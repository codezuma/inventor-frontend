<script lang="ts">
  import Navbar from '../components/navbar.svelte';
  import { generateGrid, getMobileSize } from '../utils';
  import './styles.css';

  let innerHeight: number = 0;
  let innerWidth: number = 0;

  $: mobileSize = getMobileSize(innerWidth);
  $: gridSize = generateGrid(mobileSize);
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<Navbar />
<section class="relative">
  <section
    class="grid -z-[1] md:grid-cols-12 sm:grid-cols-8 grid-cols-4 absolute [&>*:nth-child(5n)]:border-r-2 [&>*:nth-child(5n)]:border-r-gray-200 h-full w-full top-0"
  >
    {#each Array(gridSize) as _, index (index)}
      <div class="col-span-1 border-r-2 border-gray-100 first:border-gray-200 h-full" />
    {/each}
  </section>
  <slot />
</section>
