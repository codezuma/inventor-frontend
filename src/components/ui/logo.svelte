<script lang="ts">
    import { cn } from "$lib";

    export let className: string;
</script>
<div class={cn("w-4 h-4",className)}>
    <img src="/favicon.svg" class="aspect-square" alt="">
</div>