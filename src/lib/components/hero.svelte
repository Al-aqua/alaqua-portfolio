<script lang="ts">
	import { ArrowBigDown } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	function scrollDown() {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	}
</script>

<main class="flex h-svh flex-col items-center justify-between px-16 py-28 md:px-28 md:py-48">
	<div>
		<h1 class="text-text pb-2 font-family-heading text-5xl font-bold">Mohammad Al-aqua</h1>
		<p class="text-text font-family-body text-2xl">Teacher by day, coder by night.</p>
		<p class="text-text font-family-body text-2xl">
			I craft full-stack solutions that are as easy to maintain as they are to explain.
		</p>
		<div class="mt-6 flex gap-4">
			<Button
				href="/"
				class="text-text text-md transition-all hover:-translate-y-0.5 active:scale-98"
				variant="default">Get in touch</Button
			>
			<Button
				href="/"
				class="text-text text-md transition-all hover:-translate-y-0.5 active:scale-98"
				variant="secondary">Read my blog</Button
			>
		</div>
	</div>

	<button
		class="scroll-indicator rounded-full bg-primary p-4 shadow transition-all hover:-translate-y-1 active:scale-95"
		onclick={scrollDown}
	>
		<ArrowBigDown class="go-down-animation text-text" />
	</button>
</main>

<style>
	@keyframes bounce-down {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
	:global(.go-down-animation) {
		animation: bounce-down 1.5s ease-in-out infinite;
	}
	:global(.scroll-indicator:hover .go-down-animation) {
		animation-play-state: paused;
	}
</style>
