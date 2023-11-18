import { experimental_extendTheme as extendTheme } from '@mui/material'
import { teal, orange, deepOrange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: orange,
      },
    },
  },
})

export default theme
