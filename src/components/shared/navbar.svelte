<script>
    import Logo from "$components/ui/logo.svelte";

  const navItems = {
    '/': {
      name: 'home'
    },
    '/work': {
      name: 'work'
    },
    '/blog': {
      name: 'blog'
    },
    '/guestbook': {
      name: 'guestbook'
    }
  };
</script>

<aside class=" mb-16  container-main tracking-tight">
  <div class="lg:sticky lg:top-20">
    <nav
      class="flex flex-row items-center -ml-2  relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
      id="nav"
    >
      <div class="flex flex-row space-x-0 pr-10">
        {#each Object.entries(navItems) as [path, { name }]}
          <a
            href={path}
            class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
          >
            {name}
          </a>
        {/each}
      </div>
    </nav>
  </div>
</aside>
