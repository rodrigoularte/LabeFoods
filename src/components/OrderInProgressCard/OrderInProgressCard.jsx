import React from "react"
import { ClockStyled, OrderInfo, OrderInProgressContainer, OrderInProgressContainerSpace, Title } from "./styled"


const OrderInProgressCard = ({totalPrice, restaurantName}) => {

  return (
    <>
      <OrderInProgressContainer>
        <ClockStyled/>
        <OrderInfo>
          <Title>Pedido em andamento</Title>
          <p>{restaurantName}</p>
          <h4>{totalPrice && `${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h4>
        </OrderInfo>
      </OrderInProgressContainer>
      <OrderInProgressContainerSpace/>
    </>
  )
}

export default OrderInProgressCard