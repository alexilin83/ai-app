<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let introParagraph1: any, introParagraph2: any, introParagraph3: any;

	onMount(() => {
		gsap.fromTo(introParagraph1, { y: '105%', opacity: 0 }, { y: 0, opacity: 1, duration: .8 });
		gsap.fromTo(introParagraph2, { y: '105%', opacity: 0 }, { y: 0, opacity: 1, duration: .8, delay: .1 });
		gsap.fromTo(introParagraph3, { y: '105%', opacity: 0 }, { y: 0, opacity: 1, duration: .8, delay: .2 });
	});
</script>

<section class="section section_intro">
	<div class="container">
		<h1 class="intro">
			<span bind:this={introParagraph1} class="intro_title">Alexey ilin</span>
			<span bind:this={introParagraph2} class="intro_position">Web developer &</span>
			<span bind:this={introParagraph3} class="intro_marked">source explorer</span>
		</h1>
	</div>
</section>

<style lang="scss">
	@import "variables.scss";
	.intro {
		text-transform: uppercase;
		mix-blend-mode: luminosity;
		span {
			display: block;
		}
		& &_title {
			font-weight: 200;
		}
		& &_marked {
			background: linear-gradient(to right, lighten(map-get($colors, 'space2'), 10), lighten(map-get($colors, 'space1'), 10));
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
</style>
