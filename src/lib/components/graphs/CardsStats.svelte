<script>
	import ScatterPlot3D from "../graphTemplates/ScatterPlot3D.svelte";
	import PieChart from "../graphTemplates/PieChart.svelte";
	import { mean, median, mode } from "mathjs";

	const { chartData } = $props();
</script>

<!-- Larger Screens -->
<div class="hidden md:block">
	<h3 class="mb-3 text-center text-3xl">Card Styling</h3>
    <div class="grid grid-cols-3">
        <div>
            
        </div>
    </div>
</div>

<!-- Smaller Screens -->
<div class="md:hidden">
    <div class="grid grid-cols-1">

    </div>
</div>
