<script lang="ts">
	import ThemeToggle from './theme_toggle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Terminal } from '@lucide/svelte';
	import type { NavItem } from '$lib/types';
	export let links: NavItem[];
</script>

<nav class="fixed z-50 h-16 w-full bg-background">
	<div class="flex h-full w-full items-center justify-around">
		<ul class="flex gap-8 md:gap-28">
			<li>
				<Button
					href="/"
					class="text-md font-family-heading transition-all"
					variant="default"
					role="link"
					aria-label="Home - Al-aqua portfolio"
				>
					<Terminal /> Al-aqua
				</Button>
			</li>
			<div class="flex gap-8">
				{#each links as link (link.name)}
					<li>
						<Button
							href={link.href}
							class="text-md font-family-heading"
							variant="ghost"
							role="link"
							aria-label={link.ariaLabel}
						>
							{link.name}
						</Button>
					</li>
				{/each}
			</div>
		</ul>
		<div></div>
		<div>
			<ThemeToggle />
		</div>
	</div>
</nav>
