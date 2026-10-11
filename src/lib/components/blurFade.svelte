<script lang="ts">
	import { gsap } from 'gsap';
	import { inview } from 'svelte-inview';
	import type { Snippet } from 'svelte';
	import { cn } from '#lib/utils.js';

	type Props = {
		delay?: number;
		duration?: number;
		yOffset?: number;
		blur?: string;
		class?: string;
		children?: Snippet;
	};

	let {
		delay = 0,
		duration = 0.4,
		yOffset = 6,
		blur = '6px',
		class: className = '',
		children
	}: Props = $props();

	let tl: gsap.core.Timeline | undefined;

	// Build the paused timeline once the wrapper is mounted (re-runs if props change).
	function reveal(node: HTMLElement) {
		const mm = gsap.matchMedia();

		// Respect reduced-motion: just show the content, skip the reveal.
		mm.add('(prefers-reduced-motion: reduce)', () => {
			gsap.set(node, { autoAlpha: 1, y: 0, filter: 'blur(0px)' });

			return () => {
				gsap.set(node, { clearProps: 'all' });
			};
		});

		// hidden { opacity: 0, y: yOffset, blur(Npx) } -> visible { opacity: 1, y: 0, blur(0px) }
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			tl = gsap
				.timeline({ paused: true })
				.fromTo(
					node,
					{ autoAlpha: 0, y: yOffset, filter: `blur(${blur})` },
					{ autoAlpha: 1, y: 0, filter: 'blur(0px)', duration, delay, ease: 'power3.out' }
				);

			return () => {
				tl?.kill();
				tl = undefined;
			};
		});

		return () => mm.revert();
	}

	function viewEnter() {
		tl?.play();
	}

	function viewLeave() {
		tl?.reverse();
	}
</script>

<div
	class={cn('opacity-0', className)}
	use:inview
	oninview_enter={viewEnter}
	oninview_leave={viewLeave}
	{@attach reveal}
>
	{@render children?.()}
</div>
