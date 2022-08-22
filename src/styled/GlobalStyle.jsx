import styled, { createGlobalStyle } from "styled-components"
import { Button } from "@mui/material"

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const AppContainer = styled.div `
  display: flex;
  justify-content: center;

  max-width: 100vw;
  min-height: 100vh;

  font-family: 'Roboto', sans-serif;

  /* background-color: ; */
`

export const PageContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  min-height: 100vh;

  padding: 48px 16px 16px 16px;

  gap: 8px;
`

export const FormButton = styled(Button) `
  && {
    background-color: #5cb646;
    color: black;

    :hover{
      background-color: #5cb646;
    }
  }
`