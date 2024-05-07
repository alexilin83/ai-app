<section class="section section_intro">
	<div class="container">
		<h1 class="intro">
			<span class="intro_text intro_text-title">Alexey ilin</span>
			<span class="intro_text intro_text-main">Web developer &</span>
			<span class="intro_text intro_text-other">source explorer</span>
		</h1>
	</div>
</section>

<style lang="scss">
	@import 'variables.scss';
	.intro {
		text-transform: uppercase;
		&_text {
			opacity: 0;
			display: block;
			animation: 2s text-reveal cubic-bezier(0.16, 1, 0.3, 1) both;
			&-title {
				font-weight: 200;
			}
			&-main {
				animation-delay: .1s;
			}
			&-other {
				background: linear-gradient(
					to right,
					lighten(map-get($colors, 'space2'), 10),
					lighten(map-get($colors, 'space1'), 10)
				);
				background-clip: text;
				-webkit-text-fill-color: transparent;
				animation-delay: .2s;
			}
		}
	}
</style>
