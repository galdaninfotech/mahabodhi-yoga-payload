import type { Metadata } from 'next'

import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const newsletters = await payload.find({
    collection: 'newsletters',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = newsletters.docs.map(({ slug }) => {
    return { slug: slug as string }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function NewsletterPage({ params }: Args) {
  const { slug } = await params

  if (!slug) {
    return notFound()
  }

  const { isEnabled: draft } = await draftMode()

  const newsletter = await queryNewsletterBySlug({
    slug,
  })

  if (!newsletter) {
    return notFound()
  }

  return (
    <article className="pt-16 pb-24 container-xl">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsletter.title}</h1>
          {newsletter.publishedAt && (
            <p className="text-muted-foreground">
              {new Date(newsletter.publishedAt).toLocaleDateString()}
            </p>
          )}
        </header>

        {newsletter.heroImage && typeof newsletter.heroImage !== 'string' && (
          <div className="w-full relative mb-12 rounded-xl overflow-hidden aspect-video bg-muted/50 border">
            <Media resource={newsletter.heroImage} fill imgClassName="object-cover" />
          </div>
        )}

        <div className="prose md:prose-md dark:prose-invert max-w-none mx-auto mb-10">
          {newsletter.content && (
            <RichText className="max-w-none" data={newsletter.content} enableGutter={false} />
          )}
        </div>

        {newsletter.predesignedPDF &&
          typeof newsletter.predesignedPDF === 'object' &&
          newsletter.predesignedPDF !== null &&
          'url' in newsletter.predesignedPDF &&
          newsletter.predesignedPDF.url && (
            <div className="mt-12 text-center p-8 bg-muted rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Download as PDF</h3>
              <p className="text-muted-foreground mb-6">
                You can also consume this newsletter as a PDF document.
              </p>
              <Button asChild size="lg">
                <a
                  href={newsletter.predesignedPDF.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </a>
              </Button>
            </div>
          )}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params

  if (!slug) {
    return { title: 'Not Found' }
  }

  const newsletter = await queryNewsletterBySlug({
    slug,
  })

  if (!newsletter) {
    return { title: 'Not Found' }
  }

  return generateMeta({ doc: newsletter as any })
}

const queryNewsletterBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'newsletters',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }]),
      ],
    },
  })

  return result.docs?.[0] || null
}
