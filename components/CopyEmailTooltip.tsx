'use client'

import { useState, useCallback } from 'react'

const EMAIL = 'hello@portlandpictureco.com'

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.75 15.077a3.25 3.25 0 0 0 3.25-3.25v-4.5a3.25 3.25 0 0 0-3.25-3.25h-4.5A3.25 3.25 0 0 0 4 7.327v4.5a3.25 3.25 0 0 0 3.25 3.25h4.5Zm1.75-3.25a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.967.784-1.75 1.75-1.75h4.5c.966 0 1.75.783 1.75 1.75v4.5Z" />
      <path d="M10.957 1.941c.487.451.062 1.136-.602 1.136-.244 0-.472-.106-.678-.235a1.742 1.742 0 0 0-.927-.265h-4.5c-.477 0-.91.19-1.225.5H3v.025c-.31.316-.5.748-.5 1.225v4.5c0 .34.097.658.265.927.13.206.235.434.235.677 0 .665-.685 1.09-1.136.603A3.239 3.239 0 0 1 1 8.827v-4.5a3.25 3.25 0 0 1 3.25-3.25h4.5c.852 0 1.627.328 2.207.864Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1.00195C4.13401 1.00195 1 4.13596 1 8.00195C1 11.8679 4.13401 15.002 8 15.002C11.866 15.002 15 11.8679 15 8.00195C15 4.13596 11.866 1.00195 8 1.00195ZM12.101 6.10299C12.433 5.77105 12.433 5.23286 12.101 4.90091C11.7691 4.56897 11.2309 4.56897 10.899 4.90091L6.5 9.29987L5.10104 7.90091C4.7691 7.56897 4.2309 7.56897 3.89896 7.90091C3.56701 8.23286 3.56701 8.77105 3.89896 9.10299L5.89896 11.103C6.2309 11.4349 6.7691 11.4349 7.10104 11.103L12.101 6.10299Z" />
    </svg>
  )
}

export function CopyEmailTooltip() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Email text */}
      <button
        onClick={handleCopy}
        className="text-[13px] text-sage hover:text-forest cursor-pointer transition-colors duration-100"
        style={{
          textDecoration: hovered ? 'underline' : 'none',
          textUnderlineOffset: '3px',
        }}
      >
        {EMAIL}
      </button>

      {/* Tooltip */}
      <span
        className="absolute left-1/2 pointer-events-none flex items-center gap-1.5"
        style={{
          bottom: 'calc(100% + 8px)',
          transform: `translateX(-50%) scale(${hovered ? 1 : 0.9})`,
          opacity: hovered ? 1 : 0,
          padding: '6px 8px',
          borderRadius: '8px',
          backgroundColor: '#161613',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0px 7px 32px rgba(0,0,0,0.35)',
          zIndex: 1100,
          whiteSpace: 'nowrap',
          transformOrigin: 'bottom center',
          animation: hovered
            ? 'tooltipOpen 0.12s cubic-bezier(0.25,0.46,0.45,0.94) forwards'
            : 'tooltipClose 0.12s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
        }}
      >
        {/* Copy/Check icon */}
        <span className="relative w-3 h-3 flex-shrink-0">
          <span
            className="absolute inset-0 flex items-center justify-center"
            style={{
              color: '#d0d6e0',
              opacity: copied ? 0 : 1,
              transform: copied ? 'scale(0.8)' : 'scale(1)',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
          >
            <CopyIcon />
          </span>
          <span
            className="absolute inset-0 flex items-center justify-center"
            style={{
              color: '#4ade80',
              opacity: copied ? 1 : 0,
              transform: copied ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
          >
            <CheckIcon />
          </span>
        </span>

        {/* Tooltip text */}
        <span
          style={{
            fontSize: '12px',
            fontWeight: 510,
            lineHeight: '17px',
            color: '#d0d6e0',
          }}
        >
          {copied ? 'Copied' : 'Copy email'}
        </span>
      </span>
    </span>
  )
}
