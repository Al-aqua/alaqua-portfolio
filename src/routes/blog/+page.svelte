<script lang="ts">
	import * as Empty from '#lib/components/ui/empty/index.js';
	import { Button } from '#lib/components/ui/button/index.js';
	import { ArrowLeft, FileText } from '@lucide/svelte';
	import { m } from '#lib/paraglide/messages.js';
</script>

<main class="flex min-h-screen items-center justify-center p-4 pt-16">
	<Empty.Root class="w-full max-w-md border border-dashed p-10">
		<Empty.Header class="gap-3">
			<Empty.Media variant="icon" class="size-14 [&_svg:not([class*='size-'])]:size-6">
				<FileText />
			</Empty.Media>
			<Empty.Title class="text-xl">{m.blog_empty_title()}</Empty.Title>
			<Empty.Description class="text-base">{m.blog_empty_description()}</Empty.Description>
		</Empty.Header>
		<Empty.Content>
			<Button href="/" variant="outline" size="lg">
				<ArrowLeft data-icon="inline-start" />
				{m.blog_back_home()}
			</Button>
		</Empty.Content>
	</Empty.Root>
</main>
