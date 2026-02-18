'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export const SubscriptionForm: React.FC<{ showNameField?: boolean | null }> = ({ showNameField }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name: showNameField ? name : undefined }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || 'Successfully subscribed!')
        setEmail('')
        setName('')
      } else {
        toast.error(data.error || 'An error occurred.')
      }
    } catch (err) {
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        {showNameField && (
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 py-2 bg-white dark:bg-black border-primary/20 focus-visible:ring-primary flex-1 rounded-sm placeholder:text-sm"
          />
        )}
        <Input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 py-2 bg-white dark:bg-black border-primary/20 focus-visible:ring-primary flex-1 rounded-sm placeholder:text-sm"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-12 w-full px-8 font-oswald whitespace-nowrap sm:w-auto mt-2 rounded-md uppercase"
      >
        {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
      </Button>
    </form>
  )
}
