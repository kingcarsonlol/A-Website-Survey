import { json } from "@sveltejs/kit";
import { db } from "$lib/server/db"; // Import your database connection
import * as schema from "$lib/server/db/schema"; // Import your schema

/**
 * GET endpoint to fetch and process data for charts.
 *
 * This function retrieves data from the database, processes it into a format
 * suitable for charting, and returns it as a JSON response.
 *
 * @returns {Promise<Response>} A JSON response containing the processed data or an error message.
 */
export async function GET() {
	try {
		const responses = await db.select().from(schema.responses);
		const colors = await db.select().from(schema.colors);
		const sizes = await db.select().from(schema.sizes);

		return json({
			status: "success",
			data: {
				responses: compileValues(responses),
				colors: compileValues(colors),
				sizes: compileValues(sizes)
			}
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

/**
 * Helper function to transform data into arrays of values for all fields except `id` and `responseId`.
 *
 * This function takes an array of database rows and dynamically extracts all fields except the excluded ones,
 * grouping their values into arrays.
 *
 * @param {Array<Object>} rows - Array of database rows.
 * @returns {Object} An object where each key is a field name and its value is an array of values.
 */
function compileValues(rows) {
	const result = {};

	// Iterate over each row in the dataset
	for (const row of rows) {
		// Iterate over each key in the row object
		for (const key of Object.keys(row)) {
			// Exclude `id` and `responseId`
			if (!["id", "responseId", "createdAt"].includes(key)) {
				// Initialize the array for the field if it doesn't exist
				if (!result[key]) {
					result[key] = [];
				}
				// Push the value into the array
				result[key].push(row[key]);
			}
		}
	}

	return result;
}
