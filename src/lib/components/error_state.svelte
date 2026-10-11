<script lang="ts">
	import * as Empty from '#lib/components/ui/empty/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { ArrowLeft } from '@lucide/svelte';
	import { m } from '#lib/paraglide/messages.js';

	interface Props {
		status?: number;
		title?: string;
		description?: string;
	}

	let { status = 500, title, description }: Props = $props();

	const resolvedTitle = $derived(
		title ?? (status === 404 ? m.error_not_found_title() : m.error_title())
	);
	const resolvedDescription = $derived(
		description ?? (status === 404 ? m.error_not_found_description() : m.error_description())
	);
</script>

<main class="flex min-h-screen items-center justify-center p-4 pt-16">
	<Empty.Root class="w-full max-w-md border border-dashed p-10">
		<Empty.Header class="gap-3">
			<p
				class="font-heading text-8xl leading-none font-bold tracking-tight text-muted-foreground/40 md:text-9xl"
			>
				{status}
			</p>
			<Empty.Title class="text-xl">{resolvedTitle}</Empty.Title>
			<Empty.Description class="text-base">{resolvedDescription}</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button href="/" variant="outline" size="lg">
				<ArrowLeft data-icon="inline-start" />
				{m.error_back_home()}
			</Button>
		</Empty.Content>
	</Empty.Root>
</main>
