<script lang="ts">
	import { mode } from 'mode-watcher';
	import Cubes from './cubes.svelte';
	import { Button } from './ui/button';
	import { m } from '#lib/paraglide/messages.js';

	const isDark = $derived(mode.current === 'dark');
</script>

<section
	class="relative isolate flex min-h-svh flex-col items-start justify-between
	overflow-hidden px-6 py-24 sm:px-10 md:px-28 md:py-48"
	aria-label="Hero section"
>
	<div class="absolute inset-0 z-0 opacity-60" aria-hidden="true">
		<Cubes
			gridSize={8}
			maxAngle={45}
			radius={3}
			borderStyle="2px dashed var(--ring)"
			faceColor="transparent"
			rippleColor={isDark ? 'rgba(113, 113, 123, 0.35)' : 'rgba(159, 159, 169, 0.35)'}
			autoAnimate={true}
			rippleOnClick={true}
			class="absolute inset-0 aspect-auto h-full w-full max-md:w-full"
		/>
	</div>

	<div
		class="pointer-events-none absolute inset-0 z-5 bg-linear-to-b
		from-background via-background/85 to-background/0 md:bg-linear-to-r
		md:rtl:bg-linear-to-l"
		aria-hidden="true"
	></div>

	<div class="relative z-10 flex w-full max-w-2xl flex-col items-start gap-4">
		<h1
			class="text-4xl leading-tight font-bold text-balance sm:text-5xl
			md:text-6xl"
		>
			{m.hero_title()}
		</h1>
		<p class="text-xl font-medium text-balance sm:text-2xl">
			{m.hero_subtitle()}
		</p>
		<p class="max-w-prose text-lg text-pretty text-muted-foreground">
			{m.hero_description()}
		</p>
		<div class="mt-2 flex flex-wrap gap-4">
			<Button href="#get-in-touch" size="lg" class="text-base" variant="default"
				>{m.hero_get_in_touch()}</Button
			>
			<Button href="/blog" size="lg" class="text-base" variant="secondary"
				>{m.hero_read_blog()}</Button
			>
		</div>
	</div>
</section>
