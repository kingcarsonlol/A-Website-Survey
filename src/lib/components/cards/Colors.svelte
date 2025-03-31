<script>
	import { userStyles } from "$lib/state/userStyles.svelte";
	import { updateClassByPrefix } from "$lib/utils/updateStyleArray";

	$effect(() => {
		if (userStyles.colors.bg.type === "solid") {
			// Set solid background color
			document.body.style.backgroundColor = userStyles.colors.bg.solidColor;
			document.body.style.backgroundImage = ""; // Clear gradient background
		} else if (userStyles.colors.bg.type === "gradient") {
			// Set gradient background
			document.body.style.backgroundImage = `linear-gradient(${userStyles.colors.bg.gradient.degrees}deg, ${userStyles.colors.bg.gradient.startColor}, ${userStyles.colors.bg.gradient.endColor})`;
		}
        // Update 
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
				onchange={() => (userStyles.colors.bg.type = "solid")}
			/>
			Solid
		</label>
		<label>
			<input
				type="radio"
				name="bg type"
				value="gradient"
				onchange={() => (userStyles.colors.bg.type = "gradient")}
			/>
			Gradient
		</label>
		<br />
		{#if userStyles.colors.bg.type == "solid"}
			<label>
				Select a Solid Background
				<input type="color" name="solid bg" bind:value={userStyles.colors.bg.solidColor} />
			</label>
			<br />
			<br />
		{:else if userStyles.colors.bg.type == "gradient"}
			<h5>Create a Gradient Background</h5>
			<label>
				Starting Color
				<input type="color" name="gradient bg 1" bind:value={userStyles.colors.bg.gradient.startColor} />
			</label>
			<label>
				Ending Color
				<input type="color" name="gradient bg 2" bind:value={userStyles.colors.bg.gradient.endColor} />
			</label>
			<label>
				Gradient Direction
				<input
					type="range"
					min="0"
					max="180"
					name="gradient direction"
					bind:value={userStyles.colors.bg.gradient.degrees}
				/>
			</label>
		{:else}
			<br />
			<br />
		{/if}
	</div>

	<div>
		<h3 class={userStyles.card.heading.h3.join(" ")}>Card Color</h3>
        
	</div>

	<div>
		<h3 class={userStyles.card.heading.h3.join(" ")}>Buttons Color</h3>
	</div>
</div>
