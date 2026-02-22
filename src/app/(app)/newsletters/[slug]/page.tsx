import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
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

  const payload = await getPayload({ config: configPromise })

  const [nextNewsletterReq, prevNewsletterReq] = await Promise.all([
    payload.find({
      collection: 'newsletters',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      sort: 'publishedAt',
      where: newsletter.publishedAt
        ? {
            and: [
              {
                publishedAt: {
                  greater_than: newsletter.publishedAt,
                },
              },
              ...(draft ? [] : [{ _status: { equals: 'published' } }]),
            ],
          }
        : { and: [{ id: { not_equals: newsletter.id } }] },
    }),
    payload.find({
      collection: 'newsletters',
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      sort: '-publishedAt',
      where: newsletter.publishedAt
        ? {
            and: [
              {
                publishedAt: {
                  less_than: newsletter.publishedAt,
                },
              },
              ...(draft ? [] : [{ _status: { equals: 'published' } }]),
            ],
          }
        : { and: [{ id: { not_equals: newsletter.id } }] },
    }),
  ])

  const nextNewsletter = nextNewsletterReq.docs?.[0] || null
  const prevNewsletter = prevNewsletterReq.docs?.[0] || null

  return (
    <article className="pb-24 pt-0">
      {newsletter.heroImage && typeof newsletter.heroImage !== 'string' ? (
        <div
          className="relative -mt-[11rem] mb-12 flex w-full items-center justify-center overflow-hidden bg-black/80 lg:-mt-[11rem]"
          data-theme="dark"
        >
          <div className="absolute inset-0 z-0 h-full w-full">
            <Media resource={newsletter.heroImage} fill imgClassName="object-cover" priority />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pt-48 pb-16 text-center text-white md:pt-[22rem] md:pb-24">
            <h1 style={{ color: 'white' }} className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{newsletter.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm mt-4 text-white/90">
              {newsletter.populatedAuthors && newsletter.populatedAuthors.length > 0 && (
                <div className="flex items-center gap-1">
                  <span>By</span>
                  <span className="font-medium text-white">
                    {newsletter.populatedAuthors
                      .map((author: any) => author.name)
                      .filter(Boolean)
                      .join(', ')}
                  </span>
                </div>
              )}

              {newsletter.populatedAuthors &&
                newsletter.populatedAuthors.length > 0 &&
                newsletter.publishedAt && <span className="text-white/50">&bull;</span>}

              {newsletter.publishedAt && (
                <time dateTime={newsletter.publishedAt}>
                  {new Date(newsletter.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="container-xl pt-16">
          <div className="max-w-3xl mx-auto">
            <header className="mb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{newsletter.title}</h1>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
                {newsletter.populatedAuthors && newsletter.populatedAuthors.length > 0 && (
                  <div className="flex items-center gap-1">
                    <span>By</span>
                    <span className="font-medium text-foreground">
                      {newsletter.populatedAuthors
                        .map((author: any) => author.name)
                        .filter(Boolean)
                        .join(', ')}
                    </span>
                  </div>
                )}

                {newsletter.populatedAuthors &&
                  newsletter.populatedAuthors.length > 0 &&
                  newsletter.publishedAt && (
                    <span className="text-muted-foreground/50">&bull;</span>
                  )}

                {newsletter.publishedAt && (
                  <time dateTime={newsletter.publishedAt}>
                    {new Date(newsletter.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </div>
            </header>
          </div>
        </div>
      )}

      <div className="container-xl">
        <div className="max-w-3xl mx-auto">
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
              <div className="mt-12 flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-6">Newsletter PDF</h3>
                <div className="w-full aspect-[1/1.4] max-w-4xl border rounded-sm overflow-hidden shadow-sm mb-6 bg-muted/20">
                  <iframe
                    src={newsletter.predesignedPDF.url as string}
                    className="w-full h-full"
                    title="PDF Preview"
                  />
                </div>
                <Button asChild size="lg">
                  <a
                    href={newsletter.predesignedPDF.url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download PDF
                  </a>
                </Button>
              </div>
            )}

          {(prevNewsletter || nextNewsletter) && (
            <nav className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevNewsletter ? (
                <Button
                  asChild
                  variant="ghost"
                  className="w-full sm:w-auto sm:max-w-[45%] flex justify-start"
                >
                  <Link
                    href={`/newsletters/${prevNewsletter.slug as string}`}
                    className="flex items-center gap-2 border border-transparent hover:border-border"
                  >
                    <ChevronLeft className="h-4 w-4 shrink-0" />
                    <span className="truncate">{prevNewsletter.title as string}</span>
                  </Link>
                </Button>
              ) : (
                <div className="hidden sm:block sm:max-w-[45%]" />
              )}

              {nextNewsletter ? (
                <Button
                  asChild
                  variant="ghost"
                  className="w-full sm:w-auto sm:max-w-[45%] flex justify-end"
                >
                  <Link
                    href={`/newsletters/${nextNewsletter.slug as string}`}
                    className="flex items-center gap-2 border border-transparent hover:border-border"
                  >
                    <span className="truncate">{nextNewsletter.title as string}</span>
                    <ChevronRight className="h-4 w-4 shrink-0" />
                  </Link>
                </Button>
              ) : (
                <div className="hidden sm:block sm:max-w-[45%]" />
              )}
            </nav>
          )}
        </div>
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
