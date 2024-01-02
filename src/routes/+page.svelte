<script>
  import { reveal, setDefaultOptions } from 'svelte-reveal';
  import HeroSection from '../components/sections/home-page/hero-section.svelte';
  setDefaultOptions({
    easing: 'easeOutCubic',
    duration: 500
  });
</script>

<svelte:head>
  <title>Chandresh patidar</title>
  <meta name="description" content="" />
</svelte:head>

<HeroSection />
