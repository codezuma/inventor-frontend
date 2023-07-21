<script>
	import Button from "../components/ui/button.svelte";

</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class='mx-auto min-h-screen pt-40 py-8 relative container-main'>
    
	<h1 class="text-[6rem]  mb-5 text-black font-semibold tracking-tight leading-[1.1em]  flex justify-between ">
		<img class="w-12 h-12" src="assets/four-star.svg" alt="star-blue">
		Chandresh patidar <br/>
		Fullstack developer
	</h1>
	<p class="w-[50%] text-gray-900 mb-12 font-medium text-3xl"> 
		Through strategic art direction and webdesign I help companies around the world grow their business.
	</p>
	<Button>hello@chandresh.me</Button>
</section>
