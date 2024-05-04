<script lang="ts">
    import { onMount } from 'svelte';

	let canvasWrapper: HTMLDivElement;

	let SHREE: any;

    let scene: any, camera: any, renderer: any, material: any, points: any;

	const initCanvas = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		renderer = new SHREE.Renderer({antialias: true});
		renderer.pixelRatio = 1;
		renderer.clearColor = [0, 0, 0, 0];
		renderer.setSize(width, height);
		canvasWrapper.appendChild(renderer.domElement);

		scene = new SHREE.Scene();

		camera = new SHREE.Camera();
		camera.position.y = 10;
		camera.position.z = 0;
		camera.position.x = 0;

		material = new SHREE.Material({
			vertexShader: `
				attribute vec3 position;
				attribute float seed;
				uniform mat4 pMatrix;
				uniform mat4 mvMatrix;
				uniform float time;
				varying vec4 vColor;

				const float PI = 3.1415926535897932384626433832795;

				void main(void){
					vColor = vec4(0.0, 0.0, 1.0, 1.0);
					float rad = (seed + time) * PI / 180.0;
					float y = cos(rad * 3.0) * 3.0;
					vColor.x = cos(rad);
					vColor.y = sin(rad);
					vec4 mvPosition = mvMatrix * vec4(position.x, y, position.z, 1.0);
					gl_Position = pMatrix * mvPosition;
					gl_PointSize = 2.0;
				}
			`,
			fragmentShader: `
				precision lowp float;
				varying vec4 vColor;

				void main(void){
					gl_FragColor = vColor;
				}
			`,
			uniforms: {
				time: {
					type: 'f',
					value: 0
				}
			},
			transparent: true,
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

	const render = () => {
		material.uniforms.time.value += 0.1;
		renderer.render(scene, camera);
		requestAnimationFrame(render);
	};

    onMount(async() => {
		SHREE = await import('shree');
		initCanvas();
	});
</script>

<div id="canvas" bind:this={canvasWrapper}></div>