<script>
	import { userStyles } from "$lib/state/userStyles.svelte";
	import { goto } from "$app/navigation";

	let currentSlide = $state(1);

	$effect(() => {
		if (currentSlide < 1) {
			goto("/");
		} else if (currentSlide > 5){
            goto("/statistics")
        }
	});
</script>

<div class="flex h-[100vh] flex-col items-center justify-center">
	<header class="flex h-[15vh] items-center justify-center">
		<h1 class={userStyles.header.join(" ")}>A Website Survey</h1>
	</header>
	<section class="flex h-[70vh] w-full items-center justify-center">
		{#if currentSlide == 1}
			<div class={userStyles.card.join(" ")}>
				<h1>SLIDE 1</h1>
			</div>
		{:else if currentSlide == 2}
			<div class={userStyles.card.join(" ")}>
				<h1>SLIDE 2</h1>
			</div>
		{:else if currentSlide == 3}
			<div class={userStyles.card.join(" ")}>
				<h1>SLIDE 3</h1>
			</div>
		{/if}
	</section>
	<footer class="flex h-[15vh] w-[90vw] items-center justify-center md:w-[80vw]">
		<button class={userStyles.button.join(" ")} onclick={() => currentSlide--}> Back </button>
		<div class={userStyles.buttonSpace}></div>
		<button class={userStyles.button.join(" ")} onclick={() => currentSlide++}> Next </button>
	</footer>
</div>
