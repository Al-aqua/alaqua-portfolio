<script lang="ts">
	import ThemeToggle from './theme_toggle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<nav class="fixed h-16 w-full bg-background">
	<div class="flex h-full w-full items-center justify-around">
		<ul class="flex gap-8 md:gap-28">
			<li>
				<Button
					href="/"
					class="text-text text-md font-family-heading transition-all hover:-translate-y-0.5 active:scale-98"
					variant="ghost"
					role="link"
					aria-label="Home - Al-aqua portfolio"
				>
					Al-aqua
				</Button>
			</li>
			<li>
				<Button
					href="#behind-the-code"
					class="text-text text-md font-family-heading transition-all hover:-translate-y-0.5 active:scale-98"
					variant="ghost"
					role="link"
					aria-label="Behind the Code section"
				>
					Behind the Code
				</Button>
			</li>
		</ul>
		<div></div>
		<div>
			<ThemeToggle />
		</div>
	</div>
</nav>
