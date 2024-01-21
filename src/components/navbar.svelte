<script>
  import Logo from './common/logo.svelte';
    import { Button } from '$components/ui/button/index';
</script>

<nav
  class="w-full flex justify-between items-center left-1/2 z-50 -translate-x-1/2 fixed py-8 container-main"
>
  <a href="/">
    <Logo className="md:w-40 w-32" />
  </a>

  <ul class="md:flex hidden gap-6">
    <a href="/coming-soon">
      <li class="font-semibold text-gray-400 hover:text-white">Projects</li>
    </a>
    <a href="/coming-soon">
      <li class="font-semibold text-gray-400 hover:text-white">Open Source</li>
    </a>
    <a href="/coming-soon">
      <li class="font-semibold text-gray-400 hover:text-white">Blogs</li>
    </a>
  </ul>
  <button class="text-lg md:block hidden font-medium text-roaring-green-shade2 tracking-tight">
    chandresh.dev@gmail.com
  </button>
  <Button></Button>
</nav>
