<script>
	import { userStyles } from "$lib/state/userStyles.svelte";
	import { updateClassByPrefix } from "$lib/utils/updateStyleArray";

	let colors = $state({
		bg: {
			solidColor: "#808080", // Default solid color
			gradient: {
				startColor: "#ffffff", // Default start color
				endColor: "#111111", // Default end color
				degrees: 45 // Default gradient direction
			}
		}
	});

	$effect(() => {
		if (userStyles.color.bgType === "solid") {
			// Set solid background color
			document.body.style.backgroundColor = colors.bg.solidColor;
			document.body.style.backgroundImage = ""; // Clear gradient background
		} else if (userStyles.color.bgType === "gradient") {
			// Set gradient background
			document.body.style.backgroundImage = `linear-gradient(${colors.bg.gradient.degrees}deg, ${colors.bg.gradient.startColor}, ${colors.bg.gradient.endColor})`;
			console.log(
				`linear-gradient(${colors.bg.gradient.degrees}deg, ${colors.bg.gradient.startColor}, ${colors.bg.gradient.endColor})`
			);
		}
	});
</script>

<div>
	<h2 class={userStyles.card.heading.h2.join(" ")}>Colors</h2>
	<div>
		<h3 class={userStyles.card.heading.h3.join(" ")}>Background Color</h3>
		<label>
			<input
				type="radio"
				name="bg type"
				value="solid"
				onchange={() => (userStyles.color.bgType = "solid")}
			/>
			Solid
		</label>
		<label>
			<input
				type="radio"
				name="bg type"
				value="gradient"
				onchange={() => (userStyles.color.bgType = "gradient")}
			/>
			Gradient
		</label>
		<br />
		{#if userStyles.color.bgType == "solid"}
			<label>
				Select a Solid Background
				<input type="color" name="solid bg" bind:value={colors.bg.solidColor} />
			</label>
			<br />
			<br />
		{:else if userStyles.color.bgType == "gradient"}
			<h5>Create a Gradient Background</h5>
			<label>
				Starting Color
				<input type="color" name="gradient bg 1" bind:value={colors.bg.gradient.startColor} />
			</label>
			<label>
				Ending Color
				<input type="color" name="gradient bg 2" bind:value={colors.bg.gradient.endColor} />
			</label>
			<label>
				Gradient Direction
				<input
					type="range"
					min="0"
					max="180"
					name="gradient direction"
					bind:value={colors.bg.gradient.degrees}
				/>
			</label>
		{:else}
			<br />
			<br />
		{/if}
	</div>

	<div>
		<h2>Card Color</h2>
		<button
			onclick={() => {
				userStyles.card.container = updateClassByPrefix(userStyles.card.container, "bg-", `bg-[${colors.bg.solidColor}]`);
				console.log(userStyles.card.container.join(" "));
			}}>CLICK</button
		>
	</div>

	<div>
		<h2>Buttons Colors</h2>
	</div>
</div>
