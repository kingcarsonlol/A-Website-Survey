ALTER TABLE "colors" DROP CONSTRAINT "colors_response_id_responses_id_fk";
--> statement-breakpoint
ALTER TABLE "sizes" DROP CONSTRAINT "sizes_response_id_responses_id_fk";
--> statement-breakpoint
ALTER TABLE "colors" ADD CONSTRAINT "colors_response_id_responses_id_fk" FOREIGN KEY ("response_id") REFERENCES "public"."responses"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sizes" ADD CONSTRAINT "sizes_response_id_responses_id_fk" FOREIGN KEY ("response_id") REFERENCES "public"."responses"("id") ON DELETE cascade ON UPDATE no action;