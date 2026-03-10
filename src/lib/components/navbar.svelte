<script lang="ts">
	import ThemeToggle from './theme_toggle.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Terminal, Menu, X } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import type { NavItem } from '$lib/types';

	interface props {
		links?: NavItem[];
	}
	let { links = [] }: props = $props();

	let isMenuOpen = $state(false);
</script>

<nav class="fixed z-50 h-16 w-full border-b bg-background">
	<div class="flex h-full w-full items-center justify-between p-4 md:justify-around">
		<div class="flex gap-8 md:gap-28">
			<ul class="flex items-center gap-2">
				{#if links.length > 0}
					<li class="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							onclick={() => (isMenuOpen = !isMenuOpen)}
							aria-label="Menu"
						>
							{#if isMenuOpen}
								<X />
							{:else}
								<Menu />
							{/if}
						</Button>
					</li>
				{/if}
				<li>
					<Button
						href="/"
						class="text-md font-family-heading transition-all hover:text-foreground"
						variant="outline"
						role="link"
						aria-label="Home - Al-aqua portfolio"
					>
						<Terminal /> Al-aqua
					</Button>
				</li>
			</ul>

			<ul class="hidden gap-2 md:flex">
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
			</ul>
		</div>

		<div>
			<ThemeToggle />
		</div>
	</div>

	{#if isMenuOpen && links.length > 0}
		<ul transition:slide class="flex flex-col gap-2 border-b bg-background p-4 md:hidden">
			{#each links as link (link.name)}
				<li>
					<Button
						href={link.href}
						variant="ghost"
						class="w-full justify-start"
						role="link"
						onclick={() => (isMenuOpen = false)}
					>
						{link.name}
					</Button>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
