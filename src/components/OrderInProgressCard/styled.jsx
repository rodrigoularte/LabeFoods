import styled from "styled-components"
import { ReactComponent as Clock } from "../../assets/clock.svg"

export const OrderInProgressContainer = styled.div `
  display: flex;
  align-items: center;
  justify-items: center;

  position: fixed;
  bottom: 50px;

  width: 100%;
  height: 118px;

  background-color: #5cb646;
`

export const OrderInfo = styled.div `
  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const Title = styled.p `
  color: white;
`


export const OrderInProgressContainerSpace = styled.div `
  height: 118px;
`

export const ClockStyled = styled(Clock) `
  width: 100px;
`