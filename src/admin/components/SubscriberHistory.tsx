'use client'
import React, { useEffect, useState } from 'react'
import { useDocumentInfo, useConfig, Button } from '@payloadcms/ui'

interface Log {
  id: string
  newsletter: {
    title: string
    slug: string
  } | string
  sentAt: string
  status: 'success' | 'failed'
  errorMessage?: string
}

const SubscriberHistory: React.FC = () => {
  const { id } = useDocumentInfo()
  const { config } = useConfig()
  const [logs, setLogs] = useState<Log[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // Pagination & Search State
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [totalDocs, setTotalDocs] = useState(0)

  const serverURL = config?.serverURL || ''
  const api = config?.routes?.api || '/api'

  useEffect(() => {
    if (id) {
      setIsLoading(true)
      const params = new URLSearchParams()
      
      // Use bracket notation for reliable filtering in Payload 3.0 REST API
      // Filtering by the relationship field 'subscriber'
      params.append('where[subscriber][equals]', id.toString())

      // Add search filter if query exists
      if (searchQuery.length >= 2) {
        params.append('where[newsletter.title][contains]', searchQuery)
      }

      params.append('limit', '10')
      params.append('page', page.toString())
      params.append('sort', '-sentAt')

      fetch(`${serverURL}${api}/newsletter-logs?${params.toString()}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.docs) {
            setLogs(data.docs)
            setTotalPages(data.totalPages)
            setTotalDocs(data.totalDocs)
          }
        })
        .catch((err) => console.error('Error fetching logs:', err))
        .finally(() => setIsLoading(false))
    }
  }, [id, serverURL, api, page, searchQuery])

  // Reset to page 1 when searching
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }

  if (!id) return null

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by newsletter title..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ 
            padding: '8px 12px', 
            borderRadius: '4px', 
            border: '1px solid #ddd', 
            width: '300px',
            outline: 'none',
            color: '#333'
          }}
        />
        <div style={{ fontSize: '14px', color: '#666' }}>
          Total: <strong>{totalDocs}</strong> records
        </div>
      </div>

      {isLoading ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>Loading history...</div>
      ) : logs.length === 0 ? (
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
          {searchQuery ? 'No matching records found.' : 'This subscriber has not received any newsletters yet.'}
        </div>
      ) : (
        <>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '12px 10px' }}>Newsletter</th>
                <th style={{ padding: '12px 10px' }}>Sent At</th>
                <th style={{ padding: '12px 10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '12px 10px' }}>
                    {typeof log.newsletter === 'object' ? (
                      <strong>{log.newsletter.title}</strong>
                    ) : (
                      log.newsletter
                    )}
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    {new Date(log.sentAt).toLocaleString()}
                  </td>
                  <td style={{ padding: '12px 10px' }}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        backgroundColor: log.status === 'success' ? '#e6fffa' : '#fff5f5',
                        color: log.status === 'success' ? '#2c7a7b' : '#c53030',
                        border: `1px solid ${log.status === 'success' ? '#81e6d9' : '#feb2b2'}`,
                      }}
                    >
                      {log.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
              <Button 
                buttonStyle="secondary" 
                size="small" 
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
              >
                Previous
              </Button>
              <span style={{ fontSize: '14px', color: '#333' }}>
                Page <strong>{page}</strong> of {totalPages}
              </span>
              <Button 
                buttonStyle="secondary" 
                size="small" 
                disabled={page === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default SubscriberHistory
