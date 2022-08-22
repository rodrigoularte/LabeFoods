import styled from "styled-components"
import TextField from '@mui/material/TextField'

export const Logo = styled.img `
  width: 104px;
`

export const TopText = styled.h4 `
  text-align: center;

  padding: 12px;
`

export const SignUpForm = styled.form `
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 8px 0;
  gap: 16px;
`

export const PasswordContainer = styled.div `
  display: flex;
  align-items: center;

  width: 100%;
`

export const PasswordInput = styled(TextField) `
  &&{
    width: 100%;
    }
`