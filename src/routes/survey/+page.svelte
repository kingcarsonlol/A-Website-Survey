<script>
	import { goto } from "$app/navigation";
	import { Colors, Size, Rating } from "$lib/components/cards";
	import { userStyles } from "$lib/state/userStyles.svelte";

	let currentSlide = $state(1);

	$effect(() => {
		if (currentSlide < 1) {
			goto("/");
		} else if (currentSlide > 3) {
			goto("/statistics");
		}
	});

	async function submitData() {
		if (userStyles.colors.bg.type === "") {
			userStyles.colors.bg.type = "solid";
		}

		// Upload all data to the database
		const response = await fetch("/api/save", {
			method: "POST",
			body: JSON.stringify(userStyles)
		});

		// Reset styles
		document.body.style.all = "revert";

		// Redirect to the statistics page
		goto("/statistics");
	}
</script>

<div class="flex h-[100vh] flex-col items-center justify-center">
	<header class="flex h-[15vh] w-full items-center justify-center">
		<h1 id="surveyTitle">A Website Survey</h1>
	</header>
	<section class="flex h-[70vh] w-full items-center justify-center">
		<div class="flex h-150 w-[80%] flex-col border-2 md:w-300" id="card">
			<div class="flex-1 overflow-y-auto p-5">
				{#if currentSlide == 1}
					<Colors />
				{:else if currentSlide == 2}
					<Size />
				{:else if currentSlide == 3}
					<Rating />
				{/if}
			</div>
		</div>
	</section>
	<footer class="flex h-[15vh] w-full items-center justify-center">
		{#if currentSlide != 1}
			<button class="backBtn navButton" onclick={() => currentSlide--}> Back </button>
		{:else}
			<button class="backBtn navButton" disabled> Back </button>
		{/if}

		<div id="buttonSpace" class="w-[1rem]"></div>

		{#if currentSlide != 3}
			<button class="nextBtn navButton" onclick={() => currentSlide++}> Next </button>
		{:else}
			<button class="nextBtn navButton" onclick={submitData}> SUBMIT </button>
		{/if}
	</footer>
</div>
