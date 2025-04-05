import { pgTable, serial, integer, text, boolean } from "drizzle-orm/pg-core";
import { responses } from "./responses";

export const colors = pgTable("colors", {
	id: serial("id").primaryKey(),
	responseId: integer("response_id").references(() => responses.id, {
		onDelete: "cascade"
	}), // Foreign key

	// Background Colors
	bgType: text("bg_type").default("solid").notNull(), // e.g., "solid" or "gradient"
	solidColor: text("solid_color"), // e.g., "#808080"
	gradientStartColor: text("gradient_start_color"), // e.g., "#ffffff"
	gradientEndColor: text("gradient_end_color"), // e.g., "#111111"
	gradientDegrees: integer("gradient_degrees"), // e.g., 45

	// Header Colors
	headerOwnBg: boolean("header_own_bg"), // e.g., true or false
	headerBg: text("header_bg"), // e.g., "#ffffff"
	headerText: text("header_text"), // e.g., "#111111"

	// Footer Colors
	footerOwnBg: boolean("footer_own_bg"), // e.g., true or false
	footerBg: text("footer_bg"), // e.g., "#ffffff"

	// Card Colors
	cardBg: text("card_bg"), // e.g., "#ffffff"
	cardText: text("card_text"), // e.g., "#000000"
	cardBorder: text("card_border"), // e.g., "#000000"

	// Button Colors
	buttonNextBg: text("button_next_bg"), // e.g., "#e5e7eb"
	buttonNextText: text("button_next_text"), // e.g., "#000000"
	buttonBackBg: text("button_back_bg"), // e.g., "#e5e7eb"
	buttonBackText: text("button_back_text"), // e.g., "#000000"
	buttonResetBg: text("button_reset_bg"), // e.g., "#e5e7eb"
	buttonResetText: text("button_reset_text") // e.g., "#000000"
});
