<script>
	import { userStyles } from "$lib/state/userStyles.svelte";

	$effect(() => {
		//
	});
</script>

<div class="w-full">
	<h2 class="cardTitle">Sizes</h2>
	<div class="grid grid-cols-1 gap-x-20 gap-y-5 md:grid-cols-2">
		<div>
			<!-- I don't know why this is the only thing that works [hours waster: 2] -->
			<h3 class="cardSubHeading" style="margin-top: 1px;">Card Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="cardWidth" class="mr-5">Card Width</label>
				<div>
					<input type="number" name="cardWidth" class="h-[30px] w-[50px]" />
					<input type="range" name="cardWidth" min="1" max="100" />
				</div>

				<label for="cardHeight" class="mr-5">Card Height</label>
				<div>
					<input type="number" name="cardHeight" class="h-[30px] w-[50px]" />
					<input type="range" name="cardHeight" min="1" max="100" />
				</div>

				<label for="borderWidth" class="mr-5">Border Width</label>
				<div>
					<input type="number" name="borderWidth" class="h-[30px] w-[50px]" />
					<input type="range" name="borderWidth" min="1" max="100" />
				</div>

				<label for="borderRoundness" class="mr-5 mb-3">Border Roundness</label>
				<div>
					<input type="number" name="borderRoundness" class="h-[30px] w-[50px]" />
					<input type="range" name="borderRoundness" min="1" max="100" />
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Text Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="surveyTitleSize" class="mr-5">Survey Title</label>
				<div>
					<input type="number" name="surveyTitleSize" class="h-[30px] w-[50px]" />
					<input type="range" name="surveyTitleSize" min="1" max="100" />
				</div>

				<label for="cardTitleSize" class="mr-5">Card Titles</label>
				<div>
					<input type="number" name="cardTitleSize" class="h-[30px] w-[50px]" />
					<input type="range" name="cardTitleSize" min="1" max="100" />
				</div>

				<label for="cardSubHeadingSize" class="mr-5">Subheadings</label>
				<div>
					<input type="number" name="cardSubHeadingSize" class="h-[30px] w-[50px]" />
					<input type="range" name="cardSubHeadingSize" min="1" max="100" />
				</div>

				<label for="cardContentSize" class="mr-5">Content</label>
				<div>
					<input type="number" name="cardContentSize" class="h-[30px] w-[50px]" />
					<input type="range" name="cardContentSize" min="1" max="100" />
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Button Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="buttonWidth" class="mr-5">Btn Width</label>
				<div>
					<input type="number" name="buttonWidth" class="h-[30px] w-[50px]" />
					<input type="range" name="buttonWidth" min="1" max="100" />
				</div>

				<label for="buttonHeight" class="mr-5">Btn Height</label>
				<div>
					<input type="number" name="buttonHeight" class="h-[30px] w-[50px]" />
					<input type="range" name="buttonHeight" min="1" max="100" />
				</div>

				<label for="buttonText" class="mr-5">Btn Text</label>
				<div>
					<input type="number" name="buttonText" class="h-[30px] w-[50px]" />
					<input type="range" name="buttonText" min="1" max="100" />
				</div>
			</div>
		</div>

		<div>
			<h3 class="cardSubHeading" style="margin-top: 1px;">Form Element Sizing</h3>
			<div class="grid grid-cols-[30%_70%] gap-y-3 md:grid-cols-[20%_80%]">
				<label for="rangeBarWidth" class="mr-5">Range Bar Width</label>
				<div>
					<input type="number" name="rangeBarWidth" class="h-[30px] w-[50px]" />
					<input type="range" name="rangeBarWidth" min="1" max="100" />
				</div>

				<label for="rangeBarHeight" class="mr-5">Range Bar Height</label>
				<div>
					<input type="number" name="rangeBarHeight" class="h-[30px] w-[50px]" />
					<input type="range" name="rangeBarHeight" min="1" max="100" />
				</div>
			</div>
		</div>
	</div>
</div>
