<script lang="ts">
	import { mode } from 'mode-watcher';
	import BoxReveal from './box_reveal.svelte';
	import CursorGrid from './cursor_grid.svelte';

	const isDark = $derived(mode.current === 'dark');
</script>

<section
	id="behind-the-code"
	aria-label="Behind the Code section"
	class="relative isolate flex min-h-svh flex-col justify-between overflow-hidden px-8 py-28 md:px-16 lg:px-28 lg:py-48"
>
	<div class="absolute inset-0 z-0" aria-hidden="true">
		<CursorGrid
			cellSize={64}
			color={isDark ? '#A1A1AA' : '#3F3F46'}
			radius={160}
			falloff="smooth"
			lineWidth={1}
			maxOpacity={0.7}
			fillOpacity={0.12}
			cellRadius={8}
			gridOpacity={isDark ? 0.07 : 0.06}
		/>
	</div>

	<div
		class="pointer-events-none absolute inset-0 z-5 bg-linear-to-b from-background via-background/85 to-background/0 md:bg-linear-to-r md:rtl:bg-linear-to-l"
		aria-hidden="true"
	></div>

	<div class="relative z-10 max-w-5xl">
		<BoxReveal boxColor="var(--primary)" duration={0.3}>
			<h2 class="pb-2 text-3xl font-bold sm:text-4xl md:text-5xl">Behind the Code</h2>
		</BoxReveal>

		<BoxReveal boxColor="var(--secondary)" duration={0.5}>
			<p class="text-lg sm:text-xl md:text-2xl">
				Yemeni-born, 26, splitting life between lecture halls and production servers. With 3+ years
				of experience, I build full-stack apps using
				<span class="font-bold text-[#F05340]">Laravel</span> /
				<span class="font-bold text-[#3C873A]">Node.js</span> on the backend and
				<span class="font-bold text-[#61DBFB]">React</span> /
				<span class="font-bold text-[#FF3E00]">Svelte</span> /
				<span class="font-bold text-[#44D1FD]">Flutter</span>
				on the front—then harden them with real <span class="font-bold">security practices</span> ,
				not just checkbox compliance. Everything runs in
				<span class="font-bold text-[#1D63ED]">Docker</span> on
				<span class="font-bold">Linux</span>, automated to the teeth. I also teach this stack to
				500+ students a year, which keeps me sharp and my docs human-readable. If it has a CPU, I'll
				make it do something useful (and probably blog the steps).
			</p>
		</BoxReveal>
	</div>
</section>
