import { json } from "@sveltejs/kit";

export function GET() {
	const responseBody = {
		status: "success",
		message: "Hello, SvelteKit"
	};

	return json(responseBody);
}
