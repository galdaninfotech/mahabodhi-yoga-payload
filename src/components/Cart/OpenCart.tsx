import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { ShoppingBasket } from 'lucide-react'
import React from 'react'

export function OpenCartButton({
  className,
  quantity,
  ...rest
}: {
  className?: string
  quantity?: number
}) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={clsx('relative -top-4 right-2 flex items-center justify-center p-0 h-10 w-10 hover:bg-primary/10', className)}
      {...rest}
    >
      <ShoppingBasket className="size-7 text-[#d19a4a] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" strokeWidth={2.5} />
      {quantity ? (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white dark:border-black shadow-md">
          {quantity}
        </span>
      ) : null}
      <span className="sr-only">Bodhi Basket</span>
    </Button>
  )
}
