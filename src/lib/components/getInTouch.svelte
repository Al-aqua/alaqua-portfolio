<script lang="ts">
	import ScrollButton from './scrollButton.svelte';
	import { Mail, Github, Linkedin, MessageCircle } from '@lucide/svelte';
</script>

<section
	id="get-in-touch"
	class="flex h-svh flex-col items-center justify-between px-8 py-28 md:px-16 lg:px-28 lg:py-48"
>
	<div class="flex w-full max-w-4xl flex-col gap-8">
		<div class="flex items-baseline gap-1">
			<h2 class="pb-2 text-3xl font-bold sm:text-4xl md:text-5xl">Get in Touch</h2>
		</div>

		<p class="text-lg sm:text-xl md:text-2xl">
			Have a project in mind? Need a security audit? Want to collaborate on something interesting?
			Let's talk.
		</p>

		<div class="flex flex-col gap-4 text-lg sm:text-xl">
			<a href="mailto:mohammad@alaqua.dev" class="group flex items-center gap-3 transition-colors">
				<span class="text-2xl"><Mail /></span>
				<span class="border-b border-transparent group-hover:border-foreground">
					mohammad@alaqua.dev
				</span>
			</a>

			<a
				href="https://github.com/Al-aqua"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-center gap-3 transition-colors"
			>
				<span class="text-2xl"><Github /></span>
				<span class="border-b border-transparent group-hover:border-foreground"> GitHub </span>
			</a>

			<a
				href="https://linkedin.com/in/mohammad-al-aqua-b3987b294"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-center gap-3 transition-colors"
			>
				<span class="text-2xl"><Linkedin /></span>
				<span class="border-b border-transparent group-hover:border-foreground"> LinkedIn </span>
			</a>

			<a
				href="https://wa.me/+967772550218"
				target="_blank"
				rel="noopener noreferrer"
				class="group flex items-center gap-3 transition-colors"
			>
				<span class="text-2xl"><MessageCircle /></span>
				<span class="border-b border-transparent group-hover:border-foreground"> WhatsApp </span>
			</a>
		</div>

		<p class="mt-4 text-base opacity-70 sm:text-lg">
			Response time: Usually within 24 hours. If it's about teaching or open-source, even faster.
		</p>
	</div>

	<div class="flex w-full flex-col items-center">
		<ScrollButton />
	</div>
</section>
