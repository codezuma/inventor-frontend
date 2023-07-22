<script>
  import Button from '../components/ui/button.svelte';
  import { reveal, setDefaultOptions } from 'svelte-reveal';

  setDefaultOptions({
    easing: 'easeOutCubic',
    duration: 500
  });

  import image from '$lib/images/four-star.svg';
  import badge from '$lib/images/development-badge.svg';
</script>

<svelte:head>
  <title>Chandresh patidar</title>
  <meta name="description" content="" />
</svelte:head>

<section use:reveal class="mx-auto min-h-screen pt-40 py-8 relative container-main">
  <h1  class="text-[6rem] mb-5 text-black relative w-fit font-semibold tracking-tight leading-[1.1em] flex justify-between">
    <img
      class="w-18 h-18 absolute top-8 -left-8 hover:scale-110 hover:rotate-180 duration-1000 cursor-pointer transition-all"
      src={image}
      alt="star-blue"
    />
    <img
      class="w-18 h-18 absolute top-20 translate-x-1/2 rotate-12 -right-5"
      src={badge}
      alt="star-blue"
    />
    Chandresh patidar <br />
    Fullstack developer
  </h1>
  <p class="w-[50%] text-gray-900 mb-12 font-medium text-3xl">
    Through strategic art direction and webdesign I help companies around the world grow their
    business.
  </p>
  <Button>hello@chandresh.me</Button>
</section>
