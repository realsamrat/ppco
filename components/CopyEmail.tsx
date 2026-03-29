'use client'

import { useState, useCallback } from 'react'

const EMAIL = 'hello@portlandpictureco.com'

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.75 15.077a3.25 3.25 0 0 0 3.25-3.25v-4.5a3.25 3.25 0 0 0-3.25-3.25h-4.5A3.25 3.25 0 0 0 4 7.327v4.5a3.25 3.25 0 0 0 3.25 3.25h4.5Zm1.75-3.25a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.967.784-1.75 1.75-1.75h4.5c.966 0 1.75.783 1.75 1.75v4.5Z" />
      <path d="M10.957 1.941c.487.451.062 1.136-.602 1.136-.244 0-.472-.106-.678-.235a1.742 1.742 0 0 0-.927-.265h-4.5c-.477 0-.91.19-1.225.5H3v.025c-.31.316-.5.748-.5 1.225v4.5c0 .34.097.658.265.927.13.206.235.434.235.677 0 .665-.685 1.09-1.136.603A3.239 3.239 0 0 1 1 8.827v-4.5a3.25 3.25 0 0 1 3.25-3.25h4.5c.852 0 1.627.328 2.207.864Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 1.00195C4.13401 1.00195 1 4.13596 1 8.00195C1 11.8679 4.13401 15.002 8 15.002C11.866 15.002 15 11.8679 15 8.00195C15 4.13596 11.866 1.00195 8 1.00195ZM12.101 6.10299C12.433 5.77105 12.433 5.23286 12.101 4.90091C11.7691 4.56897 11.2309 4.56897 10.899 4.90091L6.5 9.29987L5.10104 7.90091C4.7691 7.56897 4.2309 7.56897 3.89896 7.90091C3.56701 8.23286 3.56701 8.77105 3.89896 9.10299L5.89896 11.103C6.2309 11.4349 6.7691 11.4349 7.10104 11.103L12.101 6.10299Z" />
    </svg>
  )
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center cursor-pointer h-[28px]"
    >
      {/* Icon container — width expands to reveal */}
      <span
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: hovered ? '20px' : '0px',
          opacity: hovered ? 1 : 0,
          transition: 'width 0.3s ease, opacity 0.3s ease',
        }}
      >
        <span className="relative w-[14px] h-[14px] flex-shrink-0">
          <span
            className="absolute inset-0 flex items-center justify-center text-sage"
            style={{
              opacity: copied ? 0 : 1,
              transform: copied ? 'scale(0.8)' : 'scale(1)',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
          >
            <CopyIcon />
          </span>
          <span
            className="absolute inset-0 flex items-center justify-center text-terracotta"
            style={{
              opacity: copied ? 1 : 0,
              transform: copied ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.25s, transform 0.25s',
            }}
          >
            <CheckIcon />
          </span>
        </span>
      </span>

      {/* Email text */}
      <span
        className="text-[13px] text-sage"
        style={{
          textDecoration: hovered ? 'underline' : 'none',
          textUnderlineOffset: '3px',
          color: hovered ? '#161613' : undefined,
          transition: 'color 0.15s ease',
        }}
      >
        {EMAIL}
      </span>
    </button>
  )
}
