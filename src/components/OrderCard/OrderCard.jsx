import React from "react"
import { OrderCardContainer, OrderDate, RestaurantName } from "./styled"

const OrderCard = ({restaurantName, createdAt, totalPrice}) => {

  const converDate = (timeStamp) => {
    let date = new Date(timeStamp)
    return date.toLocaleDateString()
  }

  return(
    <OrderCardContainer key={createdAt}>
      <RestaurantName>{restaurantName}</RestaurantName>
      <OrderDate>{converDate(createdAt)}</OrderDate>
      <h4>{`${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h4>
    </OrderCardContainer>
  )
}

export default OrderCard