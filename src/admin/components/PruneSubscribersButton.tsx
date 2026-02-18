'use client'
import React, { useState, useEffect } from 'react'
import { useConfig, toast } from '@payloadcms/ui'
import { Button } from '@/components/ui/button'

const PruneSubscribersButton: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [hasDirtyRecords, setHasDirtyRecords] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { config } = useConfig()
  
  const serverURL = config?.serverURL || ''
  const api = config?.routes?.api || '/api'

  useEffect(() => {
    // Check if there are any subscribers with > 1 group
    const checkSubscribers = async () => {
      try {
        const response = await fetch(`${serverURL}${api}/subscribers?limit=1&depth=0&where[groups][exists]=true`)
        const data = await response.json()
        
        // We fetch all to check group length locally since complex count queries on arrays 
        // can be tricky via REST. For 2000+ it's better to have a dedicated count endpoint, 
        // but for now we'll use a slightly more optimized check.
        const allSubscribers = await fetch(`${serverURL}${api}/subscribers?limit=0&depth=0`)
        const allData = await allSubscribers.json()
        
        const dirty = allData.docs.some((sub: any) => sub.groups && sub.groups.length > 1)
        setHasDirtyRecords(dirty)
      } catch (err) {
        console.error('Error checking subscriber data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    checkSubscribers()
  }, [serverURL, api])

  const handlePrune = async () => {
    if (!confirm('Are you sure you want to prune all subscribers? This will permanently remove additional groups from subscribers who have more than one, keeping only the first group.')) {
      return
    }

    setIsProcessing(true)
    try {
      const response = await fetch(`${serverURL}${api}/globals/settings/prune-subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Subscribers pruned successfully!')
        setHasDirtyRecords(false)
      } else {
        toast.error(result.error || 'Failed to prune subscribers')
      }
    } catch (error) {
      console.error('Error pruning subscribers:', error)
      toast.error('An error occurred during pruning')
    } finally {
      setIsProcessing(false)
    }
  }

  if (isLoading || !hasDirtyRecords) return null

  return (
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#ebebeb', borderRadius: '4px' }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#000' }}>Data Cleanup Required?</h4>
      <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#000' }}>
        You have subscribers who belong to multiple groups, but your current setting is <strong>Single Group Mode</strong>. 
        Click below to automatically remove extra groups from all records.
      </p>
      <Button
        onClick={handlePrune}
        disabled={isProcessing}
        variant="destructive"
        style={{ 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          cursor: 'pointer',
          padding: '12px 24px',
          height: 'auto',
          fontSize: '16px'
        }}
      >
        {isProcessing ? 'Pruning...' : 'Prune All Old Subscribers Now'}
      </Button>
    </div>
  )
}

export default PruneSubscribersButton
