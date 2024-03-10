<script>
	import Footer from '$components/shared/footer.svelte';
	import Navbar from '$components/shared/navbar.svelte';
	import '../main.css';
</script>

<Navbar />

<slot />
<Footer />
