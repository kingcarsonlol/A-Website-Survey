CREATE TABLE "colors" (
	"id" serial PRIMARY KEY NOT NULL,
	"response_id" integer,
	"bg_type" text,
	"solid_color" text,
	"gradient_start_color" text,
	"gradient_end_color" text,
	"gradient_degrees" integer,
	"header_own_bg" boolean,
	"header_bg" text,
	"header_text" text,
	"footer_own_bg" boolean,
	"footer_bg" text,
	"card_bg" text,
	"card_text" text,
	"card_border" text,
	"button_next_bg" text,
	"button_next_text" text,
	"button_back_bg" text,
	"button_back_text" text,
	"button_reset_bg" text,
	"button_reset_text" text
);
--> statement-breakpoint
CREATE TABLE "responses" (
	"id" serial PRIMARY KEY NOT NULL,
	"rating" integer,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "sizes" (
	"id" serial PRIMARY KEY NOT NULL,
	"response_id" integer,
	"card_width" integer,
	"card_height" integer,
	"card_border_width" integer,
	"card_border_roundness" integer,
	"text_survey_title_size" integer,
	"text_card_titles_size" integer,
	"text_subheadings_size" integer,
	"text_content_size" integer,
	"button_gap" integer,
	"button_padding" integer,
	"button_text_size" integer,
	"form_range_slider_height" integer,
	"form_range_slider_width" integer
);
--> statement-breakpoint
ALTER TABLE "colors" ADD CONSTRAINT "colors_response_id_responses_id_fk" FOREIGN KEY ("response_id") REFERENCES "public"."responses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sizes" ADD CONSTRAINT "sizes_response_id_responses_id_fk" FOREIGN KEY ("response_id") REFERENCES "public"."responses"("id") ON DELETE no action ON UPDATE no action;