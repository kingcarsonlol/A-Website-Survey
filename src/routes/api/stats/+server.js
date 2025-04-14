import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db"; // Import your database connection
import * as schema from "$lib/server/db/schema"; // Import your schema

export async function GET() {
	try {
		const stats = await db.select().from(schema.statistics);

		// Transform the array into an object with parameterName as keys
		const transformedStats = stats.reduce((acc, stat) => {
			// Use the parameterName as the key
			const { parameterName, ...rest } = stat;
			acc[parameterName] = rest;
			return acc;
		}, {});

		return json({
			status: "success",
			data: transformedStats
		});
	} catch (error) {
		console.error("Error fetching data:", error);

		return json(
			{
				status: "error",
				message: "Failed to fetch data"
			},
			{ status: 500 }
		);
	}
}
