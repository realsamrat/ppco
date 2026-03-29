'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface MediaPlayerProps {
  src: string
  poster?: string
  width?: number
  height?: number
  className?: string
  compact?: boolean
}

const PLAYBACK_RATES = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
const IDLE_TIMEOUT = 3000

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) return '00:00'
  const s = Math.floor(Math.abs(seconds))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
}

// --- Icons (exact Linear SVGs) ---

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="m5.604 2.41 7.23 4.502a1.375 1.375 0 0 1-.02 2.345L5.585 13.6a1.375 1.375 0 0 1-2.083-1.18V3.576A1.375 1.375 0 0 1 5.604 2.41Z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="3" y="2" width="3.5" height="12" rx="1" />
      <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
    </svg>
  )
}

function VolumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.756 2.145L3.2 5.43H1.8c-.442 0-.8.384-.8.857v3.426c0 .474.358.857.8.857h1.4l3.556 3.286c.532.38 1.244-.029 1.244-.713V2.858c0-.684-.712-1.092-1.244-.713z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.726 3.578a.625.625 0 01.883-.04 6.278 6.278 0 011.49 2.04c.346.765.526 1.589.526 2.422 0 .833-.18 1.657-.527 2.423a6.278 6.278 0 01-1.489 2.038.625.625 0 11-.843-.922 5.028 5.028 0 001.194-1.632A4.613 4.613 0 0014.375 8c0-.653-.14-1.3-.415-1.907a5.028 5.028 0 00-1.194-1.632.625.625 0 01-.04-.883zm-2.187 2a.625.625 0 01.883-.04c.347.319.626.699.818 1.122a3.236 3.236 0 010 2.68c-.192.423-.47.803-.818 1.121a.625.625 0 11-.844-.922 2.2 2.2 0 00.523-.715 1.981 1.981 0 000-1.648 2.2 2.2 0 00-.523-.715.625.625 0 01-.04-.883z" />
    </svg>
  )
}

function MuteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.756 2.145L3.2 5.43H1.8c-.442 0-.8.384-.8.857v3.426c0 .474.358.857.8.857h1.4l3.556 3.286c.532.38 1.244-.029 1.244-.713V2.858c0-.684-.712-1.092-1.244-.713z" />
      <path d="M11 6L15 10M15 6L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function CaptionsIcon({ active = false }: { active?: boolean }) {
  if (active) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4.5 14.51a.5.5 0 0 0 .797.403L9.25 12H13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1.5v2.51ZM7 9a.5.5 0 0 1 .5-.5h4.243a.5.5 0 1 1 0 1H7.5A.5.5 0 0 1 7 9Zm-3-.5h1.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1 0-1ZM3.5 7a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5Z" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8.757 10.5H13a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h3v2.031L8.757 10.5Zm-3.46 4.413a.5.5 0 0 1-.797-.402V12H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9.25l-3.953 2.913Z" />
      <path d="M3.5 7a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM3.5 9a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM7 9a.5.5 0 0 1 .5-.5h4.243a.5.5 0 1 1 0 1H7.5A.5.5 0 0 1 7 9Z" />
    </svg>
  )
}

function PipIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M7 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9Z" />
      <path d="M3 3.5h8a.5.5 0 0 1 .5.5v1.75a.75.75 0 0 0 1.5 0V4a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1.75a.75.75 0 0 0 0-1.5H3a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6.2168 8.72266C6.50798 8.42824 6.98279 8.4257 7.27734 8.7168C7.57154 9.00799 7.57423 9.48287 7.2832 9.77734L4.59863 12.5H6.2998C6.71402 12.5 7.0498 12.8358 7.0498 13.25C7.04964 13.6641 6.71392 14 6.2998 14H2.75C2.55116 14 2.36036 13.9208 2.21973 13.7803C2.07915 13.6397 2.00008 13.4488 2 13.25V9.75C2 9.33579 2.33579 9 2.75 9C3.16421 9 3.5 9.33579 3.5 9.75V11.4775L6.2168 8.72266Z" />
      <path d="M13.25 2C13.4488 2.00006 13.6397 2.07917 13.7803 2.21973C13.9208 2.36033 14 2.55119 14 2.75V6.25C14 6.66414 13.6641 6.99988 13.25 7C12.8358 7 12.5 6.66421 12.5 6.25V4.52246L9.7832 7.27734C9.49206 7.57173 9.01721 7.57419 8.72266 7.2832C8.42838 6.99201 8.42575 6.51716 8.7168 6.22266L11.4014 3.5H9.7002C9.28598 3.5 8.9502 3.16421 8.9502 2.75C8.95028 2.33586 9.28603 2 9.7002 2H13.25Z" />
    </svg>
  )
}

function ExitFullscreenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.7832 7.27734C9.49201 7.57176 9.01721 7.5743 8.72266 7.2832C8.42846 6.99201 8.42577 6.51713 8.7168 6.22266L11.4014 3.5H9.7002C9.28598 3.5 8.9502 3.16421 8.9502 2.75C8.95036 2.33586 9.28608 2 9.7002 2H13.25C13.4488 2.00006 13.6396 2.0792 13.7803 2.21973C13.9208 2.36033 14 2.55119 14 2.75V6.25C14 6.66421 13.6642 7 13.25 7C12.8358 7 12.5 6.66421 12.5 6.25V4.52246L9.7832 7.27734Z" />
      <path d="M6.2168 8.72266C6.50799 8.42824 6.98279 8.4257 7.27734 8.7168C7.57162 9.00799 7.57425 9.48284 7.2832 9.77734L4.59863 12.5H6.2998C6.71402 12.5 7.0498 12.8358 7.0498 13.25C7.04964 13.6641 6.71392 14 6.2998 14H2.75C2.55119 14 2.36039 13.9208 2.21973 13.7803C2.07915 13.6397 2 13.4488 2 13.25V9.75C2 9.33579 2.33579 9 2.75 9C3.16421 9 3.5 9.33579 3.5 9.75V11.4775L6.2168 8.72266Z" />
    </svg>
  )
}

export default function MediaPlayer({
  src,
  poster,
  width = 1920,
  height = 1280,
  className = '',
  compact = false,
}: MediaPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [idle, setIdle] = useState(false)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [hoverX, setHoverX] = useState<number | null>(null)
  const [captionsOn, setCaptionsOn] = useState(false)

  const aspectRatio = `${width} / ${height}`

  // --- Controls ---

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play()
    else v.pause()
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }, [])

  const handleVolumeChange = useCallback((val: number) => {
    const v = videoRef.current
    if (!v) return
    const clamped = Math.max(0, Math.min(1, val))
    v.volume = clamped
    setVolume(clamped)
    if (clamped === 0) { v.muted = true; setMuted(true) }
    else if (v.muted) { v.muted = false; setMuted(false) }
  }, [])

  const seek = useCallback((time: number) => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = Math.max(0, Math.min(time, v.duration || 0))
  }, [])

  const changeRate = useCallback((rate: number) => {
    setPlaybackRate(rate)
    if (videoRef.current) videoRef.current.playbackRate = rate
  }, [])

  const cycleRate = useCallback((dir: number) => {
    setPlaybackRate((prev) => {
      const idx = PLAYBACK_RATES.indexOf(prev)
      const next = PLAYBACK_RATES[Math.max(0, Math.min(PLAYBACK_RATES.length - 1, idx + dir))]
      if (next !== undefined) {
        if (videoRef.current) videoRef.current.playbackRate = next
        return next
      }
      return prev
    })
  }, [])

  const toggleFullscreen = useCallback(() => {
    const c = containerRef.current
    if (!c) return
    if (!document.fullscreenElement) c.requestFullscreen()
    else document.exitFullscreen()
  }, [])

  const togglePip = useCallback(async () => {
    const v = videoRef.current
    if (!v) return
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture()
      else await v.requestPictureInPicture()
    } catch {}
  }, [])

  const toggleCaptions = useCallback(() => {
    setCaptionsOn((prev) => {
      const v = videoRef.current
      if (v && v.textTracks.length > 0) {
        v.textTracks[0].mode = prev ? 'hidden' : 'showing'
      }
      return !prev
    })
  }, [])

  // --- Idle ---
  const resetIdleTimer = useCallback(() => {
    setIdle(false)
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    if (playing) {
      idleTimerRef.current = setTimeout(() => setIdle(true), IDLE_TIMEOUT)
    }
  }, [playing])

  useEffect(() => {
    resetIdleTimer()
    return () => { if (idleTimerRef.current) clearTimeout(idleTimerRef.current) }
  }, [playing, resetIdleTimer])

  // --- Video events ---
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    // Force metadata load if duration not yet available
    if (!v.duration || isNaN(v.duration)) {
      v.load()
    } else {
      setDuration(v.duration)
    }

    const onLoadedMetadata = () => setDuration(v.duration)
    const onTimeUpdate = () => setCurrentTime(v.currentTime)
    const onDurationChange = () => setDuration(v.duration)
    const onProgress = () => {
      if (v.buffered.length > 0) setBuffered(v.buffered.end(v.buffered.length - 1))
    }
    const onEnded = () => setPlaying(false)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    v.addEventListener('loadedmetadata', onLoadedMetadata)
    v.addEventListener('timeupdate', onTimeUpdate)
    v.addEventListener('durationchange', onDurationChange)
    v.addEventListener('progress', onProgress)
    v.addEventListener('ended', onEnded)
    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    return () => {
      v.removeEventListener('loadedmetadata', onLoadedMetadata)
      v.removeEventListener('timeupdate', onTimeUpdate)
      v.removeEventListener('durationchange', onDurationChange)
      v.removeEventListener('progress', onProgress)
      v.removeEventListener('ended', onEnded)
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
    }
  }, [])

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  // --- Keyboard ---
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (!container.contains(document.activeElement) && document.activeElement !== container) return
      switch (e.key) {
        case 'k': case ' ': e.preventDefault(); togglePlay(); break
        case 'm': e.preventDefault(); toggleMute(); break
        case 'f': e.preventDefault(); toggleFullscreen(); break
        case 'c': e.preventDefault(); toggleCaptions(); break
        case '<': case ',': e.preventDefault(); cycleRate(-1); break
        case '>': case '.': e.preventDefault(); cycleRate(1); break
        case 'ArrowLeft': e.preventDefault(); if (videoRef.current) seek(videoRef.current.currentTime - 5); break
        case 'ArrowRight': e.preventDefault(); if (videoRef.current) seek(videoRef.current.currentTime + 5); break
      }
      resetIdleTimer()
    }
    container.addEventListener('keydown', onKeyDown)
    return () => container.removeEventListener('keydown', onKeyDown)
  }, [togglePlay, toggleMute, toggleFullscreen, toggleCaptions, cycleRate, seek, resetIdleTimer])

  // --- Progress bar ---
  const getProgressFraction = useCallback((e: React.MouseEvent | MouseEvent) => {
    const bar = progressRef.current
    if (!bar) return 0
    const rect = bar.getBoundingClientRect()
    return Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
  }, [])

  const onProgressDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const frac = getProgressFraction(e)
    seek(frac * (duration || 0))
    const onMove = (ev: MouseEvent) => seek(getProgressFraction(ev) * (duration || 0))
    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [duration, seek, getProgressFraction])

  const onProgressHover = useCallback((e: React.MouseEvent) => {
    const bar = progressRef.current
    if (!bar) return
    const rect = bar.getBoundingClientRect()
    setHoverX(e.clientX - rect.left)
  }, [])

  // --- Volume slider ---
  const onVolumeSliderDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    handleVolumeChange(1 - (e.clientY - rect.top) / rect.height)
    const onMove = (ev: MouseEvent) => handleVolumeChange(1 - (ev.clientY - rect.top) / rect.height)
    const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [handleVolumeChange])

  const playedPct = duration ? (currentTime / duration) * 100 : 0
  const bufferedPct = duration ? (buffered / duration) * 100 : 0
  const remaining = Math.max(0, duration - currentTime)
  const controlsVisible = !playing || !idle

  // Hover time preview
  const hoverFrac = hoverX !== null && progressRef.current
    ? hoverX / progressRef.current.getBoundingClientRect().width
    : null
  const hoverTime = hoverFrac !== null && duration ? hoverFrac * duration : null

  const btnClass = 'flex h-8 w-8 shrink-0 items-center justify-center rounded text-[#f7f8f8] transition-all duration-150 hover:backdrop-blur-[8px] hover:bg-white/[0.16] active:scale-[0.97]'

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Video player"
      tabIndex={0}
      className={`relative overflow-hidden rounded-lg select-none outline-none ${className}`}
      style={{
        aspectRatio,
        border: '1px solid rgba(0,0,0,0.05)',
        cursor: idle && playing ? 'none' : 'default',
      }}
      onMouseMove={resetIdleTimer}
      onMouseEnter={resetIdleTimer}
      onMouseLeave={() => { if (playing) setIdle(true) }}
      onClick={(e) => {
        if (e.target === videoRef.current || (e.target as HTMLElement).dataset.videoOverlay) togglePlay()
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        crossOrigin="anonymous"
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ aspectRatio }}
      />

      {/* Click overlay */}
      <div data-video-overlay="true" className="absolute inset-0" />

      {/* Bottom gradient */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0"
        style={{ height: 120 }}
        animate={{ opacity: controlsVisible ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="h-full w-full" style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.45) 10px, rgba(0,0,0,0.35) 24px, transparent 120px)',
        }} />
      </motion.div>

      {/* Controls */}
      <motion.div
        className="absolute inset-x-0 z-10 flex items-center max-sm:!bottom-[10px] max-sm:!px-3 max-sm:!gap-[6px]"
        style={{ bottom: 32, maxWidth: 1120, paddingInline: 'min(80px, 10%)', marginInline: 'auto', gap: 12 }}
        animate={{ opacity: controlsVisible ? 1 : 0, y: controlsVisible ? 0 : 16 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Play/Pause */}
        <button type="button" aria-label={playing ? 'Pause (k)' : 'Play (k)'} onClick={(e) => { e.stopPropagation(); togglePlay() }} className={btnClass}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>

        {/* Volume */}
        <div className="relative flex shrink-0 items-center" onMouseEnter={() => setShowVolumeSlider(true)} onMouseLeave={() => setShowVolumeSlider(false)}>
          <button type="button" aria-label={muted ? 'Unmute (m)' : 'Mute (m)'} onClick={(e) => { e.stopPropagation(); toggleMute() }} className={btnClass}>
            {muted || volume === 0 ? <MuteIcon /> : <VolumeIcon />}
          </button>
          <AnimatePresence>
            {showVolumeSlider && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 items-center justify-center rounded-lg px-2 py-3"
                style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.16)', height: 80 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="relative w-1 rounded-full"
                  style={{ height: '100%', background: 'rgba(255,255,255,0.16)', cursor: 'pointer' }}
                  onMouseDown={onVolumeSliderDown}
                  role="slider" aria-label="Volume" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round((muted ? 0 : volume) * 100)}
                >
                  <div className="absolute inset-x-0 bottom-0 rounded-full bg-white" style={{ height: `${(muted ? 0 : volume) * 100}%` }} />
                  <div className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white" style={{ bottom: `calc(${(muted ? 0 : volume) * 100}% - 4px)` }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center: elapsed + seek + remaining */}
        <div className="flex flex-1 items-center gap-2">
          <time className="shrink-0 text-[13px] font-medium tabular-nums text-[#f7f8f8]" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 510 }}>
            {formatTime(currentTime)}
          </time>

          {/* Seek bar */}
          <div
            ref={progressRef}
            className="relative flex flex-1 items-center"
            style={{ height: 20, cursor: 'crosshair' }}
            onMouseDown={onProgressDown}
            onMouseMove={onProgressHover}
            onMouseLeave={() => setHoverX(null)}
            role="slider" aria-label="Seek" aria-valuemin={0} aria-valuemax={Math.floor(duration)} aria-valuenow={Math.floor(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          >
            {/* Track */}
            <div className="relative w-full overflow-hidden rounded-full transition-[height] duration-150"
              style={{ height: isDragging ? 7 : 4, background: 'rgba(255,255,255,0.16)' }}
            >
              <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${bufferedPct}%`, background: 'rgba(255,255,255,0.16)' }} />
              <div className="absolute inset-y-0 left-0 rounded-full bg-white" style={{ width: `${playedPct}%` }} />
            </div>

            {/* Hover preview line */}
            {hoverX !== null && (
              <div className="pointer-events-none absolute" style={{ left: hoverX, top: '50%', transform: 'translate(-0.5px, -50%)' }}>
                <div style={{ width: 1, height: 36, background: isDragging ? 'white' : 'rgba(255,255,255,0.48)' }} />
              </div>
            )}

            {/* Hover timestamp */}
            {hoverX !== null && hoverTime !== null && (
              <div className="pointer-events-none absolute" style={{ left: hoverX, bottom: 'calc(100% + 16px)', transform: 'translateX(-50%)' }}>
                <span className="whitespace-nowrap text-[12px] text-[#f7f8f8]" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 510 }}>
                  {formatTime(hoverTime)}
                  <span style={{ color: 'rgba(255,255,255,0.48)', fontWeight: 400 }}> / {formatTime(duration)}</span>
                </span>
              </div>
            )}
          </div>

          <time className="shrink-0 text-[13px] font-medium tabular-nums text-[#f7f8f8]" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 510 }}>
            -{formatTime(remaining)}
          </time>
        </div>

        {/* Playback rate (native select) — hidden in compact mode unless fullscreen */}
        <div className={`shrink-0 ${compact && !isFullscreen ? 'hidden' : 'hidden sm:block'}`}>
          <select
            value={playbackRate}
            onChange={(e) => { e.stopPropagation(); changeRate(Number(e.target.value)) }}
            onClick={(e) => e.stopPropagation()}
            className="h-8 appearance-none rounded-lg bg-transparent px-3 text-center text-[13px] font-medium text-[#f7f8f8] outline-none transition-all duration-150 hover:bg-white/[0.16] hover:backdrop-blur-[8px]"
            style={{ cursor: 'pointer' }}
          >
            {PLAYBACK_RATES.map((rate) => (
              <option key={rate} value={rate} className="bg-black text-white">{rate}x</option>
            ))}
          </select>
        </div>

        {/* Captions */}
        <button
          type="button" aria-label="Toggle captions (c)"
          onClick={(e) => { e.stopPropagation(); toggleCaptions() }}
          className={`${btnClass} ${captionsOn ? 'backdrop-blur-[8px] bg-white/[0.16]' : ''}`}
        >
          <CaptionsIcon active={captionsOn} />
        </button>

        {/* PiP — hidden in compact mode unless fullscreen */}
        <button
          type="button" aria-label="Picture in picture"
          onClick={(e) => { e.stopPropagation(); togglePip() }}
          className={`${btnClass} ${compact && !isFullscreen ? 'hidden' : 'hidden sm:flex'}`}
        >
          <PipIcon />
        </button>

        {/* Fullscreen */}
        <button type="button" aria-label={isFullscreen ? 'Exit fullscreen (f)' : 'Fullscreen (f)'} onClick={(e) => { e.stopPropagation(); toggleFullscreen() }} className={btnClass}>
          {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
        </button>
      </motion.div>
    </div>
  )
}
