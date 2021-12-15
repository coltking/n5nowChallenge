import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './material-theme'
import { createTheme, MuiThemeProvider } from '@material-ui/core'
const theme = createTheme(Theme())


const ThemeDecorator = storyFn => { return <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider> }

export default ThemeDecorator