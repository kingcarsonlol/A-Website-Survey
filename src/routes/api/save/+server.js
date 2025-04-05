import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as schema from "$lib/server/db/schema";

export async function POST({ request }) {
	try {
		// Parse the request body
		const requestBody = await request.json();

		// Insert into the main table
		const response = await db
			.insert(schema.responses)
			.values({
				rating: requestBody.rating
			})
			.returning({
				id: schema.responses.id
			});

		const responseId = response[0].id;

		// Insert into the colors table
		await db.insert(schema.colors).values({
			responseId,

			bgType: requestBody.colors.bg.type,
			solidColor: requestBody.colors.bg.solidColor,
			gradientStartColor: requestBody.colors.bg.gradient.startColor,
			gradientEndColor: requestBody.colors.bg.gradient.endColor,
			gradientDegrees: requestBody.colors.bg.gradient.degrees,

			headerOwnBg: requestBody.colors.marginalia.header.ownBg,
			headerBg: requestBody.colors.marginalia.header.ownBg
				? requestBody.colors.marginalia.header.bg
				: null,
			headerText: requestBody.colors.marginalia.header.text,

			footerOwnBg: requestBody.colors.marginalia.footer.ownBg,
			footerBg: requestBody.colors.marginalia.footer.ownBg
				? requestBody.colors.marginalia.footer.bg
				: null,

			cardBg: requestBody.colors.card.bg,
			cardText: requestBody.colors.card.text,
			cardBorder: requestBody.colors.card.border,

			buttonNextBg: requestBody.colors.button.next.bg,
			buttonNextText: requestBody.colors.button.next.text,
			buttonBackBg: requestBody.colors.button.back.bg,
			buttonBackText: requestBody.colors.button.back.text,
			buttonResetBg: requestBody.colors.button.reset.bg,
			buttonResetText: requestBody.colors.button.reset.text,
		});

		// Insert into the sizes table
		await db.insert(schema.sizes).values({
			responseId,

			// Card sizes
			cardWidth: requestBody.sizes.card.width,
			cardHeight: requestBody.sizes.card.height,
			cardBorderWidth: requestBody.sizes.card.border.width,
			cardBorderRoundness: requestBody.sizes.card.border.roundness,

			// Text sizes
			textSurveyTitle: requestBody.sizes.text.surveyTitle,
			textCardTitles: requestBody.sizes.text.cardTitles,
			textSubheadings: requestBody.sizes.text.subheadings,
			textContent: requestBody.sizes.text.content,

			// Button sizes
			buttonGap: requestBody.sizes.button.gap,
			buttonPadding: requestBody.sizes.button.padding,
			buttonText: requestBody.sizes.button.text,

			// Form sizes
			formRangeSliderHeight: requestBody.sizes.form.rangeSlider.height,
			formRangeSliderWidth: requestBody.sizes.form.rangeSlider.width
		});

		// Respond with success
		return json({
			status: "success"
		});
	} catch (error) {
		// Handle errors gracefully
		console.error("Error saving submission:", error);
		return json(
			{
				status: "error",
				message: error.message
			},
			{ status: 500 }
		);
	}
}
