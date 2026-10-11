<script lang="ts">
	import type { NavItem } from '#lib/types.ts';
	import { Button } from './ui/button';
	import { Mail, MessageCircle, Terminal } from '@lucide/svelte';
	import { m } from '#lib/paraglide/messages.js';
	import { siteName } from '#lib/site.js';

	const year = new Date().getFullYear();

	const links: NavItem[] = [
		{
			name: m.navbar_behind_the_code(),
			href: '/#behind-the-code',
			ariaLabel: 'Behind the Code section'
		},
		{ name: m.navbar_get_in_touch(), href: '/#get-in-touch', ariaLabel: 'Get in touch section' },
		{ name: m.navbar_blog(), href: '/blog', ariaLabel: 'Blog section' }
	];
</script>

<footer class="border-t bg-background">
	<div
		class="mx-auto flex w-full max-w-4xl flex-col gap-10 px-8 py-12
		md:flex-row md:items-start md:justify-between md:px-16 lg:px-28"
	>
		<div class="flex flex-col gap-3">
			<a
				href="/"
				class="flex w-fit items-center gap-2 font-heading text-lg font-medium
				transition-colors hover:text-foreground"
				aria-label="Home - Al-aqua portfolio"
			>
				<Terminal class="size-5" />
				Al-aqua
			</a>
			<p class="max-w-xs text-sm text-muted-foreground">{m.footer_tagline()}</p>
		</div>

		<div class="flex flex-col gap-8 sm:flex-row sm:gap-16">
			<nav aria-label={m.footer_nav_label()}>
				<ul class="flex flex-col gap-2">
					{#each links as link (link.name)}
						<li>
							<a
								href={link.href}
								class="text-sm text-muted-foreground transition-colors
								hover:text-foreground"
								aria-label={link.ariaLabel}
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<ul class="flex items-center gap-1">
				<li>
					<Button
						href="https://github.com/Al-aqua"
						target="_blank"
						rel="noopener noreferrer"
						variant="ghost"
						size="icon"
						aria-label="GitHub"
					>
						<svg
							class="size-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path
								d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
							/>
						</svg>
					</Button>
				</li>
				<li>
					<Button
						href="https://linkedin.com/in/mohammad-al-aqua-b3987b294"
						target="_blank"
						rel="noopener noreferrer"
						variant="ghost"
						size="icon"
						aria-label="LinkedIn"
					>
						<svg
							class="size-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
							focusable="false"
						>
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
							/>
						</svg>
					</Button>
				</li>
				<li>
					<Button href="mailto:mohammad@alaqua.dev" variant="ghost" size="icon" aria-label="Email">
						<Mail />
					</Button>
				</li>
				<li>
					<Button
						href="https://wa.me/+967772550218"
						target="_blank"
						rel="noopener noreferrer"
						variant="ghost"
						size="icon"
						aria-label="WhatsApp"
					>
						<MessageCircle />
					</Button>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t">
		<p class="mx-auto w-full max-w-4xl px-8 py-4 text-xs text-muted-foreground md:px-16 lg:px-28">
			&copy; {year}
			{siteName}
			{m.footer_rights()}
		</p>
	</div>
</footer>
