<script lang="ts">
	import { ArrowBigDown } from '@lucide/svelte';

	interface Props {
		link: string;
	}
	let { link }: Props = $props();
</script>

<a
	aria-label="Scroll to next section"
	class="scroll-indicator rounded-full bg-accent p-4 shadow transition-all hover:-translate-y-1 active:scale-95"
	href={link}
>
	<ArrowBigDown class="go-down-animation text-accent-foreground" />
	<span class="sr-only">Scroll to the next section</span>
</a>

<style>
	@keyframes bounce-down {
		0%,
		10%,
		25%,
		40%,
		50%,
		100% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(-10px);
		}
		30% {
			transform: translateY(-5px);
		}
	}
	:global(.go-down-animation) {
		animation: bounce-down 3s ease-in-out infinite;
	}
	:global(.scroll-indicator:hover .go-down-animation) {
		animation-play-state: paused;
	}
</style>
