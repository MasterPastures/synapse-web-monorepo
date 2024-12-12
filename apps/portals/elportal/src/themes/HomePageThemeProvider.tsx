import { ThemeOptions, ThemeProvider, useTheme } from '@mui/material'
import { PropsWithChildren } from 'react'
import { DeepPartial } from 'synapse-react-client'
import { deepmerge } from '@mui/utils'

export function HomePageThemeProvider({ children }: PropsWithChildren) {
  const theme = useTheme()
  // Note if adapting for other portals: ensure portal-specific fonts are loaded in the portal styles
  const homePageOverrides: DeepPartial<ThemeOptions> = {
    typography: {
      headline1: {
        fontFamily: "'Merriweather', serif",
      },
      headline2: {
        fontFamily: "'Merriweather', serif",
      },
      headline3: {
        fontFamily: "'Merriweather', serif",
      },
    },
  }
  const mergedTheme = deepmerge(theme, homePageOverrides)

  return <ThemeProvider theme={mergedTheme}>{children}</ThemeProvider>
}
