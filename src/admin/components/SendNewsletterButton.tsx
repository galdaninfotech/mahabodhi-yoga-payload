'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { useDocumentInfo, useConfig, toast, useForm, useFormFields, Tooltip } from '@payloadcms/ui'
import { Button } from '@/components/ui/button'

interface Subscriber {
  id: string
  email: string
  name?: string
}

const SendNewsletterButton: React.FC = () => {
  const { id, collectionSlug } = useDocumentInfo()
  const { config } = useConfig()
  
  const serverURL = config?.serverURL || ''
  const api = config?.routes?.api || '/api'

  const [isSending, setIsSending] = useState(false)
  const [groups, setGroups] = useState<{ id: string; name: string }[]>([])
  const [showModal, setShowModal] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState<string>('all')
  
  // Search and Multi-select state
  const [sendType, setSendType] = useState<'group' | 'individual'>('group')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Subscriber[]>([])
  const [selectedSubscribers, setSelectedSubscribers] = useState<Subscriber[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const docStatus = useFormFields(([fields]) => fields?._status?.value)
  const isPublished = docStatus === 'published'

  useEffect(() => {
    if (showModal && sendType === 'group') {
      fetch(`${serverURL}${api}/subscriber-groups?limit=100`)
        .then((res) => res.json())
        .then((data) => {
          if (data.docs) {
            setGroups(data.docs)
          }
        })
        .catch(err => console.error('Error fetching groups:', err))
    }
  }, [showModal, serverURL, api, sendType])

  // Search effect
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.length >= 2) {
        setIsSearching(true)
        
        // Use bracket-style query parameters for Payload 3.0 REST API
        const params = new URLSearchParams()
        params.append('where[or][0][email][contains]', searchQuery)
        params.append('where[or][1][name][contains]', searchQuery)
        params.append('limit', '10')
        
        fetch(`${serverURL}${api}/subscribers?${params.toString()}`)
          .then(res => res.json())
          .then(data => {
            if (data.docs) {
              setSearchResults(data.docs)
            }
          })
          .catch(err => console.error('Error searching subscribers:', err))
          .finally(() => setIsSearching(false))
      } else {
        setSearchResults([])
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery, serverURL, api])

  const toggleSubscriber = (sub: Subscriber) => {
    setSelectedSubscribers(prev => {
      const isSelected = prev.some(s => s.id === sub.id)
      if (isSelected) {
        return prev.filter(s => s.id !== sub.id)
      } else {
        return [...prev, sub]
      }
    })
  }

  const removeSubscriber = (subId: string) => {
    setSelectedSubscribers(prev => prev.filter(s => s.id !== subId))
  }

  const handleSend = useCallback(async () => {
    if (!isPublished) {
      toast.error('Only published newsletters can be sent')
      return
    }

    if (sendType === 'individual' && selectedSubscribers.length === 0) {
      toast.error('Please select at least one subscriber')
      return
    }

    setIsSending(true)
    try {
      const body: any = {}
      if (sendType === 'individual') {
        body.subscriberIds = selectedSubscribers.map(s => s.id)
      } else {
        body.groupId = selectedGroup === 'all' ? null : selectedGroup
      }

      const response = await fetch(`${serverURL}${api}/${collectionSlug}/${id}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Newsletter sent successfully!')
        setShowModal(false)
        setSearchQuery('')
        setSelectedSubscribers([])
      } else {
        toast.error(result.error || 'Failed to send newsletter')
      }
    } catch (error) {
      console.error('Error sending newsletter:', error)
      toast.error('An error occurred while sending the newsletter')
    } finally {
      setIsSending(false)
    }
  }, [id, collectionSlug, serverURL, api, selectedGroup, sendType, selectedSubscribers, isPublished])

  if (!id) return null

  return (
    <div style={{ display: 'inline-block', marginLeft: '10px' }}>
      <div 
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => !isPublished && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Button
          onClick={() => isPublished && setShowModal(true)}
          disabled={isSending || !isPublished}
          variant="secondary"
          size="sm"
          style={{ opacity: isPublished ? 1 : 0.5, cursor: isPublished ? 'pointer' : 'not-allowed' }}
        >
          Send
        </Button>
        <Tooltip show={showTooltip} position="top">
          Publish the newsletter first to enable sending
        </Tooltip>
      </div>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              width: '60vw',
              height: '65vh',
              overflowY: 'auto',
              color: '#333',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              fontFamily: 'inherit'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '1.25rem' }}>Send Newsletter</h3>
            
            <div style={{ marginBottom: '20px', display: 'flex', gap: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: sendType === 'group' ? '600' : '400' }}>
                <input 
                  type="radio" 
                  name="sendType"
                  checked={sendType === 'group'} 
                  onChange={() => setSendType('group')} 
                />
                Group Selection
              </label>
              <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: sendType === 'individual' ? '600' : '400' }}>
                <input 
                  type="radio" 
                  name="sendType"
                  checked={sendType === 'individual'} 
                  onChange={() => setSendType('individual')} 
                />
                Individual Selection
              </label>
            </div>

            {sendType === 'group' ? (
              <div style={{ marginBottom: '20px' }}>
                <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#666' }}>Select subscriber group:</p>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' }}
                >
                  <option value="all">All Subscribers</option>
                  {groups.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div style={{ marginBottom: '20px' }}>
                {/* Selected Tags */}
                {selectedSubscribers.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '15px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '6px', border: '1px dashed #ccc' }}>
                    {selectedSubscribers.map(sub => (
                      <div 
                        key={sub.id} 
                        style={{ 
                          backgroundColor: '#007bff', 
                          color: 'white', 
                          padding: '4px 10px', 
                          borderRadius: '16px', 
                          fontSize: '0.8rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '6px' 
                        }}
                      >
                        <span>{sub.name || sub.email}</span>
                        <span 
                          onClick={() => removeSubscriber(sub.id)} 
                          style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: 1 }}
                        >
                          &times;
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <p style={{ marginBottom: '8px', fontSize: '0.9rem', color: '#666' }}>Search and select subscribers:</p>
                <input
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', outline: 'none' }}
                />
                
                {isSearching && <p style={{ fontSize: '12px', color: '#007bff' }}>Searching...</p>}
                
                <div style={{ border: '1px solid #eee', borderRadius: '4px', maxHeight: '180px', overflowY: 'auto', backgroundColor: '#fff' }}>
                  {searchResults.map(sub => {
                    const isSelected = selectedSubscribers.some(s => s.id === sub.id)
                    return (
                      <div 
                        key={sub.id}
                        onClick={() => toggleSubscriber(sub)}
                        style={{
                          padding: '10px 15px',
                          cursor: 'pointer',
                          backgroundColor: isSelected ? '#e7f3ff' : 'transparent',
                          borderBottom: '1px solid #eee',
                          fontSize: '0.9rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => !isSelected && (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                        onMouseLeave={(e) => !isSelected && (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <div>
                          <div style={{ fontWeight: '600' }}>{sub.name || 'No Name'}</div>
                          <div style={{ fontSize: '0.8rem', color: '#666' }}>{sub.email}</div>
                        </div>
                        {isSelected && (
                          <div style={{ color: '#007bff', fontWeight: 'bold' }}>✓</div>
                        )}
                      </div>
                    )
                  })}
                  {searchQuery.length >= 2 && searchResults.length === 0 && !isSearching && (
                    <p style={{ padding: '15px', fontSize: '0.9rem', color: '#999', textAlign: 'center' }}>No subscribers found</p>
                  )}
                  {searchQuery.length < 2 && (
                    <p style={{ padding: '15px', fontSize: '0.9rem', color: '#999', textAlign: 'center' }}>Type to find subscribers</p>
                  )}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleSend} disabled={isSending}>
                {isSending ? 'Queuing...' : `Send to ${sendType === 'group' ? (selectedGroup === 'all' ? 'All' : 'Group') : selectedSubscribers.length + ' selected'}`}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SendNewsletterButton