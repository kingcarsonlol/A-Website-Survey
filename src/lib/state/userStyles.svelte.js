export const userStyles = $state({
	button: [
		"bg-gray-200",
		"text-black",
		"px-2",
		"py-1 border",
		"border-gray-400",
		"rounded-md",
		"hover:bg-gray-300",
		"focus:outline",
		"focus:outline-blue-500",
		"text-2xl"
	],
	buttonSpace: "w-[15px]",
	header: ["text-5xl"],
	card: {
		container: ["w-[80%]", "md:w-300", "h-150", "border-2", "bg-white"],
		heading: {
			h2: ["text-3xl"],
			h3: ["text-xl"]
		}
	},

	colors: {
		bg: {
			type: "",
			solidColor: "#808080", // Default solid color
			gradient: {
				startColor: "#ffffff", // Default start color
				endColor: "#111111", // Default end color
				degrees: 45 // Default gradient direction
			}
		},
		card: {
			
		},
	}
});
