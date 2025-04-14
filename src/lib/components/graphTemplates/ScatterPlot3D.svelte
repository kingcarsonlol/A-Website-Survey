<script>
	import { onMount, onDestroy, tick } from "svelte";
	import { browser } from "$app/environment";

	// Props
	let { data, title, height, pointSize, zoom } = $props();
	let backgroundColor = "#f8f9fa";

	// Additional customization
	let cameraPosition = { x: zoom, y: zoom, z: zoom };
	let opacity = 0.8;

	// State
	let plotlyDiv = $state(null);
	let plotlyLoaded = $state(false);
	let chart = $state(null);

	// Create or update the chart
	async function renderChart() {
		if (!browser || !plotlyDiv) return;

		try {
			// Dynamically import Plotly only in browser
			const Plotly = await import("plotly.js-dist-min");
			plotlyLoaded = true;

			// Extract data for plotting
			const plotData = [
				{
					type: "scatter3d",
					mode: "markers",
					x: data.map((point) => point.r),
					y: data.map((point) => point.g),
					z: data.map((point) => point.b),
					text: data.map((point) => {
						// Convert RGB to hex
						const r = point.r.toString(16).padStart(2, "0");
						const g = point.g.toString(16).padStart(2, "0");
						const b = point.b.toString(16).padStart(2, "0");
						return `#${r}${g}${b}`;
					}),
					marker: {
						size: pointSize,
						color: data.map((point) => `rgb(${point.r}, ${point.g}, ${point.b})`),
						opacity: opacity
					},
					hovertemplate:
						"Hex: %{text}<br>" + "R: %{x}<br>" + "G: %{y}<br>" + "B: %{z}<br>" + "<extra></extra>"
				}
			];

			let tickvalues = [];
			if (zoom > 1.5) {
				tickvalues = [0, 100, 200];
			} else {
				tickvalues = [0, 50, 100, 150, 200, 250];
			}

			const layout = {
				title: { text: title, yanchor: "top", y: 0.95 },
				scene: {
					xaxis: {
						title: {
							text: "R",
							font: { color: "rgb(255,0,0)" } // Red color for R
						},
						range: [0, 255],
						tickvals: tickvalues
					},
					yaxis: {
						title: {
							text: "G",
							font: { color: "rgb(0,255,0)" } // Green color for G
						},
						range: [0, 255],
						tickvals: tickvalues
					},
					zaxis: {
						title: {
							text: "B",
							font: { color: "rgb(0,0,255)" } // Blue color for B
						},
						range: [0, 255],
						tickvals: tickvalues
					},
					camera: { eye: cameraPosition }
				},
				margin: { l: 0, r: 0, b: 0, t: 0 },
				paper_bgcolor: backgroundColor,
				plot_bgcolor: backgroundColor
			};

			const config = {
				displayModeBar: false, // Hides all the control buttons
				scrollZoom: true // Still allows scrolling to zoom if needed
			};

			if (chart) {
				Plotly.default.react(plotlyDiv, plotData, layout, config);
			} else {
				Plotly.default.newPlot(plotlyDiv, plotData, layout, config);
				chart = true;
			}
		} catch (error) {
			console.error("Error rendering Plotly chart:", error);
		}
	}

	// React to data changes
	$effect(() => {
		if (data && plotlyLoaded) {
			renderChart();
		}
	});

	onMount(async () => {
		if (browser) {
			await renderChart();
		}
	});

	onDestroy(() => {
		if (browser && plotlyDiv && chart) {
			// Clean up plotly
			import("plotly.js-dist-min").then((Plotly) => {
				Plotly.default.purge(plotlyDiv);
			});
		}
	});
</script>

<div class="scatter-container">
	<div bind:this={plotlyDiv} style="height: {height}; width: 100%;"></div>
	{#if !plotlyLoaded}
		<div class="loading">Loading 3D scatter plot...</div>
	{/if}
</div>

<style>
	.scatter-container {
		position: relative;
		width: 100%;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #666;
	}
</style>
