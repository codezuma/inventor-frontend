<script lang="ts">
  import Button from '../../ui/button.svelte';
  import PatternBlock from '../../common/blocks/pattern-block.svelte';

</script>

<section class="mx-auto min-h-screen z-0 pt-40 py-8 relative container-main">
  <div class="absolute w-full h-full top-0 right-0 -z-10" />
  <h1
    class="  mb-5 text-roaring-green md:flex-row flex-col relative text-start w-fit font-semibold tracking-tighter leading-[1.1em] flex justify-between"
  >
    <!--  <img
      class="w-18 h-18 absolute md:top-8 md:-left-8 xss:top-12 top-4 right-2 hover:scale-110 hover:rotate-180 duration-1000 cursor-pointer transition-all"
      src={image}
      alt="star-blue"
    />
    <img
      class="h-16 md:absolute md:top-20 order-2 md:block hidden md:translate-x-1/2 mt-2  md:rotate-12 md:-right-5"
      src={badge}
      alt="developer-badge"
    /> -->
    <span>
      Hi. I'm Chandresh. <br />
      A Developer.
    </span>
  </h1>
  <p
    class="md:w-3/4 w-full text-roaring-green-shade1 mb-12 font-medium xl:text-2xl md:text-xl text-lg"
  >
    I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
  </p>
  <Button>hello@chandresh.me</Button>
  <PatternBlock className="absolute w-[25vw] bottom-0 md:block hidden right-0" />
</section>
