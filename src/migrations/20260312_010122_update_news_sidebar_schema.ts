import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "news_sidebar_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "news_sidebar_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "news_sidebar_links" CASCADE;
  DROP TABLE "news_sidebar_rels" CASCADE;
  ALTER TABLE "news_sidebar" ALTER COLUMN "title" SET DEFAULT 'Latest News';
  ALTER TABLE "news_sidebar" ADD COLUMN "limit" numeric DEFAULT 5 NOT NULL;
  DROP TYPE "public"."enum_news_sidebar_links_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_news_sidebar_links_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "news_sidebar_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_news_sidebar_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "news_sidebar_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  ALTER TABLE "news_sidebar" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "news_sidebar_links" ADD CONSTRAINT "news_sidebar_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_sidebar_rels" ADD CONSTRAINT "news_sidebar_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news_sidebar"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_sidebar_rels" ADD CONSTRAINT "news_sidebar_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "news_sidebar_links_order_idx" ON "news_sidebar_links" USING btree ("_order");
  CREATE INDEX "news_sidebar_links_parent_id_idx" ON "news_sidebar_links" USING btree ("_parent_id");
  CREATE INDEX "news_sidebar_rels_order_idx" ON "news_sidebar_rels" USING btree ("order");
  CREATE INDEX "news_sidebar_rels_parent_idx" ON "news_sidebar_rels" USING btree ("parent_id");
  CREATE INDEX "news_sidebar_rels_path_idx" ON "news_sidebar_rels" USING btree ("path");
  CREATE INDEX "news_sidebar_rels_pages_id_idx" ON "news_sidebar_rels" USING btree ("pages_id");
  ALTER TABLE "news_sidebar" DROP COLUMN "limit";`)
}
