import { pgTable, serial, integer } from "drizzle-orm/pg-core";
import { responses } from "./responses";

export const sizes = pgTable("sizes", {
	id: serial("id").primaryKey(),
	responseId: integer("response_id").references(() => responses.id), // Foreign key
	cardWidth: integer("card_width"), // e.g., 1200
	cardHeight: integer("card_height"), // e.g., 600
	cardBorderWidth: integer("card_border_width"), // e.g., 2
	cardBorderRoundness: integer("card_border_roundness"), // e.g., 0
	textSurveyTitleSize: integer("text_survey_title_size"), // e.g., 48
	textCardTitlesSize: integer("text_card_titles_size"), // e.g., 30
	textSubheadingsSize: integer("text_subheadings_size"), // e.g., 18
	textContentSize: integer("text_content_size"), // e.g., 16
	buttonGap: integer("button_gap"), // e.g., 16
	buttonPadding: integer("button_padding"), // e.g., 8
	buttonTextSize: integer("button_text_size"), // e.g., 20
	formRangeSliderHeight: integer("form_range_slider_height"), // e.g., 15
	formRangeSliderWidth: integer("form_range_slider_width") // e.g., 300
});
