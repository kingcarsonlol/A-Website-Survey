/**
 * Original attempt was actually to use Tailwind classes in an array then use .join(" ") to
 * reactively change the styles. However, this was inconsistent and did not work with the
 * bind:value modifier since the value needs to be processed like adding a prefix before being
 * pushed into the corresponding global state's property's array. To do this attempts were made
 * with the $derived and $effect runes but that lead to infinite loops. It looked something like:
 * class = {userStyles.card.heading.h2.join(" ")}
 */

export const userStyles = $state({
	colors: {
		bg: {
			type: "",
			solidColor: "#808080", // Default solid color of gray
			gradient: {
				startColor: "#ffffff", // Default start color of white
				endColor: "#111111", // Default end color of black
				degrees: 45 // Default gradient direction
			}
		},
		marginalia: {
			header: {
				ownBg: false,
				bg: "#ffffff",
				text: "#111111"
			},
			footer: {
				ownBg: false,
				bg: "#ffffff"
			}
		},
		card: {
			bg: "#ffffff", // Default card bg of white
			text: "#000000",
			border: "#000000"
		},
		button: {
			next: {
				bg: "#e5e7eb", // Default Button Gray
				text: "#000000"
			},
			back: {
				bg: "#e5e7eb", // Default Button Gray
				text: "#000000"
			}
		}
	},

	sizes: {
		card: {
			width: 80,
			height: 80,
			border: {
				width: 1,
				roundness: 1
			}
		},
		text: {
			surveyTitle: 75,
			cardTitles: 30,
			subheadings: 20,
			content: 12
		},
		button: {
			width: 100,
			height: 30,
			text: 12
		},
		form: {
			rangeSlider: {
				height: 15,
				width: 99
			}
		}
	},

	spacing: {
		buttons: 16 // px units
	}
});
