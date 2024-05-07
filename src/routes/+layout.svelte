<script lang="ts">
	import IconBrandTwitterFilled from '@tabler/icons-svelte/IconBrandTwitterFilled.svelte';
	import IconBrandCodepen from '@tabler/icons-svelte/IconBrandCodepen.svelte';
	import IconBrandGithub from '@tabler/icons-svelte/IconBrandGithub.svelte';
	import IconBrandEnvato from '@tabler/icons-svelte/IconBrandEnvato.svelte';
	import IconSend from '@tabler/icons-svelte/IconSend.svelte';
	import './index.scss';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import Waves from '$lib/Waves/Waves.svelte';

	let isLoaded = false;

	let cursorElement: HTMLDivElement;

	const highlightCursor = () => {
		cursorElement.classList.add('active');
	};
	const unHighlightCursor = () => {
		cursorElement.classList.remove('active');
	};
	const setCursorCoords = (e: MouseEvent) => {
		let x = e.pageX;
		let y = e.pageY;
		const tl = gsap.timeline();
		tl.to(cursorElement, {
			x: x,
			y: y,
			duration: 0.5
		});
		tl.to(cursorElement, {
			opacity: 0.5
		});
	};

	onMount(() => {
		isLoaded = true;
	});
</script>

<svelte:window on:mousemove={setCursorCoords} />
<div class="site" class:loading={!isLoaded}>
	<header class="header">
		<div class="logo">
			<svg viewBox="0 0 260 219" xmlns="http://www.w3.org/2000/svg">
				<path d="M95.302,58.317l96.373,160.11l-191.675,-0.107l95.302,-160.003Z" />
				<path d="M100.252,49.812l29.711,-49.812l130.037,218.465l-58,-0l-101.748,-168.653Z" />
			</svg>
		</div>
		<a
			class="btn-icon btn-icon_mail"
			href="mailto:alexilin83@gmail.com"
			title="Mail me"
			on:mouseover={highlightCursor}
			on:mouseout={unHighlightCursor}
		>
			<IconSend />
		</a>
	</header>
	<main class="content">
		<slot></slot>
	</main>
	<footer class="footer">
		<div class="container">
			<ul class="social social_main" on:mouseover={highlightCursor} on:mouseout={unHighlightCursor}>
				<li class="social__item">
					<a class="social__link" href="https://twitter.com/alexilin" title="Twitter">
						<IconBrandTwitterFilled size={16} />
					</a>
				</li>
				<li class="social__item">
					<a class="social__link" href="https://codepen.io/alexilin" title="Codepen">
						<IconBrandCodepen size={16} />
					</a>
				</li>
				<li class="social__item">
					<a class="social__link" href="https://github.com/alexilin83" title="Github">
						<IconBrandGithub size={16} />
					</a>
				</li>
				<li class="social__item">
					<a class="social__link" href="https://themeforest.net/user/themepatico" title="Envato">
						<IconBrandEnvato size={16} />
					</a>
				</li>
			</ul>
		</div>
	</footer>
	<Waves />
	<div id="cursor" bind:this={cursorElement}></div>
</div>
