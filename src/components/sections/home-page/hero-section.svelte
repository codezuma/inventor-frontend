<script lang="ts">
  import image from '$lib/images/four-star.svg';
  import badge from '$lib/images/development-badge.svg';
  import Button from '../../ui/button.svelte';
</script>

<section class="mx-auto min-h-screen pt-40 py-8 relative container-main">
  <h1
    class="  mb-5 text-black relative text-start w-fit font-semibold tracking-tighter leading-[1.1em] flex justify-between"
  >
    <img
      class="w-18 h-18 absolute top-8 -left-8 hover:scale-110 hover:rotate-180 duration-1000 cursor-pointer transition-all"
      src={image}
      alt="star-blue"
    />
    <img
      class="w-18 h-18 absolute top-20  translate-x-1/2 rotate-12 -right-5"
      src={badge}
      alt="star-blue"
    />
    Hi. I'm Chandresh. <br />
    A Developer.
  </h1>
  <p class="w-3/4 text-gray-900 mb-12 font-medium xl:text-2xl md:text-xl text-lg">
    I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
  </p>
  <Button>hello@chandresh.me</Button>
</section>
