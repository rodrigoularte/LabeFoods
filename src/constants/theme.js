import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"


const theme = createTheme({
  palette: {
    primary: {
      main: "#5cb646"
    },
    secondary: {
      main: "#b8b8b8"
    },
    error: {
      main: red.A400
    }
  }
})

export default theme