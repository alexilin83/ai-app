<script lang="ts">
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import audioFile from '$lib/assets/audio.mp3';
	import IconVolume from '@tabler/icons-svelte/IconVolume.svelte';
	import IconVolumeOff from '@tabler/icons-svelte/IconVolumeOff.svelte';
	import { cursor } from '$lib/stores.js';

	let isSoundOn = false;
	let isAudioLoaded = false;

	let canvasElement: HTMLDivElement;
	let audio: HTMLAudioElement;
	let audioButton: HTMLButtonElement;

	let yMod: number = 1;

	const vertexShader = `
		attribute vec3 position;
		attribute float seed;
		uniform mat4 pMatrix;
		uniform mat4 mvMatrix;
		uniform float time;
		uniform float yMod;
		varying vec4 vColor;

		const float PI = 3.1415926535897932384626433832795;

		void main(void){
			vColor = vec4(0.0, 0.0, 1.0, 1.0);
			float rad = (seed + time) * PI / 180.0;
			float y = cos(rad * 3.0) * 3.0 * (yMod);
			vColor.x = cos(rad);
			vColor.y = sin(rad);
			vec4 mvPosition = mvMatrix * vec4(position.x, y, position.z, 1.0);
			gl_Position = pMatrix * mvPosition;
			gl_PointSize = 2.0;
		}
	`;
	const fragmentShader = `
		precision lowp float;
		varying vec4 vColor;

		void main(void){
			gl_FragColor = vColor;
		}
	`;

	let SHREE: any;

	let scene: any, camera: any, renderer: any, material: any, points: any;

	let audioCtx, analyser: AnalyserNode, dataArray: Uint8Array, bufferLength: number;

	const init = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		renderer = new SHREE.Renderer({ antialias: true });
		renderer.pixelRatio = 1;
		renderer.clearColor = [0, 0, 0, 0];
		renderer.setSize(width, height);
		canvasElement.appendChild(renderer.domElement);

		scene = new SHREE.Scene();

		camera = new SHREE.Camera();
		camera.position.y = 10;
		camera.position.z = 0;
		camera.position.x = 0;

		material = new SHREE.Material({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			uniforms: {
				time: {
					type: 'f',
					value: 0
				},
				yMod: {
					type: 'f',
					value: 1.0
				}
			},
			transparent: true
		});

		const geometry = new SHREE.Geometry();
		const position = [];
		const seed = [];
		const absolute = 200;

		for (let z = -absolute; z < absolute; z++) {
			for (let x = -absolute; x < absolute; x++) {
				position.push(x);
				position.push(0);
				position.push(z);
				seed.push(z + x);
			}
		}

		geometry.addAttribute('position', 3, position);
		geometry.addAttribute('seed', 1, seed);

		points = new SHREE.Points(geometry, material);
		points.rotation.y += -1.5;
		scene.add(points);

		render();
	};

	const initAudio = () => {
		audio = new Audio();
		audio.addEventListener('loadeddata', () => {
			isAudioLoaded = true;
			audioToggle();
		});

		//@ts-ignore
		const AudioContext = window.AudioContext || window.webkitAudioContext;
		audioCtx = new AudioContext();
		const source = audioCtx.createMediaElementSource(audio);
		analyser = audioCtx.createAnalyser();
		source.connect(analyser);
		source.connect(audioCtx.destination);

		audio.src = audioFile;
		audio.loop = true;
		audio.load();

		analyser.fftSize = 2048;
		bufferLength = analyser.frequencyBinCount;
		dataArray = new Uint8Array(bufferLength);
	}

	const render = () => {
		material.uniforms.time.value += 0.1;
		material.uniforms.yMod.value = yMod;
		renderer.render(scene, camera);

		if (isAudioLoaded) {
			analyser.getByteTimeDomainData(dataArray);
			for (let i = 0; i < bufferLength; i++) {
				const v = dataArray[i] / 128.0;
				yMod = v * 2;
			}
		}

		requestAnimationFrame(render);
	};

	const audioToggle = () => {
		isSoundOn = !isSoundOn;
		if (isSoundOn) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	const handleAudioClick = () => {
		if (isAudioLoaded) {
			audioToggle();
		} else {
			initAudio();
		}
	};

	const highlightCursor = () => {
		const cursorElement = get(cursor);
		cursorElement.classList.add('active');
	};
	const unHighlightCursor = () => {
		const cursorElement = get(cursor);
		cursorElement.classList.remove('active');
	};

	onMount(async () => {
		SHREE = await import('shree');
		init();
	});
</script>

<div id="canvas" bind:this={canvasElement}></div>
<button
	class="btn-icon btn-icon_audio"
	bind:this={audioButton}
	on:click={handleAudioClick}
	on:mouseover={highlightCursor}
	on:mouseout={unHighlightCursor}
>
	{#if isSoundOn}
		<IconVolume size={20} />
	{:else}
		<IconVolumeOff size={20} />
	{/if}
</button>

<style lang="scss">
	@import '../../routes/variables.scss';
	#canvas {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.btn-icon_audio {
		position: fixed;
		right: 20px;
		bottom: 20px;
		z-index: 20;
	}
	@media (min-width: map-get($breakpoints, 'medium')) {
		.btn-icon_audio {
			right: 80px;
			bottom: 80px;
		}
	}
</style>
