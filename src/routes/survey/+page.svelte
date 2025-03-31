<script>
	import { userStyles } from "$lib/state/userStyles.svelte";
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
	<header class="flex h-[15vh] items-center justify-center">
		<h1 class={userStyles.header.join(" ")}>A Website Survey</h1>
	</header>
	<section class="flex h-[70vh] w-full items-center justify-center">
		<div class={userStyles.card.container.join(" ")}>
			<div class="p-5">
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
	<footer class="flex h-[15vh] w-[90vw] items-center justify-center md:w-[80vw]">
		<button class={userStyles.button.join(" ")} onclick={() => currentSlide--}> Back </button>
		<div class={userStyles.buttonSpace}></div>
		<button class={userStyles.button.join(" ")} onclick={() => currentSlide++}> Next </button>
	</footer>
</div>
