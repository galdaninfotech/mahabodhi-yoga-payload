import React from 'react'

type Props = {
  amount?: number | null
  className?: string
  as?: 'span' | 'p'
}

export const Price: React.FC<Props> = ({
  amount,
  className,
  as = 'p',
}) => {
  const Element = as

  if (typeof amount !== 'number') {
    return null
  }

  return (
    <Element className={className}>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)}
    </Element>
  )
}
