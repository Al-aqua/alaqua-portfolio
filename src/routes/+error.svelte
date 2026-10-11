<script lang="ts">
	import { page } from '$app/state';
	import Seo from '#lib/components/seo.svelte';
	import ErrorState from '#lib/components/error_state.svelte';
	import { m } from '#lib/paraglide/messages.js';

	const status = $derived(page.status);
	const title = $derived(status === 404 ? m.error_not_found_title() : m.error_title());
</script>

<Seo {title} noindex />

<ErrorState {status} />
