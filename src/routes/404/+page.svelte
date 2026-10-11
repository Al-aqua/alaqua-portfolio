<script lang="ts">
	import Seo from '#lib/components/seo.svelte';
	import ErrorState from '#lib/components/error_state.svelte';
	import { m } from '#lib/paraglide/messages.js';
</script>

<Seo title={m.error_not_found_title()} noindex />

<ErrorState status={404} />
