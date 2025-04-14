<script>
    import ScatterPlot3D from "../graphTemplates/ScatterPlot3D.svelte";
	const { chartData } = $props();


</script>

<!-- Large screens -->
<div class="hidden md:block">
    <ScatterPlot3D
        title="Solid Background Colors"
        data = {chartData.bgSolidColor.values}
        height = "400px"
        pointSize = 10
        zoom = 1.5
    />
</div>

<!-- Small screens -->
<div class="md:hidden">
    <ScatterPlot3D
        title="Solid Background Colors"
        data = {chartData.bgSolidColor.values}
        height = "200px"
        pointSize = 10
        zoom = 2
    />
</div>
