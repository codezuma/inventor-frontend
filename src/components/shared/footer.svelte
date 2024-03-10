<script>
  import { cn } from '$lib';

  const FOCUS_VISIBLE_OUTLINE =
    'focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500';
  const LINK_SUBTLE_STYLES = 'hover:text-indigo-600 dark:hover:text-indigo-400';
</script>

<div class="mt-36 pb-36 text-base container-main">
  <div class="text-gray-500">
    <div class="flex flex-col justify-between font-medium lg:flex-row">
      <div class="flex gap-5 flex-wrap">
        <a href="/videos" class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Videos</a>
        <a href="/blog" class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Posts</a>
        <a
          href="https://twitter.com/codezuma?ref=chandresh.dev"
          class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Twitter</a
        >
        <a
          href="https://www.youtube.com/delba?ref=chandresh.dev"
          class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>YouTube</a
        >
        <a
          href="https://github.com/codezuma?ref=chandresh.dev"
          class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>GitHub</a
        >
      </div>
    </div>
  </div>
  <p class="mt-8 text-gray-600">
    Built with
    <a
      href="https://kit.svelte.dev?ref=chandresh.dev"
      class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Svelte Kit</a
    >,
    <a
      href="https://mdxjs.com?ref=chandresh.dev"
      class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>MDX</a
    >,
    <a
      href="https://tailwindcss.com?ref=chandresh.dev"
      class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Tailwind</a
    >
    and
    <a href="https://vercel.com" class={cn(LINK_SUBTLE_STYLES, FOCUS_VISIBLE_OUTLINE)}>Vercel</a>
  </p>
</div>
