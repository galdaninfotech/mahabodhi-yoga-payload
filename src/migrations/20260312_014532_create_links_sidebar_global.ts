import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_links_sidebar_links_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "links_sidebar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_links_sidebar_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "links_sidebar" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "links_sidebar_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  ALTER TABLE "links_sidebar_links" ADD CONSTRAINT "links_sidebar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_sidebar_rels" ADD CONSTRAINT "links_sidebar_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."links_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_sidebar_rels" ADD CONSTRAINT "links_sidebar_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "links_sidebar_links_order_idx" ON "links_sidebar_links" USING btree ("_order");
  CREATE INDEX "links_sidebar_links_parent_id_idx" ON "links_sidebar_links" USING btree ("_parent_id");
  CREATE INDEX "links_sidebar_rels_order_idx" ON "links_sidebar_rels" USING btree ("order");
  CREATE INDEX "links_sidebar_rels_parent_idx" ON "links_sidebar_rels" USING btree ("parent_id");
  CREATE INDEX "links_sidebar_rels_path_idx" ON "links_sidebar_rels" USING btree ("path");
  CREATE INDEX "links_sidebar_rels_pages_id_idx" ON "links_sidebar_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "links_sidebar_links" CASCADE;
  DROP TABLE "links_sidebar" CASCADE;
  DROP TABLE "links_sidebar_rels" CASCADE;
  DROP TYPE "public"."enum_links_sidebar_links_link_type";`)
}
