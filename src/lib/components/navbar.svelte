<script lang="ts">
	import ThemeToggle from './theme_toggle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<nav class="fixed h-16 w-full bg-background">
	<div class="flex h-full w-full items-center justify-around">
		<div class="flex gap-8 md:gap-28">
			<Button
				href="/"
				class="text-text text-md font-family-heading transition-all hover:-translate-y-0.5 active:scale-98"
				variant="ghost"
			>
				Al-aqua
			</Button>
			<div>
				<Button
					href="#behind-the-code"
					class="text-text text-md font-family-heading transition-all hover:-translate-y-0.5 active:scale-98"
					variant="ghost"
				>
					Behind the Code
				</Button>
			</div>
		</div>
		<div></div>
		<div>
			<ThemeToggle />
		</div>
	</div>
</nav>
