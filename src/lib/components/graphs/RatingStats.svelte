<script>
	import ScatterPlot3D from "../graphTemplates/ScatterPlot3D.svelte";
	import PieChart from "../graphTemplates/PieChart.svelte";
	import { mean, median, mode } from "mathjs";

	const { chartData } = $props();
</script>

<!-- Larger Screens -->
<div class="hidden md:block">
	<h3 class="mb-3 text-center text-3xl">Rating</h3>
</div>

<!-- Smaller Screens -->
<div class="md:hidden">

</div>
