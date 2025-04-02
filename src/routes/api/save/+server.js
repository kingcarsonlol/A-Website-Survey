import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import * as schema from "$lib/server/db/schema";

export async function POST({ request }) {
	try {
		// Parse the request body
		const requestBody = await request.json();

		// Insert into the main table
		const response = await db.insert(schema.responses).values({
			rating: requestBody.rating
		});

		// Get the ID of the inserted response
		const responseId = response.insertId;

		// Insert into the colors table
		await db.insert(schema.colors).values({
			responseId,
			bgType: requestBody.colors.bg.type,
			solidColor: requestBody.colors.bg.solidColor,
			gradientStartColor: requestBody.colors.bg.gradient.startColor,
			gradientEndColor: requestBody.colors.bg.gradient.endColor,
			gradientDegrees: requestBody.colors.bg.gradient.degrees
		});

		// Insert into the sizes table
		await db.insert(schema.sizes).values({
			responseId,
			cardWidth: requestBody.sizes.card.width,
			cardHeight: requestBody.sizes.card.height,
			cardBorderWidth: requestBody.sizes.card.border.width,
			cardBorderRoundness: requestBody.sizes.card.border.roundness
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
