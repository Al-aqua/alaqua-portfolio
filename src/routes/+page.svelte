<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import BehindTheCode from '$lib/components/behindTheCode.svelte';
	import GetInTouch from '$lib/components/getInTouch.svelte';
	import UnderConstruction from '$lib/components/under_construction.svelte';
</script>

<svelte:head>
	<title>Mohammad Al-aqua</title>
</svelte:head>

<Navbar />
<main>
	<Hero />
	<BehindTheCode />
	<GetInTouch />
</main>
<UnderConstruction />
