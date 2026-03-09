<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { mode, setMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	async function handleToggle(event: MouseEvent) {
		// 1. Check for browser support
		if (!document.startViewTransition) {
			setMode(mode.current === 'dark' ? 'light' : 'dark');
			return;
		}

		// 2. Get click coordinates
		const x = event.clientX;
		const y = event.clientY;
		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

		// 3. Create the transition
		const transition = document.startViewTransition(async () => {
			setMode(mode.current === 'dark' ? 'light' : 'dark');
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		// 4. Animate the NEW layer (which is always on top)
		transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
				},
				{
					duration: 450,
					easing: 'ease-in-out',
					// Always target the NEW state so it wipes over the old one
					pseudoElement: '::view-transition-new(root)'
				}
			);
		});
	}
</script>

<Button onclick={handleToggle} variant="ghost" size="icon" class="relative rounded-full">
	<SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
	/>
	<MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
	/>
	<span class="sr-only">Toggle theme</span>
</Button>
