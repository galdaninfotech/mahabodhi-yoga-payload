import { Grid } from '@/components/Grid'
import { ProgrammeGridItem } from '@/components/ProgrammeGridItem' // Renamed from ProductGridItem
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

export const metadata = {
  description: 'Explore our yoga and meditation programmes.',
  title: 'Programmes',
}

type SearchParams = { [key: string]: string | string[] | undefined }

type Props = {
  searchParams: Promise<SearchParams>
}

export default async function ProgrammesPage({ searchParams }: Props) {
  const params = await searchParams
  const searchValue = Array.isArray(params.q) ? params.q[0] : params.q
  const sort = Array.isArray(params.sort) ? params.sort[0] : params.sort
  const category = Array.isArray(params.category) ? params.category[0] : params.category

  const payload = await getPayload({ config: configPromise })

  try {
    const programmes = await payload.find({
      collection: 'products', // Still using 'products' slug for now, but this should be changed to 'programmes' if needed.
      draft: false,
      overrideAccess: false,
      select: {
        title: true,
        slug: true,
        gallery: true,
        categories: true,
        price: true, // Changed from priceInUSD
        paymentLink: true, // Added for the payment button
        updatedAt: true,
        createdAt: true,
      },
      ...(sort ? { sort } : { sort: 'title' }),
      ...(searchValue || category
        ? {
            where: {
              and: [
                {
                  _status: {
                    equals: 'published',
                  },
                },
                ...(searchValue
                  ? [
                      {
                        title: {
                          like: searchValue,
                        },
                      },
                    ]
                  : []),
                ...(category
                  ? [
                      {
                        categories: {
                          equals: category,
                        },
                      },
                    ]
                  : []),
              ],
            },
          }
        : {}),
    })

    const resultsText = programmes.docs.length > 1 ? 'results' : 'result'

    return (
      <div>
        {searchValue ? (
          <p className="mb-4">
            {programmes.docs?.length === 0
              ? 'There are no programmes that match '
              : `Showing ${programmes.docs.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}

        {!searchValue && programmes.docs?.length === 0 && (
          <p className="mb-4">No programmes found. Please try different filters.</p>
        )}

        {programmes?.docs.length > 0 ? (
          <Grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.docs.map((programme) => {
              return <ProgrammeGridItem key={programme.id} programme={programme} />
            })}
          </Grid>
        ) : null}
      </div>
    )
  } catch (error) {
    console.error('Error fetching programmes:', error)
    throw error
  }
}
