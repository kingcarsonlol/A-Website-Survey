<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import Chart from "chart.js/auto";

	// Svelte 5 runes for state management
	let plotlyDiv = $state(null);
	let chartCanvas = $state(null);
	let barChart = $state(null);
	let plotlyLoaded = $state(false);

	// Sample color data - each entry has an RGB value and a rating
	let colorData = $state([
		{ r: 255, g: 0, b: 0, rating: 4, name: "Bright Red" },
		{ r: 0, g: 255, b: 0, rating: 3, name: "Bright Green" },
		{ r: 0, g: 0, b: 255, rating: 5, name: "Bright Blue" },
		{ r: 255, g: 255, b: 0, rating: 2, name: "Yellow" },
		{ r: 255, g: 0, b: 255, rating: 1, name: "Magenta" },
		{ r: 0, g: 255, b: 255, rating: 3, name: "Cyan" },
		{ r: 128, g: 0, b: 0, rating: 4, name: "Maroon" },
		{ r: 0, g: 128, b: 0, rating: 5, name: "Dark Green" },
		{ r: 0, g: 0, b: 128, rating: 2, name: "Navy Blue" },
		{ r: 128, g: 128, b: 128, rating: 3, name: "Gray" }
	]);

	// Function to create the Plotly 3D scatter plot
	async function createPlotlyChart() {
		if (!browser || !plotlyDiv) return;

		// Dynamically import Plotly only in the browser
		const Plotly = await import("plotly.js-dist-min");
		plotlyLoaded = true;

		const r = colorData.map((color) => color.r);
		const g = colorData.map((color) => color.g);
		const b = colorData.map((color) => color.b);
		const text = colorData.map((color) => color.name);
		const colors = colorData.map((color) => `rgb(${color.r}, ${color.g}, ${color.b})`);

		const data = [
			{
				type: "scatter3d",
				mode: "markers",
				x: r,
				y: g,
				z: b,
				text,
				marker: {
					size: 12,
					color: colors,
					opacity: 0.8
				},
				hovertemplate:
					"R: %{x}<br>" + "G: %{y}<br>" + "Z: %{z}<br>" + "Name: %{text}<br>" + "<extra></extra>"
			}
		];

		const layout = {
			title: "3D RGB Color Visualization",
			scene: {
				xaxis: { title: "Red (0-255)" },
				yaxis: { title: "Green (0-255)" },
				zaxis: { title: "Blue (0-255)" },
				camera: {
					eye: { x: 1.5, y: 1.5, z: 1.5 }
				}
			},
			margin: { l: 0, r: 0, b: 0, t: 50 },
			paper_bgcolor: "#f8f9fa",
			plot_bgcolor: "#f8f9fa"
		};

		Plotly.default.newPlot(plotlyDiv, data, layout);
	}

	// Function to create the Chart.js bar chart
	function createBarChart() {
		if (!browser || !chartCanvas) return;

		// Count ratings
		const ratingCounts = [0, 0, 0, 0, 0]; // Index 0 is for rating 1, etc.
		colorData.forEach((color) => {
			ratingCounts[color.rating - 1]++;
		});

		const ctx = chartCanvas.getContext("2d");

		barChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
				datasets: [
					{
						label: "Number of Ratings",
						data: ratingCounts,
						backgroundColor: [
							"rgba(255, 99, 132, 0.7)",
							"rgba(255, 159, 64, 0.7)",
							"rgba(255, 205, 86, 0.7)",
							"rgba(75, 192, 192, 0.7)",
							"rgba(54, 162, 235, 0.7)"
						],
						borderColor: [
							"rgb(255, 99, 132)",
							"rgb(255, 159, 64)",
							"rgb(255, 205, 86)",
							"rgb(75, 192, 192)",
							"rgb(54, 162, 235)"
						],
						borderWidth: 1
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					title: {
						display: true,
						text: "Rating Distribution"
					},
					legend: {
						display: false
					}
				},
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							stepSize: 1
						}
					}
				}
			}
		});
	}

	// Function to add a new color with rating
	async function addColor() {
		const newColor = {
			r: Math.floor(Math.random() * 256),
			g: Math.floor(Math.random() * 256),
			b: Math.floor(Math.random() * 256),
			rating: Math.floor(Math.random() * 5) + 1,
			name: `Random Color ${colorData.length + 1}`
		};

		colorData = [...colorData, newColor];

		// Update both charts
		await updateCharts();
	}

	// Function to update both charts
	async function updateCharts() {
		if (!browser) return;

		// Update Plotly chart
		if (plotlyDiv && plotlyLoaded) {
			await createPlotlyChart();
		}

		// Update Chart.js chart
		if (barChart) {
			barChart.destroy();
			createBarChart();
		}
	}

	onMount(async () => {
		if (browser) {
			await createPlotlyChart();
			createBarChart();

			// Clean up on unmount
			return () => {
				if (barChart) {
					barChart.destroy();
				}
			};
		}
	});
</script>

{#if browser}
	<div class="charts-container">
		<div class="chart-section">
			<h2>RGB Color Space Visualization</h2>
			<div bind:this={plotlyDiv} class="plotly-chart"></div>
		</div>

		<div class="chart-section">
			<h2>Rating Distribution</h2>
			<canvas bind:this={chartCanvas} width="400" height="300"></canvas>
		</div>

		<div class="controls">
			<button onclick={addColor}>Add Random Color</button>
		</div>
	</div>
{:else}
	<div class="loading">Loading charts...</div>
{/if}

<style>
	.charts-container {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.chart-section {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 1rem;
		background-color: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	h2 {
		margin-top: 0;
		color: #333;
	}

	.plotly-chart {
		height: 500px;
		width: 100%;
	}

	.controls {
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}

	button {
		background-color: #4caf50;
		border: none;
		color: white;
		padding: 0.5rem 1rem;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		border-radius: 4px;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #45a049;
	}

	.loading {
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
		color: #666;
	}
</style>
