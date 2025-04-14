<script>
	import { onMount } from "svelte";
	import ColorStats from "$lib/components/graphs/ColorStats.svelte";

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

<div class="w-full flex flex-col justify-center items-center">
	<h1 class="text-5xl font-bold">STATISTICS</h1>
	{#if chartData}
		{#if chartData.status == "success"}
			<!-- Colors -->
			<div class="w-[50%]">
				<h1 class="text-3xl">Colors</h1>
				<ColorStats chartData={chartData.data} />
			</div>

			<!-- Sizing -->
			<div>

			</div>

			<!-- Rating -->
			 <div>

			 </div>
			<pre>{JSON.stringify(chartData, null, 2)}</pre>
		{:else}
			<p>An error has occurred in fetching statistics data</p>
		{/if}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
