import styled from "styled-components"

export const RestaurantCardContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  border-radius: 8px;
`

export const RestaurantImg = styled.div `
  max-width: 100%;
  height: 7.5rem;

  border-radius: 8px 8px 0 0;

  background-image: url(${p => p.url});
  background-size: cover;
  background-position: center;

  object-fit: contain;
`

export const DescriptionContainer = styled.div `
  display: flex;
  flex-direction: column;

  gap: 8px;

  padding-top: 12px;

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
  color: #5cb646
`

export const CardBottom = styled.div `
  display: flex;
  
  p{
    width: 104px;
  }
`