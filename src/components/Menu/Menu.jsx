import React from "react"
import { useNavigate } from "react-router-dom"
import { goToCartPage, goToHomePage, goToProfilePage } from "../../routes/coordinator"
import { AvatarStyled, CartStyled, HomeStyled, MenuContainer, MenuContainerSpace } from "./styled"


const Menu = ({page}) => {

  const navigate = useNavigate()

  return (
    <>
      <MenuContainer>
        <HomeStyled
          currentPage={page === "home"}
          onClick={() => goToHomePage(navigate)}
        />
        <CartStyled
          currentPage={page === "cart"}
          onClick={() => goToCartPage(navigate)}
        />
        <AvatarStyled
          currentPage={page === "profile"}
          onClick={() => goToProfilePage(navigate)}
        />
      </MenuContainer>
      <MenuContainerSpace/>
    </>
  )
}

export default Menu