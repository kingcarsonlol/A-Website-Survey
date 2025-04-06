import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db"; // Import your database connection
import * as schema from "$lib/server/db/schema"; // Import your schema

export async function GET() {
	try {

		const stats = await db.select().from(schema.statistics);

		return json({
			status: "success",
			data: stats
		});
	} catch (error) {
		// Handle errors gracefully
		console.error("Error fetching data:", error);

		/**
		 * @type {Object} errorResponse - The error response object.
		 */
		return json(
			{
				status: "error",
				message: "Failed to fetch data"
			},
			{ status: 500 }
		);
	}
}
