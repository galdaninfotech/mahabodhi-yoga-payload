'use client'
import type { Product } from '@/payload-types' // Assuming Product type can be reused for Programme
import { RichText } from '@/components/RichText'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type ProgrammeDescriptionProps = {
  programme: Product
}

export function ProgrammeDescription({ programme }: ProgrammeDescriptionProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-2xl font-medium">{programme.title}</h1>
        <div className="uppercase font-mono">
          {/* Displaying price, assuming 'price' field is the new singular price */}
          {programme.price !== undefined && programme.price !== null && (
            <p>${programme.price.toFixed(2)}</p>
          )}
        </div>
      </div>
      {programme.description ? (
        <RichText className="" data={programme.description} enableGutter={false} />
      ) : null}
      <hr />

      {/* Removed variant and stock logic */}

      {/* Booking Button */}
      {programme.paymentLink && (
        <Button
          asChild
          className="mt-4 w-full"
        >
          <Link href={programme.paymentLink} target="_blank" rel="noopener noreferrer">
            Book Now
          </Link>
        </Button>
      )}
    </div>
  )
}
