import styled from "styled-components"
import { Button } from "@mui/material"

export const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 1rem;
  margin: 60% 1rem 50% 1rem;
  gap: 16px;

  font-family: Roboto;
  font-size: 16px;

  background-color: white;
`

export const ModalTitle = styled.p`
  width: 100%;
  letter-spacing: -0.39px;
  text-align: center;
`

export const ModalSelect = styled.select`
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 4px;
  font-size: 16px;
`

export const ModalButton = styled(Button)`
  &&{
    font-size: 16px;
    padding-right: 0;
  }
`
