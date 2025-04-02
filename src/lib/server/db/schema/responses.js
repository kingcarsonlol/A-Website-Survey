import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";

export const responses = pgTable("responses", {
	id: serial("id").primaryKey(),
	rating: integer("rating"), // Rating for the submission
	createdAt: timestamp("created_at").defaultNow() // Timestamp of submission
});
