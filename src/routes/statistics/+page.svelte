<script>
	import { onMount } from "svelte";

	let chartData = $state({});

	onMount(async () => {
		// Fetch data when the component is initialized
		try {
			const response = await fetch("/api/stats");
			const data = await response.json();
			chartData = data; // Update the store with fetched data
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	});
</script>

<div>
	<h1>STATISTICS</h1>
	<!-- Use reactive data from the store -->
	{#if chartData}
		<pre>{JSON.stringify(chartData, null, 2)}</pre>
	{:else}
		<p>Loading...</p>
	{/if}
</div>
