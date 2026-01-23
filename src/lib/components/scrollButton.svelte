<script lang="ts">
	import { ArrowBigDown } from '@lucide/svelte';

	function scrollDown() {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	}
</script>

<button
	aria-label="Scroll to next section"
	class="scroll-indicator rounded-full bg-accent p-4 shadow transition-all hover:-translate-y-1 active:scale-95"
	onclick={scrollDown}
>
	<ArrowBigDown class="go-down-animation text-accent-foreground" />
	<span class="sr-only">Scroll to the next section</span>
</button>

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
