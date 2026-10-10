<script lang="ts">
	import { Button } from './ui/button';
	import Languages from '@lucide/svelte/icons/languages';
	import { setLocale, getLocale } from '#lib/paraglide/runtime.js';

	let locale = $state(getLocale());
</script>

<Button
	variant="ghost"
	size="default"
	class="gap-1"
	onclick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
>
	<Languages class="h-4 w-4" />

	<span class="relative inline-flex h-5 w-6 items-center justify-center">
		<span
			class="absolute transition-all duration-300 ease-in-out
			{locale === 'ar' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}"
		>
			EN
		</span>

		<span
			class="absolute transition-all duration-300 ease-in-out
			{locale === 'ar' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}"
		>
			AR
		</span>
	</span>

	<span class="sr-only">Toggle Locale</span>
</Button>
