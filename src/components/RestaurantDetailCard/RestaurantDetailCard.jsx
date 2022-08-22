import React from "react"
import { CardBottom, DescriptionContainer, RestaurantCardContainer, RestaurantImg, RestaurantName } from "./styled"

const RestaurantDetailCard = (props) => {

  return (
    <RestaurantCardContainer onClick={props.onClick}>
      <RestaurantImg url={props.logoUrl} />
      <DescriptionContainer>
        <RestaurantName>{props.name}</RestaurantName>
        <p>{`${props.category}`}</p>
        <CardBottom>
          <p>{`${props.deliveryTime} min`}</p>
          <p>{`Frete R$${props.shipping},00`}</p>
        </CardBottom>
        <p>{props.address}</p>
      </DescriptionContainer>
    </RestaurantCardContainer>
  )
}

export default RestaurantDetailCard