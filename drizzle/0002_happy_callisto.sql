ALTER TABLE "sizes" RENAME COLUMN "text_survey_title_size" TO "text_survey_title";--> statement-breakpoint
ALTER TABLE "sizes" RENAME COLUMN "text_card_titles_size" TO "text_card_titles";--> statement-breakpoint
ALTER TABLE "sizes" RENAME COLUMN "text_subheadings_size" TO "text_subheadings";--> statement-breakpoint
ALTER TABLE "sizes" RENAME COLUMN "text_content_size" TO "text_content";--> statement-breakpoint
ALTER TABLE "sizes" RENAME COLUMN "button_text_size" TO "button_text";--> statement-breakpoint
ALTER TABLE "colors" ADD COLUMN "footer_text" text;