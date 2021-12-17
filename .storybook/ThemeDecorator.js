import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './material-theme'
import { createTheme, MuiThemeProvider } from '@material-ui/core'
const theme = createTheme(Theme())


const ThemeDecorator = (StoryFn) => {
    return <ThemeProvider theme={theme}>{StoryFn()}</ThemeProvider>
}

export default ThemeDecorator