<script lang="ts">
	import { gsap } from 'gsap';
	import { inview } from 'svelte-inview';
	import type { Snippet } from 'svelte';
	import { cn } from '#lib/utils.js';

	type Props = {
		width?: string;
		boxColor?: string;
		duration?: number;
		class?: string;
		children?: Snippet;
	};

	let {
		width = 'fit-content',
		boxColor = '#5046e6',
		duration = 0.5,
		class: className = '',
		children
	}: Props = $props();

	// GSAP equivalents of the two motion "controls"
	let contentTl: gsap.core.Timeline | undefined;
	let boxTl: gsap.core.Timeline | undefined;

	// Build the paused timelines once the wrapper is mounted (re-runs if `duration` changes).
	function reveal(node: HTMLElement) {
		const contentEl = node.querySelector<HTMLElement>('[data-reveal-content]')!;
		const boxEl = node.querySelector<HTMLElement>('[data-reveal-box]')!;
		const mm = gsap.matchMedia();

		// Respect reduced-motion: just show the content, skip the reveal.
		mm.add('(prefers-reduced-motion: reduce)', () => {
			gsap.set(contentEl, { autoAlpha: 1, y: 0 });
			gsap.set(boxEl, { left: '100%' });

			return () => {
				gsap.set(contentEl, { clearProps: 'all' });
				gsap.set(boxEl, { clearProps: 'all' });
			};
		});

		// main content: hidden { opacity: 0, y: 75 } -> visible { opacity: 1, y: 0 }
		// colored panel: hidden { left: 0 } -> visible { left: 100% }
		mm.add('(prefers-reduced-motion: no-preference)', () => {
			contentTl = gsap
				.timeline({ paused: true })
				.fromTo(
					contentEl,
					{ autoAlpha: 0, y: 75 },
					{ autoAlpha: 1, y: 0, duration, delay: 0.25, ease: 'power3.out' }
				);

			boxTl = gsap
				.timeline({ paused: true })
				.fromTo(boxEl, { left: '0%' }, { left: '100%', duration, ease: 'power2.in' });

			return () => {
				contentTl?.kill();
				boxTl?.kill();
				contentTl = undefined;
				boxTl = undefined;
			};
		});

		return () => mm.revert();
	}

	function viewEnter() {
		contentTl?.play();
		boxTl?.play();
	}

	function viewLeave() {
		contentTl?.reverse();
		boxTl?.reverse();
	}
</script>

<div
	class={cn('relative overflow-hidden', className)}
	style="width: {width}"
	use:inview
	oninview_enter={viewEnter}
	oninview_leave={viewLeave}
	{@attach reveal}
>
	<div data-reveal-content class="opacity-0">
		{@render children?.()}
	</div>

	<div
		data-reveal-box
		style="background: {boxColor}"
		class="absolute top-1 right-0 bottom-1 left-0 z-40"
	></div>
</div>
