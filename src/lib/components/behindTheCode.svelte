<script lang="ts">
	import ScrollButton from './scrollButton.svelte';
</script>

<section class="flex h-svh flex-col justify-between px-8 py-28 md:px-16 lg:px-28 lg:py-48">
	<div class="max-w-5xl">
		<h2 class="text-text pb-2 font-family-heading text-3xl font-bold sm:text-4xl md:text-5xl">
			Behind the Code
		</h2>
		<p class="text-text font-family-body text-lg sm:text-xl md:text-2xl">
			Yemeni-born, 26, splitting life between lecture halls and production servers. With 3+ years of
			experience, I build full-stack apps using
			<span class="font-bold text-[#F05340]">Laravel</span> /
			<span class="font-bold text-[#064B35]">Django</span> on the backend and
			<span class="font-bold text-[#61DBFB]">React</span> /
			<span class="font-bold text-[#FF3E00]">Svelte</span> /
			<span class="font-bold text-[#44D1FD]">Flutter</span>
			on the front—then harden them with real <span class="font-bold">security practices</span> ,
			not just checkbox compliance. Everything runs in
			<span class="font-bold text-[#1D63ED]">Docker</span> on
			<span class="font-bold">Linux</span>, automated to the teeth. I also teach this stack to 500+
			students a year, which keeps me sharp and my docs human-readable. If it has a CPU, I'll make
			it do something useful (and probably blog the steps).
		</p>
	</div>

	<div class="flex w-full flex-col items-center">
		<ScrollButton />
	</div>
</section>
