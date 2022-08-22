import { ThemeProvider } from "@mui/material"
import React from "react"
import theme from "./constants/theme"
import GlobalState from "./global/GlobalState"
import Router from "./routes/Router"
import { AppContainer, GlobalStyle } from "./styled/GlobalStyle"

function App() {
  return (
    <GlobalState>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Router/>
        </ThemeProvider>
      </AppContainer>
    </GlobalState>
  )
}

export default App