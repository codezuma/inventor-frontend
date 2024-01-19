<script lang="ts">
  import { generateGrid, getMobileSize } from '../../utils';

  let innerHeight: number = 0;
  let innerWidth: number = 0;

  $: mobileSize = getMobileSize(innerWidth);
  $: gridSize = generateGrid(mobileSize);
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<section class="relative ">
  <section
    class="grid -z-[1] bg-neutral md:grid-cols-12 sm:grid-cols-8 grid-cols-4 absolute [&>*:nth-child(5n)]:border-r-2 [&>*:nth-child(5n)]:border-r-gray-700/40 h-full w-full top-0"
  >
    {#each Array(gridSize) as _, index (index)}
      <div class="col-span-1 relative z-10 border-r-2  border-gray-800/20 first:border-gray-700/40 h-full" />
    {/each}
  </section>
  <slot />
</section>
