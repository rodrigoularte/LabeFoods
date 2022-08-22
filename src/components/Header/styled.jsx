import styled from "styled-components"
import { ArrowBackIosNew } from "@mui/icons-material"
import LogoutIcon from "@mui/icons-material/Logout"

export const HeaderContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%; 
  height: 40px;

  position: absolute;
  top: 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`

export const GoBackArrow = styled(ArrowBackIosNew) `
  && {
    position: absolute;
    left: 10px;

    width: 20px;
  }
`

export const Logout = styled(LogoutIcon) `
  && {
    position: absolute;
    right: 10px;

    width: 20px;
  }
`