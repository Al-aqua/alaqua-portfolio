<script lang="ts">
	import { gsap } from 'gsap';
	import { cn } from '#lib/utils.js';

	type Gap = { row: number; col: number };
	type Duration = { enter: number; leave: number };

	type Props = {
		gridSize?: number;
		cubeSize?: number;
		maxAngle?: number;
		radius?: number;
		easing?: string;
		duration?: Duration;
		cellGap?: number | Gap;
		borderStyle?: string;
		faceColor?: string;
		shadow?: boolean | string;
		autoAnimate?: boolean;
		rippleOnClick?: boolean;
		rippleColor?: string;
		rippleSpeed?: number;
		class?: string;
	};

	let {
		gridSize = 10,
		cubeSize,
		maxAngle = 45,
		radius = 3,
		easing = 'power3.out',
		duration = { enter: 0.3, leave: 0.6 },
		cellGap,
		borderStyle = '1px solid #fff',
		faceColor = '#120F17',
		shadow = false,
		autoAnimate = true,
		rippleOnClick = true,
		rippleColor = '#fff',
		rippleSpeed = 2,
		class: className = ''
	}: Props = $props();

	let scene: HTMLDivElement;

	const colGap = $derived(
		typeof cellGap === 'number'
			? `${cellGap}px`
			: cellGap && (cellGap as Gap).col !== undefined
				? `${(cellGap as Gap).col}px`
				: '5%'
	);
	const rowGap = $derived(
		typeof cellGap === 'number'
			? `${cellGap}px`
			: cellGap && (cellGap as Gap).row !== undefined
				? `${(cellGap as Gap).row}px`
				: '5%'
	);

	function tiltAt(rowCenter: number, colCenter: number, reduced = false) {
		if (!scene) return;
		scene.querySelectorAll<HTMLDivElement>('.cube').forEach((cube) => {
			const r = +cube.dataset.row!;
			const c = +cube.dataset.col!;
			const dist = Math.hypot(r - rowCenter, c - colCenter);
			if (dist <= radius) {
				const pct = 1 - dist / radius;
				const angle = pct * maxAngle;
				if (reduced) {
					gsap.set(cube, { rotateX: -angle, rotateY: angle });
				} else {
					gsap.to(cube, {
						duration: duration.enter,
						ease: easing,
						overwrite: true,
						rotateX: -angle,
						rotateY: angle
					});
				}
			} else if (reduced) {
				gsap.set(cube, { rotateX: 0, rotateY: 0 });
			} else {
				gsap.to(cube, {
					duration: duration.leave,
					ease: 'power3.out',
					overwrite: true,
					rotateX: 0,
					rotateY: 0
				});
			}
		});
	}

	function resetAll(reduced = false) {
		if (!scene) return;
		if (reduced) {
			gsap.set(scene.querySelectorAll<HTMLDivElement>('.cube'), {
				rotateX: 0,
				rotateY: 0
			});
			return;
		}
		scene.querySelectorAll<HTMLDivElement>('.cube').forEach((cube) =>
			gsap.to(cube, {
				duration: duration.leave,
				rotateX: 0,
				rotateY: 0,
				ease: 'power3.out'
			})
		);
	}

	$effect(() => {
		if (!scene) return;
		let raf: number | null = null;
		let idleTimer: ReturnType<typeof setTimeout> | null = null;
		let userActive = false;
		let simRAF: number | null = null;
		let reduced = false;

		function startAuto() {
			if (!autoAnimate || simRAF !== null) return;
			let pos = { x: Math.random() * gridSize, y: Math.random() * gridSize };
			let tgt = { x: Math.random() * gridSize, y: Math.random() * gridSize };
			const speed = 0.02;
			const loop = () => {
				if (!userActive) {
					pos.x += (tgt.x - pos.x) * speed;
					pos.y += (tgt.y - pos.y) * speed;
					tiltAt(pos.y, pos.x);
					if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
						tgt = { x: Math.random() * gridSize, y: Math.random() * gridSize };
					}
				}
				simRAF = requestAnimationFrame(loop);
			};
			simRAF = requestAnimationFrame(loop);
		}

		function stopAuto() {
			if (simRAF !== null) cancelAnimationFrame(simRAF);
			simRAF = null;
		}

		const onPointerMove = (e: PointerEvent) => {
			userActive = true;
			if (idleTimer) clearTimeout(idleTimer);
			const rect = scene.getBoundingClientRect();
			const cellW = rect.width / gridSize;
			const cellH = rect.height / gridSize;
			const colCenter = (e.clientX - rect.left) / cellW;
			const rowCenter = (e.clientY - rect.top) / cellH;
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => tiltAt(rowCenter, colCenter, reduced));
			idleTimer = setTimeout(() => (userActive = false), 3000);
		};

		const onTouchMove = (e: TouchEvent) => {
			e.preventDefault();
			userActive = true;
			if (idleTimer) clearTimeout(idleTimer);
			const rect = scene.getBoundingClientRect();
			const cellW = rect.width / gridSize;
			const cellH = rect.height / gridSize;
			const t = e.touches[0];
			const colCenter = (t.clientX - rect.left) / cellW;
			const rowCenter = (t.clientY - rect.top) / cellH;
			if (raf) cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => tiltAt(rowCenter, colCenter, reduced));
			idleTimer = setTimeout(() => (userActive = false), 3000);
		};

		const onTouchStart = () => {
			userActive = true;
		};
		const onTouchEnd = () => resetAll(reduced);
		const onPointerLeave = () => resetAll(reduced);

		const onClick = (e: MouseEvent | TouchEvent) => {
			if (!rippleOnClick || reduced || !scene) return;
			const rect = scene.getBoundingClientRect();
			const cellW = rect.width / gridSize;
			const cellH = rect.height / gridSize;
			const cx =
				(e as MouseEvent).clientX ??
				((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
			const cy =
				(e as MouseEvent).clientY ??
				((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);
			const colHit = Math.floor((cx - rect.left) / cellW);
			const rowHit = Math.floor((cy - rect.top) / cellH);

			const baseRingDelay = 0.15;
			const baseAnimDur = 0.3;
			const baseHold = 0.6;
			const spreadDelay = baseRingDelay / rippleSpeed;
			const animDuration = baseAnimDur / rippleSpeed;
			const holdTime = baseHold / rippleSpeed;

			const rings: Record<number, HTMLDivElement[]> = {};
			scene.querySelectorAll<HTMLDivElement>('.cube').forEach((cube) => {
				const r = +cube.dataset.row!;
				const c = +cube.dataset.col!;
				const ring = Math.round(Math.hypot(r - rowHit, c - colHit));
				(rings[ring] ||= []).push(cube);
			});

			Object.keys(rings)
				.map(Number)
				.sort((a, b) => a - b)
				.forEach((ring) => {
					const delay = ring * spreadDelay;
					const faces = rings[ring].flatMap((cube) =>
						Array.from(cube.querySelectorAll<HTMLElement>('.cube-face'))
					);
					gsap.to(faces, {
						backgroundColor: rippleColor,
						duration: animDuration,
						delay,
						ease: 'power3.out'
					});
					gsap.to(faces, {
						backgroundColor: faceColor,
						duration: animDuration,
						delay: delay + animDuration + holdTime,
						ease: 'power3.out'
					});
				});
		};

		scene.addEventListener('pointermove', onPointerMove);
		scene.addEventListener('pointerleave', onPointerLeave);
		scene.addEventListener('click', onClick);
		scene.addEventListener('touchmove', onTouchMove, { passive: false });
		scene.addEventListener('touchstart', onTouchStart, { passive: true });
		scene.addEventListener('touchend', onTouchEnd, { passive: true });

		// Respect reduced-motion: no ambient motion or click ripple, tilt stays instant.
		const mm = gsap.matchMedia();

		mm.add('(prefers-reduced-motion: reduce)', () => {
			reduced = true;
			stopAuto();
			resetAll(true);

			return () => {
				reduced = false;
			};
		});

		mm.add('(prefers-reduced-motion: no-preference)', () => {
			reduced = false;
			startAuto();

			return () => {
				stopAuto();
			};
		});

		return () => {
			scene.removeEventListener('pointermove', onPointerMove);
			scene.removeEventListener('pointerleave', onPointerLeave);
			scene.removeEventListener('click', onClick);
			scene.removeEventListener('touchmove', onTouchMove);
			scene.removeEventListener('touchstart', onTouchStart);
			scene.removeEventListener('touchend', onTouchEnd);
			if (raf) cancelAnimationFrame(raf);
			stopAuto();
			if (idleTimer) clearTimeout(idleTimer);
			mm.revert();
		};
	});

	const cells = $derived(Array.from({ length: gridSize }));
	const wrapStyleParts = $derived.by(() => {
		const parts = [
			`--cube-face-border:${borderStyle}`,
			`--cube-face-bg:${faceColor}`,
			`--cube-face-shadow:${shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none'}`
		];
		if (cubeSize) {
			parts.push(`width:${gridSize * cubeSize}px`);
			parts.push(`height:${gridSize * cubeSize}px`);
		}
		return parts.join(';');
	});
	const sceneStyle = $derived(
		`grid-template-columns:${cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`};grid-template-rows:${cubeSize ? `repeat(${gridSize}, ${cubeSize}px)` : `repeat(${gridSize}, 1fr)`};column-gap:${colGap};row-gap:${rowGap};perspective:99999999px;grid-auto-rows:1fr;`
	);
</script>

<div class={cn('relative aspect-square w-1/2 max-md:w-11/12', className)} style={wrapStyleParts}>
	<div bind:this={scene} class="grid h-full w-full" style={sceneStyle}>
		{#each cells as _r, r (r)}
			{#each cells as _c, c (c)}
				<div
					class="cube relative aspect-square h-full w-full"
					style="transform-style:preserve-3d;"
					data-row={r}
					data-col={c}
				>
					<span class="pointer-events-none absolute -inset-9"></span>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:translateY(-50%) rotateX(90deg);"
					></div>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:translateY(50%) rotateX(-90deg);"
					></div>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:translateX(-50%) rotateY(-90deg);"
					></div>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:translateX(50%) rotateY(90deg);"
					></div>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:rotateY(-90deg) translateX(50%) rotateY(90deg);"
					></div>
					<div
						class="cube-face absolute inset-0 flex items-center justify-center"
						style="background:var(--cube-face-bg);border:var(--cube-face-border);box-shadow:var(--cube-face-shadow);transform:rotateY(90deg) translateX(-50%) rotateY(-90deg);"
					></div>
				</div>
			{/each}
		{/each}
	</div>
</div>
