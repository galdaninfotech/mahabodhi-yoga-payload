import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE IF EXISTS "programme_categories" CASCADE;
   CREATE TABLE "programme_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "products_rels" RENAME COLUMN "categories_id" TO "programme_categories_id";
  ALTER TABLE "_products_v_rels" RENAME COLUMN "categories_id" TO "programme_categories_id";
  
  -- Clear data that points to the old categories table to avoid FK violations
  UPDATE "products_rels" SET "programme_categories_id" = NULL;
  UPDATE "_products_v_rels" SET "programme_categories_id" = NULL;

  ALTER TABLE "products_rels" DROP CONSTRAINT IF EXISTS "products_rels_categories_fk";
  ALTER TABLE "_products_v_rels" DROP CONSTRAINT IF EXISTS "_products_v_rels_categories_fk";
  
  DROP INDEX IF EXISTS "products_rels_categories_id_idx";
  DROP INDEX IF EXISTS "_products_v_rels_categories_id_idx";
  
  ALTER TABLE "pages_rels" ADD COLUMN IF NOT EXISTS "programme_categories_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN IF NOT EXISTS "programme_categories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "programme_categories_id" integer;
  
  CREATE UNIQUE INDEX "programme_categories_slug_idx" ON "programme_categories" USING btree ("slug");
  CREATE INDEX "programme_categories_updated_at_idx" ON "programme_categories" USING btree ("updated_at");
  CREATE INDEX "programme_categories_created_at_idx" ON "programme_categories" USING btree ("created_at");
  
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_programme_categories_fk" FOREIGN KEY ("programme_categories_id") REFERENCES "public"."programme_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_programme_categories_fk" FOREIGN KEY ("programme_categories_id") REFERENCES "public"."programme_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_programme_categories_fk" FOREIGN KEY ("programme_categories_id") REFERENCES "public"."programme_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_programme_categories_fk" FOREIGN KEY ("programme_categories_id") REFERENCES "public"."programme_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_programme_categories_fk" FOREIGN KEY ("programme_categories_id") REFERENCES "public"."programme_categories"("id") ON DELETE cascade ON UPDATE no action;
  
  CREATE INDEX "pages_rels_programme_categories_id_idx" ON "pages_rels" USING btree ("programme_categories_id");
  CREATE INDEX "_pages_v_rels_programme_categories_id_idx" ON "_pages_v_rels" USING btree ("programme_categories_id");
  CREATE INDEX "products_rels_programme_categories_id_idx" ON "products_rels" USING btree ("programme_categories_id");
  CREATE INDEX "_products_v_rels_programme_categories_id_idx" ON "_products_v_rels" USING btree ("programme_categories_id");
  CREATE INDEX "payload_locked_documents_rels_programme_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("programme_categories_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE IF EXISTS "programme_categories" DISABLE ROW LEVEL SECURITY;
  DROP TABLE IF EXISTS "programme_categories" CASCADE;
  ALTER TABLE "products_rels" RENAME COLUMN "programme_categories_id" TO "categories_id";
  ALTER TABLE "_products_v_rels" RENAME COLUMN "programme_categories_id" TO "categories_id";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_programme_categories_fk";
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_programme_categories_fk";
  ALTER TABLE "products_rels" DROP CONSTRAINT IF EXISTS "products_rels_programme_categories_fk";
  ALTER TABLE "_products_v_rels" DROP CONSTRAINT IF EXISTS "_products_v_rels_programme_categories_fk";
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_programme_categories_fk";
  
  DROP INDEX IF EXISTS "pages_rels_programme_categories_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_programme_categories_id_idx";
  DROP INDEX IF EXISTS "products_rels_programme_categories_id_idx";
  DROP INDEX IF EXISTS "_products_v_rels_programme_categories_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_programme_categories_id_idx";
  
  ALTER TABLE "products_rels" ADD CONSTRAINT "products_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_products_v_rels" ADD CONSTRAINT "_products_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  
  CREATE INDEX "products_rels_categories_id_idx" ON "products_rels" USING btree ("categories_id");
  CREATE INDEX "_products_v_rels_categories_id_idx" ON "_products_v_rels" USING btree ("categories_id");
  
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "programme_categories_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "programme_categories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "programme_categories_id";`)
}
