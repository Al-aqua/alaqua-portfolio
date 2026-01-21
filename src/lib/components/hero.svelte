<script lang="ts">
	import { ArrowBigDown } from '@lucide/svelte';
</script>

<main class="flex h-svh flex-col items-center justify-between px-28 py-48">
	<div>
		<h1 class="pb-2 font-family-heading text-5xl font-bold text-text">Mohammad Al-aqua</h1>
		<p class="font-family-body text-2xl text-text">Teacher by day, coder by night.</p>
		<p class="font-family-body text-2xl text-text">
			I craft full-stack solutions that are as easy to maintain as they are to explain.
		</p>
		<div class="mt-6 flex gap-4">
			<a
				href="/"
				class="rounded bg-primary px-4 py-2 text-text transition-all hover:-translate-y-0.5 hover:bg-gray-500/20 active:scale-98"
				>Get in touch</a
			>
			<a
				href="/"
				class="rounded bg-secondary px-4 py-2 text-text shadow transition-all hover:-translate-y-0.5 hover:bg-gray-500/20 active:scale-98"
				>Read my blog</a
			>
		</div>
	</div>

	<div
		class="rounded-full bg-primary p-4 shadow transition-all hover:-translate-y-1 active:scale-95"
	>
		<ArrowBigDown class="go-down-animation text-text" />
	</div>
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
	:global(.go-down-animation:hover) {
		animation-play-state: paused;
	}
</style>
