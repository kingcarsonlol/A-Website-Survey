<script>
	import { onMount } from "svelte";
	import BgStats from "$lib/components/graphs/BgStats.svelte";
	import CardsStats from "$lib/components/graphs/CardsStats.svelte";
	import MarginaliaStats from "$lib/components/graphs/MarginaliaStats.svelte";
	import ButtonsStats from "$lib/components/graphs/ButtonsStats.svelte";
	import RatingStats from "$lib/components/graphs/RatingStats.svelte";

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
	<h1 class="text-5xl font-bold my-10">STATISTICS</h1>
	{#if chartData}
		{#if chartData.status == "success"}
			<div class="w-[70%]">
				<BgStats chartData={chartData.data} />
			</div>

			<div class="w-[70%]">

			</div>

			 <div class="w-[70%]">

			 </div>
			<pre>{JSON.stringify(chartData, null, 2)}</pre>
		{:else}
			<p>An error has occurred in fetching statistics data</p>
		{/if}
	{:else}
		<p>Loading...</p>
	{/if}
</div>
