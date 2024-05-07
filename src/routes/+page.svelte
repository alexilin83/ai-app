<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let introText1: any,
		introText2: any,
		introText3: any;

	onMount(() => {
		gsap.fromTo(introText1, {
			x: 50,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			stagger: .05,
			duration: 2,
			ease: 'power4.out'
		});
		gsap.fromTo(introText2, {
			x: 50,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			stagger: .05,
			duration: 2,
			delay: .1,
			ease: 'power4.out'
		});
		gsap.fromTo(introText3, {
			x: 50,
			opacity: 0
		}, {
			x: 0,
			opacity: 1,
			stagger: .05,
			duration: 2,
			delay: .2,
			ease: 'power4.out'
		});
	});
</script>

<section class="section section_intro">
	<div class="container">
		<h1 class="intro">
			<span bind:this={introText1} class="intro_text intro_text-title">Alexey ilin</span>
			<span bind:this={introText2} class="intro_text intro_text-main">Web developer &</span>
			<span bind:this={introText3} class="intro_text intro_text-other">source explorer</span>
		</h1>
	</div>
</section>

<style lang="scss">
	@import 'variables.scss';
	.intro {
		text-transform: uppercase;
		span {
			display: block;
		}
		&_text {
			opacity: 0;
			&-title {
				font-weight: 200;
			}
			&-other {
				background: linear-gradient(
					to right,
					lighten(map-get($colors, 'space2'), 10),
					lighten(map-get($colors, 'space1'), 10)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
	}
</style>
