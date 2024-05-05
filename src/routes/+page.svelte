<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let introText1: any,
		introText2: any,
		introText3: any,
		introTextCover1: any,
		introTextCover2: any,
		introTextCover3: any;

	onMount(() => {
		const tl1 = gsap.timeline();
		const tl2 = gsap.timeline({ delay: 0.2 });
		const tl3 = gsap.timeline({ delay: 0.4 });
		tl1.fromTo(
			introTextCover1,
			{
				x: '-100%'
			},
			{
				x: 0,
				duration: 0.5,
				ease: 'power1.out'
			}
		);
		tl1.set(introText1, {
			opacity: 1
		});
		tl1.to(introTextCover1, {
			x: '100%',
			duration: 0.5,
			ease: 'power1.out'
		});
		tl2.fromTo(
			introTextCover2,
			{
				x: '-100%'
			},
			{
				x: 0,
				duration: 0.5,
				ease: 'power1.out'
			}
		);
		tl2.set(introText2, {
			opacity: 1
		});
		tl2.to(introTextCover2, {
			x: '100%',
			duration: 0.5,
			ease: 'power1.out'
		});
		tl3.fromTo(
			introTextCover3,
			{
				x: '-100%'
			},
			{
				x: 0,
				duration: 0.5,
				ease: 'power1.out'
			}
		);
		tl3.set(introText3, {
			opacity: 1
		});
		tl3.to(introTextCover3, {
			x: '100%',
			duration: 0.5,
			ease: 'power1.out'
		});
	});
</script>

<section class="section section_intro">
	<div class="container">
		<h1 class="intro">
			<span class="intro_text-container">
				<span bind:this={introText1} class="intro_text intro_text-title">Alexey ilin</span>
				<span bind:this={introTextCover1} class="intro_text-cover"></span>
			</span>
			<span class="intro_text-container">
				<span bind:this={introText2} class="intro_text intro_text-main">Web developer &</span>
				<span bind:this={introTextCover2} class="intro_text-cover"></span>
			</span>
			<span class="intro_text-container">
				<span bind:this={introText3} class="intro_text intro_text-other">source explorer</span>
				<span bind:this={introTextCover3} class="intro_text-cover"></span>
			</span>
		</h1>
	</div>
</section>

<style lang="scss">
	@import 'variables.scss';
	.intro {
		text-transform: uppercase;
		span {
			display: inline-flex;
		}
		&_text-container {
			position: relative;
			overflow: hidden;
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
		&_text-cover {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: #fff;
			transform: translateX(-100%);
		}
	}
</style>
