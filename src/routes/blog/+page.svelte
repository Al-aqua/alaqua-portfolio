<script lang="ts">
	import { CircleOff } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index';
</script>

<section class="flex min-h-screen w-full flex-col items-center justify-center gap-2">
	<CircleOff class="h-12 w-12" />
	<h2 class="text-xl font-bold md:text-3xl">Coming soon!</h2>
	<Button href="/" variant="outline" class="mt-2">Go back home</Button>
</section>
