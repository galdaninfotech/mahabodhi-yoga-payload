import { Grid } from '@/components/Grid'
import { Media } from '@/components/Media'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { getPayload } from 'payload'

export const metadata: Metadata = {
  description: 'Read our latest newsletters.',
  title: 'Newsletters',
}

export default async function NewslettersPage() {
  const payload = await getPayload({ config: configPromise })
  const { isEnabled: draft } = await draftMode()

  let newsletters
  try {
    newsletters = await payload.find({
      collection: 'newsletters',
      draft,
      overrideAccess: false,
      sort: '-publishedAt',
      limit: 100,
      where: {
        ...(draft ? {} : { _status: { equals: 'published' } }),
      },
      select: {
        title: true,
        slug: true,
        heroImage: true,
        publishedAt: true,
      },
    })
  } catch (error) {
    console.error('Error fetching newsletters:', error)
    throw error
  }

  return (
    <div className="container-xl pt-16 pb-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Newsletters</h1>

      {(!newsletters.docs || newsletters.docs.length === 0) && (
        <p className="mb-4">No newsletters found.</p>
      )}

      {newsletters.docs && newsletters.docs.length > 0 && (
        <Grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.docs.map((newsletter) => {
            return (
              <Link
                key={newsletter.id}
                href={`/newsletters/${newsletter.slug}`}
                className="block h-full transition-transform hover:-translate-y-1"
              >
                <Card className="h-full overflow-hidden flex flex-col">
                  {newsletter.heroImage && typeof newsletter.heroImage !== 'string' && (
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <Media resource={newsletter.heroImage} fill imgClassName="object-cover" />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{newsletter.title}</CardTitle>
                    {newsletter.publishedAt && (
                      <CardDescription>
                        {new Date(newsletter.publishedAt).toLocaleDateString()}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </Grid>
      )}
    </div>
  )
}
