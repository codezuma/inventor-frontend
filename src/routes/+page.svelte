<script>
	import Button from "../components/ui/button.svelte";
	import { browser } from '$app/environment';
    if(browser){
		(()=>{var n={start(){if(document.readyState!=="complete"){document.addEventListener("DOMContentLoaded",this.observe);return}this.observe()},observe(){document.querySelectorAll('[class*=" intersect:"],[class*=":intersect:"],[class^="intersect:"],[class="intersect"],[class*=" intersect "],[class^="intersect "],[class$=" intersect"]').forEach(e=>{let t=new IntersectionObserver(r=>{r.forEach(c=>{if(!c.isIntersecting){e.setAttribute("no-intersect","");return}e.removeAttribute("no-intersect"),e.classList.contains("intersect-once")&&t.disconnect()})});t.observe(e)})}},s=n;s.start();})();
	}
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class='mx-auto min-h-screen pt-40 py-8 relative container-main'>
    
<h1 class="text-[6rem]  mb-5 text-black  transition-all font-semibold tracking-tight leading-[1.1em]  flex justify-between ">
		<img class="w-12 h-12" src="assets/four-star.svg" alt="star-blue">
		Chandresh patidar <br/>
		Fullstack developer
	</h1>
	<p class="w-[50%] text-gray-900 opacity-0 intersect-once intersect:opacity-100 mb-12 font-medium text-3xl"> 
		Through strategic art direction and webdesign I help companies around the world grow their business.
	</p>
	<Button>hello@chandresh.me</Button>
</section>
