'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import React, { useEffect, useState } from 'react'

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
