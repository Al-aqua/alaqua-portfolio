<script>
	import { Button } from './ui/button';
	import { m } from '#lib/paraglide/messages.js';
</script>

<section
	class="flex min-h-svh flex-col items-start justify-between px-6 py-24 sm:px-10 md:px-28 md:py-48"
	aria-label="Hero section"
>
	<div class="flex w-full max-w-2xl flex-col items-start gap-4">
		<h1 class="text-4xl leading-tight font-bold text-balance sm:text-5xl md:text-6xl">
			{m.hero_title()}
		</h1>
		<p class="text-xl font-medium text-balance sm:text-2xl">{m.hero_subtitle()}</p>
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
