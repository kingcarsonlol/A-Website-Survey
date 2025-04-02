<script>
	import { userStyles } from "$lib/state/userStyles.svelte";

	$effect(() => {
		// Card Sizing Effects
		document.getElementById("card").style.height = `${userStyles.sizes.card.height}px`;
		document.getElementById("card").style.width = `${userStyles.sizes.card.width}px`;
		document.getElementById("card").style.borderWidth = `${userStyles.sizes.card.border.width}px`;
		document.getElementById("card").style.borderRadius = `${userStyles.sizes.card.border.roundness}%`;

	});
</script>

<div class="w-full">
	<h2 class="cardTitle">Sizes</h2>
	<div class="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-2">
		<div>
			<!-- I don't know why this is the only thing that works [hours waster: 2] -->
			<h3 class="cardSubHeading" style="margin-top: 1px;">Card Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="cardHeight" class="mr-5">Card Height</label>
				<div>
					<input
						type="number"
						name="cardHeight"
						bind:value={userStyles.sizes.card.height}
						class="h-[30px] w-[80px]"
					/>
					<input
						type="range"
						name="cardHeight"
						bind:value={userStyles.sizes.card.height}
						min="300"
						max="1000"
					/>
				</div>

				<label for="cardWidth" class="mr-5">Card Width</label>
				<div>
					<input
						type="number"
						name="cardWidth"
						bind:value={userStyles.sizes.card.width}
						class="h-[30px] w-[80px]"
					/>
					<input
						type="range"
						name="cardWidth"
						onchange={(e) => (userStyles.sizes.card.width = e.target.value)}
						min="500"
						max="1700"
					/>
				</div>

				<label for="borderWidth" class="mr-5">Border Width</label>
				<div>
					<input
						type="number"
						name="borderWidth"
						bind:value={userStyles.sizes.card.border.width}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="borderWidth"
						bind:value={userStyles.sizes.card.border.width}
						min="1"
						max="99"
					/>
				</div>

				<label for="borderRoundness" class="mr-5 mb-3">Border Roundness</label>
				<div>
					<input
						type="number"
						name="borderRoundness"
						bind:value={userStyles.sizes.card.border.roundness}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="borderRoundness"
						bind:value={userStyles.sizes.card.border.roundness}
						min="1"
						max="50"
					/>
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Text Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="surveyTitleSize" class="mr-5">Survey Title</label>
				<div>
					<input
						type="number"
						name="surveyTitleSize"
						bind:value={userStyles.sizes.text.surveyTitle}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="surveyTitleSize"
						bind:value={userStyles.sizes.text.surveyTitle}
						min="1"
						max="99"
					/>
				</div>

				<label for="cardTitleSize" class="mr-5">Card Titles</label>
				<div>
					<input
						type="number"
						name="cardTitleSize"
						bind:value={userStyles.sizes.text.cardTitles}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="cardTitleSize"
						bind:value={userStyles.sizes.text.cardTitles}
						min="1"
						max="99"
					/>
				</div>

				<label for="cardSubHeadingSize" class="mr-5">Subheadings</label>
				<div>
					<input
						type="number"
						name="cardSubHeadingSize"
						bind:value={userStyles.sizes.text.subheadings}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="cardSubHeadingSize"
						bind:value={userStyles.sizes.text.subheadings}
						min="1"
						max="99"
					/>
				</div>

				<label for="cardContentSize" class="mr-5">Content</label>
				<div>
					<input
						type="number"
						name="cardContentSize"
						bind:value={userStyles.sizes.text.content}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="cardContentSize"
						bind:value={userStyles.sizes.text.content}
						min="1"
						max="99"
					/>
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Button Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="buttonWidth" class="mr-5">Btn Width</label>
				<div>
					<input
						type="number"
						name="buttonWidth"
						bind:value={userStyles.sizes.button.width}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="buttonWidth"
						bind:value={userStyles.sizes.button.width}
						min="1"
						max="200"
					/>
				</div>

				<label for="buttonHeight" class="mr-5">Btn Height</label>
				<div>
					<input
						type="number"
						name="buttonHeight"
						bind:value={userStyles.sizes.button.height}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="buttonHeight"
						bind:value={userStyles.sizes.button.height}
						min="1"
						max="200"
					/>
				</div>

				<label for="buttonText" class="mr-5">Btn Text</label>
				<div>
					<input
						type="number"
						name="buttonText"
						bind:value={userStyles.sizes.button.text}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="buttonText"
						bind:value={userStyles.sizes.button.text}
						min="1"
						max="99"
					/>
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Form Element Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="rangeBarWidth" class="mr-5">Range Bar Width</label>
				<div>
					<input
						type="number"
						name="rangeBarWidth"
						bind:value={userStyles.sizes.form.rangeSlider.width}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="rangeBarWidth"
						value={userStyles.sizes.form.rangeSlider.width}
						onchange={(e) => (userStyles.sizes.form.rangeSlider.width = e.target.value)}
						min="1"
						max="99"
					/>
				</div>

				<label for="rangeBarHeight" class="mr-5">Range Bar Height</label>
				<div>
					<input
						type="number"
						name="rangeBarHeight"
						bind:value={userStyles.sizes.form.rangeSlider.height}
						class="h-[30px] w-[70px]"
					/>
					<input
						type="range"
						name="rangeBarHeight"
						bind:value={userStyles.sizes.form.rangeSlider.height}
						min="1"
						max="99"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
