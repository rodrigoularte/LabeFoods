import { Button } from "@mui/material"
import styled from "styled-components"

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;
  min-height: 100vh;

  padding-top: 40px;
  padding-bottom: 50px;
`

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;

  width: 100%;

  background-color: #eeeeee;
`

export const AddressTitle = styled.p`
  color: #b8b8b8;
`

//--------------------------------------------------------------------------------------------
export const RestaurantInfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  gap: 8px;
  padding: 16px 16px 0 16px;

  border-radius: 8px;
`

export const DescriptionContainer = styled.div `
  display: flex;
  flex-direction: column;

  gap: 8px;

  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const RestaurantName = styled.h4 `
  height: 18px;

  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`
//--------------------------------------------------------------------------------------------

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  gap: 8px;
`

export const Total = styled.h3`
  color: #5cb646;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;

  background-color: black;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  gap: 8px;

  width: 100%;
`

export const ButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 16px;
`

export const ConfirmButton = styled(Button) `
  && {
    width: 100%;
    background-color: ${(p) => p.disabled ? "rgba(92, 182, 70, 0.5)" : "#5cb646"};
    color: black;

    :hover{
      background-color: ${(p) => p.disabled ? "rgba(92, 182, 70, 0.5)" : "#5cb646"};
    }
  }
`