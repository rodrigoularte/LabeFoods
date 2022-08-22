import styled from "styled-components"
import { ReactComponent as Home } from "../../assets/homepage.svg"
import { ReactComponent as Avatar } from "../../assets/avatar.svg"
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg"

export const MenuContainer = styled.nav `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 50px;

  box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.2), 0 -2px 1px -1px rgba(0,0,0,0.12), 0 -1px 3px 0 rgba(0,0,0,0.2);
  background-color: white;
`

export const MenuContainerSpace = styled.div `
  height: 34px;
`

export const HomeStyled = styled(Home) `
  fill: ${(p) => p.currentPage ? "#5CB646" : "#B8B8B8"};
`

export const CartStyled = styled(Cart) `
  fill: ${(p) => p.currentPage ? "#5CB646" : "#B8B8B8"};
`

export const AvatarStyled = styled(Avatar) `
  fill: ${(p) => p.currentPage ? "#5CB646" : "#B8B8B8"};
`