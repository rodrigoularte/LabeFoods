import React from "react"
import { CardBottom, DescriptionContainer, RestaurantCardContainer, RestaurantImg, RestaurantName } from "./styled"

const RestaurantCard = (props) => {

  return (
    <RestaurantCardContainer onClick={props.onClick}>
      <RestaurantImg url={props.logoUrl}/>
      <DescriptionContainer>
        <RestaurantName>{props.name}</RestaurantName>
        <CardBottom>
          <p>{`${props.deliveryTime} min`}</p>
          <p>{`Frete R$${props.shipping},00`}</p>
        </CardBottom>
      </DescriptionContainer>
    </RestaurantCardContainer>
  )
}

export default RestaurantCard