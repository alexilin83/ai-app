<script lang="ts">
	import {
		IconBrandTwitterFilled,
		IconBrandCodepen,
		IconBrandGithub,
		IconBrandEnvato,
		IconSend
	} from '@tabler/icons-svelte';
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
			duration: .5
		});
		tl.to(cursorElement, {
			opacity: .5
		});
	};

	onMount(() => {
		isLoaded = true;
	});
</script>

<svelte:window on:mousemove={setCursorCoords} />
<div class="site" class:loaded={isLoaded}>
	<header class="header">
		<div class="logo">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 51">
				<path d="M0 51, 21 15, 43.5 52 Z" />
				<path d="M23 12, 30 1, 60 51, 47 51 Z" />
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
			<ul class="social social_main">
				<li class="social__item">
					<a
						class="social__link"
						href="https://twitter.com/alexilin"
						title="Twitter"
						on:mouseover={highlightCursor}
						on:mouseout={unHighlightCursor}
					>
						<IconBrandTwitterFilled size={16} />
					</a>
				</li>
				<li class="social__item">
					<a
						class="social__link"
						href="https://codepen.io/alexilin"
						title="Codepen"
						on:mouseover={highlightCursor}
						on:mouseout={unHighlightCursor}
					>
						<IconBrandCodepen size={16} />
					</a>
				</li>
				<li class="social__item">
					<a
						class="social__link"
						href="https://github.com/alexilin83"
						title="Github"
						on:mouseover={highlightCursor}
						on:mouseout={unHighlightCursor}
					>
						<IconBrandGithub size={16} />
					</a>
				</li>
				<li class="social__item">
					<a
						class="social__link"
						href="https://themeforest.net/user/themepatico"
						title="Envato"
						on:mouseover={highlightCursor}
						on:mouseout={unHighlightCursor}
					>
						<IconBrandEnvato size={16} />
					</a>
				</li>
			</ul>
		</div>
	</footer>
	<Waves />
	<div id="cursor" bind:this={cursorElement}></div>
</div>
