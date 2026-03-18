import Link from 'next/link'
import type { Media, Product } from '@/payload-types' // Assuming Product type can be reused for Programme
import { GridTileImage } from '@/components/Grid/tile'

type ProgrammeGridItemType = {
  programme: Product
}

export const ProgrammeGridItem = ({ programme }: ProgrammeGridItemType) => {
  return (
    <Link href={`/programmes/${programme.slug}`} className="group">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        {typeof programme.meta?.image === 'object' && programme.meta.image !== null ? (
          <GridTileImage
            media={programme.meta.image as Media}
            // Label for the grid item, showing price and title.
            // Adjust if programme has a different price field.
            label={{
              amount: programme.price!, // Using the new 'price' field
              title: programme.title,
            }}
          />
        ) : null}
      </div>
      <div className="mt-4 text-neutral-700">
        <h3 className="font-medium">{programme.title}</h3>
        {/* Displaying price, assuming 'price' field is the new singular price */}
        {programme.price && (
          <div className="font-mono text-sm uppercase">
            <p>${programme.price.toFixed(2)}</p>
          </div>
        )}
      </div>
    </Link>
  )
}
