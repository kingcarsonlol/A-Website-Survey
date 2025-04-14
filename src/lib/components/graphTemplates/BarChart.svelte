<script>
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import Chart from "chart.js/auto";

	// Props
	let data = []; // Array of values
	let labels = []; // Labels for each bar
	let title = "Bar Chart";
	let xAxisLabel = "";
	let yAxisLabel = "";
	let backgroundColor = []; // Colors for bars
	let borderColor = []; // Border colors
	let beginAtZero = true;
	let stepSize;
	let height = "300px";
	let width = "100%";
	let datasetLabel = ""; // Label for the dataset
	let showLegend = false;
	let customOptions = {}; // Additional Chart.js options

	// State
	let chartCanvas = $state(null);
	let barChart = $state(null);

	// Default colors if none provided
	const defaultColors = [
		"rgba(255, 99, 132, 0.7)",
		"rgba(255, 159, 64, 0.7)",
		"rgba(255, 205, 86, 0.7)",
		"rgba(75, 192, 192, 0.7)",
		"rgba(54, 162, 235, 0.7)",
		"rgba(153, 102, 255, 0.7)",
		"rgba(201, 203, 207, 0.7)"
	];

	const defaultBorders = defaultColors.map((color) => color.replace("0.7)", "1)"));

	function createOrUpdateChart() {
		if (!browser || !chartCanvas) return;

		// Destroy existing chart if it exists
		if (barChart) {
			barChart.destroy();
		}

		const ctx = chartCanvas.getContext("2d");

		// Use provided colors or defaults
		const bgColors = backgroundColor.length
			? backgroundColor
			: data.map((_, i) => defaultColors[i % defaultColors.length]);

		const borderColors = borderColor.length
			? borderColor
			: data.map((_, i) => defaultBorders[i % defaultBorders.length]);

		// Default chart options
		const defaultOptions = {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				title: {
					display: !!title,
					text: title
				},
				legend: {
					display: showLegend
				}
			},
			scales: {
				x: {
					title: {
						display: !!xAxisLabel,
						text: xAxisLabel
					}
				},
				y: {
					beginAtZero,
					title: {
						display: !!yAxisLabel,
						text: yAxisLabel
					},
					ticks: {
						stepSize: stepSize
					}
				}
			}
		};

		// Merge with custom options
		const mergedOptions = { ...defaultOptions, ...customOptions };

		// Create new chart
		barChart = new Chart(ctx, {
			type: "bar",
			data: {
				labels,
				datasets: [
					{
						label: datasetLabel,
						data,
						backgroundColor: bgColors,
						borderColor: borderColors,
						borderWidth: 1
					}
				]
			},
			options: mergedOptions
		});
	}

	onMount(() => {
		if (browser) {
			createOrUpdateChart();
		}
	});

	onDestroy(() => {
		if (barChart) {
			barChart.destroy();
		}
	});
</script>

<div class="chart-container" style="height: {height}; width: {width};">
	<canvas bind:this={chartCanvas}></canvas>
	{#if !chartCanvas}
		<div class="loading">Loading chart...</div>
	{/if}
</div>

<style>
	.chart-container {
		position: relative;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #666;
	}
</style>
