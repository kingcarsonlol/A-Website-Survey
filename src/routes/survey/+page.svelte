<script>
	import { goto } from "$app/navigation";
	import { Colors, SizeAndSpace, Typography, FormElements, Rating } from "$lib/components/cards";

	let currentSlide = $state(1);

	$effect(() => {
		if (currentSlide < 1) {
			goto("/");
		} else if (currentSlide > 5) {
			goto("/statistics");
		}
	});
</script>

<div class="flex h-[100vh] flex-col items-center justify-center">
	<header class="flex h-[15vh] w-full items-center justify-center">
		<h1 id="surveyTitle">A Website Survey</h1>
	</header>
	<section class="flex h-[70vh] w-full items-center justify-center">
		<div class="card flex h-150 w-[80%] flex-col border-2 md:w-300">
			<div class="flex-1 overflow-y-auto p-5">
				{#if currentSlide == 1}
					<Colors />
				{:else if currentSlide == 2}
					<SizeAndSpace />
				{:else if currentSlide == 3}
					<Typography />
				{:else if currentSlide == 4}
					<FormElements />
				{:else if currentSlide == 5}
					<Rating />
				{/if}
			</div>
		</div>
	</section>
	<footer class="flex h-[15vh] w-full items-center justify-center">
		<button class="backBtn" onclick={() => currentSlide--}> Back </button>
		<div id="buttonSpace" class="w-[1rem]"></div>
		<button class="nextBtn" onclick={() => currentSlide++}> Next </button>
	</footer>
</div>
